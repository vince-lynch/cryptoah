var lander = {
	templateUrl: 'templates/homepage/homepage.html',
	controller($scope, $http) {

		$scope.soldTokens = 0;
		$scope.totalSupply = 1000;
		$scope.connectedToEth = true;


		$scope.sectionInview = function(nameofSection){
			console.log('nameofSection inview', nameofSection);
		}


		$scope.deposit = function(){
			contractInstance.deposit({from: web3.eth.accounts[0], gas: 3000000, value: 100}, function(err, res){
				// write code to wait for transaction to be mined to notify user
			});
		}


		$scope.getTotalUSDS = function(inputTokens){
			return new Promise((resolve, reject) =>{

				$http({method: 'GET',url: 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ'}).then(function successCallback(response) {
					var result = ((inputTokens / 1000000000000000000) * response.data.result.ethusd).toFixed(2);
					resolve(result);
				}, function errorCallback(response) {
					console.log('error in getting price of ether', response);
					reject(response);
				});

			})
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
					$scope.totalSupply = new BigNumber(result).toFixed(2);
					$scope.getTotalUSDS($scope.totalSupply).then((valuation) =>{
						$scope.USDValuationOfTotalTokens =  new BigNumber(valuation).toFixed(2);
						console.log('$scope.USDValuationOfTotalTokens', $scope.USDValuationOfTotalTokens);
					});
				})
			} else
			console.error(error);
		});
		contractInstance._remainingSupply.call(function(error, result){
			if(!error) {
				console.log('erc20 _remainingSupply is:',  new BigNumber(result).toFixed(2));
				$scope.$apply(function(){
					$scope.remainingSupply = new BigNumber(result).toFixed(2);
				})
			} else
			console.error(error);
		});



	}
};

export default lander;