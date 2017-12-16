const shareOfPie = {
	templateUrl: 'templates/charts/pie.html',
	controller($scope, $http, $timeout) {

		$scope.soldTokens = 0;
		$scope.totalSupply = 1000;
		$scope.connectedToEth = true;

		$scope.livePortfolio = {id: 123, portfolioAssets: []}; // array of owners of Cryptoah

		$scope.portfolio = {
      id: 123,
      portfolioAssets: [{
          id: 123,
          name: 'Asset A',
          symbol: 'AAA',
          percentage: 10
      }, {
          id: 125,
          name: 'Asset C',
          symbol: 'CCC',
          percentage: 15
      }, {
          id: 126,
          name: 'Asset D',
          symbol: 'DDD',
          percentage: 10
      }, {
          id: 127,
          name: 'Asset E',
          symbol: 'BBB',
          percentage: 50
      }]
    };


				// $scope.portfolio.portfolioAssets.push({
    //       id: 123,
    //       name: 'unowned',
    //       symbol: ' CAH',
    //       percentage: 25
				// })

				
				// $scope.portfolio.portfolioAssets.push({
    //       id: 127,
    //       name: 'Asset E',
    //       symbol: 'BBB',
    //       percentage: 50
    //   })


				// $timeout(function() {
				// 	console.log('3 seconds has passed');



				// 	$scope.portfolio = {
			 //      id: 123,
			 //      portfolioAssets: [{
			 //          id: 123,
			 //          name: 'Asset A',
			 //          symbol: 'AAA',
			 //          percentage: 25
			 //      }, {
			 //          id: 125,
			 //          name: 'Asset C',
			 //          symbol: 'CCC',
			 //          percentage: 25
			 //      }, {
			 //          id: 126,
			 //          name: 'Asset D',
			 //          symbol: 'DDD',
			 //          percentage: 25
			 //      }, {
			 //          id: 127,
			 //          name: 'Asset E',
			 //          symbol: 'BBB',
			 //          percentage: 25
			 //      }]
			 //    };

				// }, 3000);

		var getPercentageSold = function(totalSupply) {
			contractInstance._totalSold.call(function(error, result){
				if(!error) {
					console.log('erc20 _totalSold is:',  new BigNumber(result).toFixed(2));
					$scope.$apply(function(){
						$scope.totalSold = Number(new BigNumber(result).toFixed(2));
						$scope.percentageSold = '< ' + Math.ceil((Number(new BigNumber(result).toFixed(2)) / totalSupply) * 100) + ' %';
					})
				} else
				console.error(error);
			});
		}


		$scope.getTokenBalanceForAddress = function(address, totalSupply) {
			return $http({method: 'GET', url: 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946&address=' + address + '&tag=latest&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ'})
		}


		$scope.calculateTokenHolders = function(totalSupply) {
			$http({method: 'GET', url:"https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=379224&toBlock=latest&address=0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ"})
			.then(function successCallback(response) {

				var results = response.data.result;

				var doNext = function(i){
					var result = results[i]
					$scope.getTokenBalanceForAddress(result.topics[2], totalSupply)
					.then(function successCallback(response) {

						var address = result.topics[2];
						var theirTokenBalance = new BigNumber(response.data.result).toFixed(2);
						var percentageOfTotalSupply = (theirTokenBalance / totalSupply) * 100;
						console.log('address: ', address, "has: ", theirTokenBalance ," CAH tokens", percentageOfTotalSupply,"% of totalSupply");

						$scope.livePortfolio.portfolioAssets.push({
		          id: i,
		          name: address,
		          symbol: theirTokenBalance + ' CAH',
		          percentage: percentageOfTotalSupply
						});

						// increment i
						i++
						if(i < results.length) {
							doNext(i)
						} else {

							// finally get owners amount & display results in piechart
							$scope.getTokenBalanceForAddress('0x2992d108628dc832e239a8e243712679c9443404', totalSupply)
							.then(function(response){
								let theirTokenBalance = new BigNumber(response.data.result).toFixed(2);
								let percentageOfTotalSupply = (theirTokenBalance / totalSupply) * 100;
								$scope.livePortfolio.portfolioAssets.push({
				          id: i + 1,
				          name: 'unowned',
				          symbol: ' CAH',
				          percentage: percentageOfTotalSupply
								});

								getPercentageSold(totalSupply);

								//display results in piechart
								$scope.portfolio = $scope.livePortfolio;
							})

						}

					});
				}
				doNext(0)

			}, function errorCallback(response) {
				console.log('error in getting transfer events', response);
			});
		}

		var getTotalSupply = function() {
			$http({method: 'GET', url:"https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ"})
			.then(function successCallback(response) {
				console.log('getTotalSupply', response)
				var totalSupply = response.data.result;
				$scope.calculateTokenHolders(totalSupply);
			})
		}
		getTotalSupply();


	}
};

export default shareOfPie;