import { default as Web3} from 'web3';


var subDomain = window.location.host.split('.')[0];


import { default as contract } from 'truffle-contract'

var cryptoah_rinkeby = require('../../build/contracts/rinkeby/Voting.json');

var cryptoah = require('../../build/contracts/Voting.json');

if(subDomain == "test" || subDomain == "staging" ){ // check if we are wanting to use testnetwork
 var cryptoah = cryptoah_rinkeby;
}
var Cryptoah = contract(cryptoah);




// CONTROLLERS
import dashboardCtrl from './controllers/dashboard.js';
import hoverbarController from './controllers/hoverbar.js';
import assetsCtrl from './controllers/assets.js';
import homepageController from './controllers/homepage.js';
import TransactionsCtrl from  './controllers/transactions.js';
import walletCtrl from  './controllers/wallet.js';
import testPaymentCtrl from  './controllers/testPaymentCtrl.js';
import accessViaEmailController from './controllers/findWalletbyId';


// COMPONENTS
import ourLogo from './components/ourlogo.js';
import headerNav from './components/header.js';
import footerNav from './components/footer.js';
import team from './components/team.js';
import fund from './components/fund.js';
import lander from './components/lander.js';
import landerHeader from './components/lander-header.js';
import landerWaves from './components/lander-waves.js';

// SERVICES
import BasicService from './services/basicService';
import BalanceService from './services/balancesService';

//FACTORIES
import injectCSS from './services/cssFactory';

var app = angular.module("myApp", ['ngRoute', 'angularMoment', 'ngAnimate', 'ngOdometer']);
app.controller('dashboardCtrl', dashboardCtrl)
  app.controller('hoverbarController', hoverbarController)
  app.controller('assetsCtrl', assetsCtrl)
  app.controller('homepageController', homepageController)
  app.controller('TransactionsCtrl', TransactionsCtrl)
  app.controller('walletCtrl', walletCtrl)
  app.controller('testPaymentCtrl', testPaymentCtrl)
  app.controller('accessViaEmailController', accessViaEmailController)


  app.service('BalanceService', BalanceService)
  app.service('BasicService', BasicService)
  app.factory('injectCSS', injectCSS)

  app.component('headerNav', headerNav)
  app.component('ourLogo', ourLogo)
  app.component('footerNav', footerNav)
  
  app.component('team', team)
  app.component('fund', fund)
  app.component('lander', lander)
  app.component('landerHeader', landerHeader)
  app.component('landerWaves', landerWaves)

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
            <header-nav></header-nav>
            <team></team>
          `
        })
        .when('/fund', {
          template: `
            <header-nav></header-nav>
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
    if(subDomain == "test"  || subDomain == "staging" ){ // check if we are wanting to use testnetwork
      console.log('using infura rinkeby');
      window.web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/X3DitjB079q7GsMCtanI"));
    
      window.whichProvider = 'api';
    } else { // use mainnet
      console.log('using infura mainnet');
      window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/X3DitjB079q7GsMCtanI"));

      window.whichProvider = 'api';
    }
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

  Cryptoah.setProvider(window.web3.currentProvider);
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













  




