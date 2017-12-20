var landerHeader = {
  templateUrl: 'templates/homepage/header.html',
  controller($scope, $http, AuthService) {

    if(AuthService.loggedIn){
      $scope.avatar = AuthService.loggedIn.photoURL;
      $scope.signOut = AuthService.signOut;
    }
    $scope.connectionType = window.connectionType;
    $scope.walletAddress =  web3.eth.accounts[0];


  }
};

export default landerHeader;