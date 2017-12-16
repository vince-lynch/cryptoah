const lander = {
	templateUrl: 'templates/homepage/homepage.html',
	controller($scope, $http) {

		$scope.soldTokens = 0;
		$scope.totalSupply = 1000;
		$scope.connectedToEth = true;


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



	}
};

export default lander;