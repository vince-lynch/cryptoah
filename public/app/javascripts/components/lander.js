const lander = {
	templateUrl: 'templates/homepage/homepage.html',
	controller($scope, $http) {

		$scope.soldTokens = 0;
		$scope.totalSupply = 1000;
		$scope.connectedToEth = true;

		$scope.getTokenBalanceForAddress = function(address, totalSupply) {
			$http({method: 'GET', url: 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946&address=' + address + '&tag=latest&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ'})
			.then(function successCallback(response) {

				console.log('found balance', response);

				var theirTokenBalance = new BigNumber(response.data.result).toFixed(2);

				var percentageOfTotalSupply = (theirTokenBalance / totalSupply) * 100;

				console.log('address: ', address, "has: ", theirTokenBalance ," CAH tokens", percentageOfTotalSupply,"% of totalSupply");

			}, function errorCallback(response) {
				console.log('error in getting transfer events', response);
			});
		}


		$scope.calculateTokenHolders = function(totalSupply) {
			$http({method: 'GET', url:"https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=379224&toBlock=latest&address=0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ"})
			.then(function successCallback(response) {

				var results = response.data.result;

				console.log('response - tokenHolders', results)

				results.forEach(function(result) {
					$scope.getTokenBalanceForAddress(result.topics[2], totalSupply);
				});

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




		$scope.getTotalUSDRaised = function(totalSold){
			$http({method: 'GET',url: 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ'}).then(function successCallback(response) {
				console.log('price of ether', response.data.result.ethusd);
				$scope.totalRaised = ((totalSold / 10) * response.data.result.ethusd).toFixed(2);
				console.log('$scope.totalRaised', $scope.totalRaised);
			}, function errorCallback(response) {
				console.log('error in getting price of ether', response);
			});
		}

		console.log('reachingHere Twice (mortgage.js)');

		contractInstance.symbol.call(function(error, result){
			if(!error)
				console.log('erc20 symbol is:', result);
			else
				console.error(error);
		});
		contractInstance.name.call(function(error, result){
			if(!error)
				console.log('erc20 name is:', result);
			else
				console.error(error);
		});
		contractInstance.decimals.call(function(error, result){
			if(!error)
				console.log('erc20 decimals is:', result);
			else
				console.error(error);
		});
		contractInstance.totalSupply.call(function(error, result){
			if(!error) {
				console.log('erc20 totalSupply is:', new BigNumber(result).toFixed(2));
				$scope.$apply(function(){
					$scope.totalSupply = Number(new BigNumber(result).toFixed(2));
				})
			} else
			console.error(error);
		});
		contractInstance._remainingSupply.call(function(error, result){
			if(!error) {
				console.log('erc20 _remainingSupply is:',  new BigNumber(result).toFixed(2));
				$scope.$apply(function(){
					$scope.remainingSupply = Number(new BigNumber(result).toFixed(2));
				})
			} else
			console.error(error);
		});
		contractInstance._totalSold.call(function(error, result){
			if(!error) {
				console.log('erc20 _totalSold is:',  new BigNumber(result).toFixed(2));
				$scope.$apply(function(){
					$scope.totalSold = Number(new BigNumber(result).toFixed(2));
					$scope.getTotalUSDRaised($scope.totalSold);
				})
			} else
			console.error(error);
		});

	}
};

export default lander;