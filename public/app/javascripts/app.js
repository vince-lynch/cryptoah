window.BigNumber = require('bignumber.js');
var Web3Accounts = require('web3-eth-accounts');
import { default as Web3} from 'web3';
import angularInview from 'angular-inview';

window.Accounts = new Web3Accounts()

var cryptoah = require('../../build/contracts/Cryptoah.json');

if (typeof web3 !== 'undefined') {
  console.warn("Using web3 detected from external source like Metamask - connected to blockchain")
  // Use Mist/MetaMask's provider
  window.web3 = new Web3(web3.currentProvider);
  window.connectionType = 'metamask';
} else {
  console.warn('using INFURA API - connected to blockchain');
  window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/X3DitjB079q7GsMCtanI"));
  window.connectionType = 'etherscan';
}
var Cryptoah = web3.eth.contract(cryptoah.abi);
window.contractAddress = '0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946';
window.contractInstance = Cryptoah.at(window.contractAddress);


// COMPONENTS
import ourLogo from './components/ourlogo.js';
import footerNav from './components/footer.js';
import team from './components/team.js';
import fund from './components/fund.js';
import lander from './components/lander.js';
import landerHeader from './components/lander-header.js';
import landerWaves from './components/lander-waves.js';
import sidebarDashboard from './components/sidebar-dashboard';
import shareOfPie from './components/shareOfPie.component';
import depositAddress from './components/depositAddress.component';
import signupModal from './components/signupModal.component';
import movingCube from './components/movingCube';


// SERVICES
import BasicService from './services/basicService';
import BalanceService from './services/balancesService';
import highStock from './services/highStock.factory';
import AuthService from './services/auth.service';
import FirestoreService from './services/firestore.service';

// Directives
import pieChart from './services/pieChart.directive';


var app = angular.module("myApp", ['ngRoute', 'angularMoment', 'ngAnimate', 'ngOdometer', 'angular-inview']);
  app.service('BalanceService', BalanceService)
  app.service('BasicService', BasicService)
  app.service('AuthService', AuthService)
  app.service('FirestoreService', FirestoreService)
  app.factory('highstock', highStock)
  app.directive('pieChart', pieChart)


  app.component('ourLogo', ourLogo)
  app.component('footerNav', footerNav)
  
  app.component('team', team)
  app.component('fund', fund)
  app.component('lander', lander)
  app.component('signupModal', signupModal)
  app.component('landerHeader', landerHeader)
  app.component('landerWaves', landerWaves)
  app.component('shareOfPie', shareOfPie)
  app.component('depositAddress', depositAddress)
  app.component('movingCube', movingCube)
  app.component('sidebarDashboard', sidebarDashboard)


  app.config(function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(false);

      $routeProvider
        .when('/', {
          template: `
            <lander-header></lander-header>
            <lander></lander>
          `
        })
        .when('/lander', {
          template: `
            <lander-header></lander-header>
            <lander></lander>
          `
        })
        .when('/team', {
          template: `
            <lander-header></lander-header>
            <team></team>
          `
        })
        .when('/fund', {
          template: `
            <lander-header></lander-header>
            <fund></fund>
          `
        })      
        .otherwise({
          templateUrl: 'partials/404.html'
        });
  });



/**
// CONNECT TO METAMASK OR infura node
**/
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    window.whichProvider = 'metamask';
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    console.log('using infura mainnet');
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/X3DitjB079q7GsMCtanI"));
    window.whichProvider = 'api';
  }

  // Now you can start your app & access web3 freely:
  var checkWeb3 = setInterval(function(){
    if(window.web3 !== undefined){
      clearInterval(checkWeb3);
      startApp();
    }
  }, 500)
})

var startApp = function(){
  console.log('Welcome to Cryptoah');

  //Cryptoah.setProvider(window.web3.currentProvider);
  window.Cryptoah = Cryptoah;


  window.web3.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
        console.log('This is mainnet')
        break
      case "4":
        console.log('This is the rinkeby test network.')
        break
      default:
        console.log('This is an unknown network.')
    }
  })

  console.log('you are using -', window.web3.eth.accounts[0]);

  /**
    Only start Angular After we have connected to Infura
    // Note: for metamask we can make this instant
  **/
  angular.element(function() {
    angular.bootstrap(document, ['myApp']);
  });
}













  




