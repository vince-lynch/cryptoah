var sidebarDashboard = {
  templateUrl: 'templates/homepage/sidebar-dashboard.html',
	controller($scope, $http, AuthService) {

		$scope.connectionType = window.connectionType;
		$scope.walletAddress =  web3.eth.accounts[0];


		// the option to allow the userTo SigninViaGoogle
		$scope.signinViaGoogle = function(){
      AuthService.signinViaGoogle();
		}

    if(AuthService.loggedIn){
      $scope.avatar = AuthService.loggedIn.photoURL;
      $scope.signOut = AuthService.signOut;
      $scope.identityConnected = true;
    }


		var getEtherBalance = function(address){
			$http({method: 'GET', url: 'https://api.etherscan.io/api?module=account&action=balance&address='+ address +'&tag=latest&apikey=DRDH19DFJ5G2S1GUZGYHJUQY39NQFBVIQJ'})
			.then(function successCallback(response) {
				console.log('gotEtherBalance', (response.data.result / 1000000000000000000).toFixed(2))
				$scope.etherBalance = (response.data.result / 1000000000000000000).toFixed(2);
			}, function errorCallback(response) {
				console.log('error in getEtherBalance ', response);
			});
		}


		var getTokenBalance = function(address) {
			contractInstance.getBalance.call(address, function(error, result){
				if(!error) {
					console.log('myTokenBalance is:',  new BigNumber(result).toFixed(2) / 1000000000000000000);
					$scope.$apply(function(){
						$scope.myTokenBalance = new BigNumber(result).toFixed(2) / 1000000000000000000;
					})
				} else
				console.error(error);
			});
		}

		// if user is logged in to their metamask wallet then get their token balance
		if ($scope.walletAddress !== undefined){
			getTokenBalance($scope.walletAddress);
			getEtherBalance($scope.walletAddress);
		}


  }
};

export default sidebarDashboard;