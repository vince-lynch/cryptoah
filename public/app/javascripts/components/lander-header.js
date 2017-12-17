var landerHeader = {
  templateUrl: 'templates/homepage/header.html',
controller($scope, $http) {

	$scope.connectionType = window.connectionType;

	$scope.walletAddress =  web3.eth.accounts[0];


  }
};

export default landerHeader;