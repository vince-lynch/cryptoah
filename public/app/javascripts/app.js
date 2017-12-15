// var cryptoahContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"checkAllowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_remainingSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_anum","type":"uint256"},{"name":"_bnum","type":"uint256"},{"name":"_addr","type":"address"}],"name":"admin","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"myBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"accountAddress","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogDepositMade","type":"event"}]);
// var cryptoah = cryptoahContract.new(
//    {
//      from: web3.eth.accounts[0], 
//      data: '0x60606040526000600355600a60055534156200001a57600080fd5b33600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280600381526020017f434148000000000000000000000000000000000000000000000000000000000081525060019080519060200190620000a89291906200015d565b506040805190810160405280600881526020017f43727970746f616800000000000000000000000000000000000000000000000081525060009080519060200190620000f69291906200015d565b506901b1ae4d6e2ef5000000600481905550600454600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506004546002819055506200020c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001a057805160ff1916838001178555620001d1565b82800160010185558215620001d1579182015b82811115620001d0578251825591602001919060010190620001b3565b5b509050620001e09190620001e4565b5090565b6200020991905b8082111562000205576000816000905550600101620001eb565b5090565b90565b6119a7806200021c6000396000f300606060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610111578063095ea7b31461019f57806318160ddd146101f957806323b872dd14610222578063313ce5671461029b57806341c0e1b5146102ca57806370a08231146102df5780638b099b231461032c5780638da5cb5b1461039857806395d89b41146103ed578063a64d98051461047b578063a9059cbb146104a4578063aaf10fc7146104e6578063c9116b691461053e578063cae9ca5114610567578063d0e30db014610604578063dd62ed3e1461060e578063eca9d8701461067a578063f8b2cb4f146106a3575b61010f6106f0565b005b341561011c57600080fd5b61012461090d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610164578082015181840152602081019050610149565b50505050905090810190601f1680156101915780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101aa57600080fd5b6101df600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109ab565b604051808215151515815260200191505060405180910390f35b341561020457600080fd5b61020c610a38565b6040518082815260200191505060405180910390f35b341561022d57600080fd5b610281600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a46565b604051808215151515815260200191505060405180910390f35b34156102a657600080fd5b6102ae610b73565b604051808260ff1660ff16815260200191505060405180910390f35b34156102d557600080fd5b6102dd610b78565b005b34156102ea57600080fd5b610316600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ca3565b6040518082815260200191505060405180910390f35b341561033757600080fd5b610382600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610cbb565b6040518082815260200191505060405180910390f35b34156103a357600080fd5b6103ab610d42565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103f857600080fd5b610400610d68565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610440578082015181840152602081019050610425565b50505050905090810190601f16801561046d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561048657600080fd5b61048e610e06565b6040518082815260200191505060405180910390f35b34156104af57600080fd5b6104e4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e0c565b005b610524600480803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e73565b604051808215151515815260200191505060405180910390f35b341561054957600080fd5b6105516112e7565b6040518082815260200191505060405180910390f35b341561057257600080fd5b6105ea600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061132e565b604051808215151515815260200191505060405180910390f35b61060c6106f0565b005b341561061957600080fd5b610664600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114ac565b6040518082815260200191505060405180910390f35b341561068557600080fd5b61068d6114d1565b6040518082815260200191505060405180910390f35b34156106ae57600080fd5b6106da600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114d7565b6040518082815260200191505060405180910390f35b600034600254101561070157600080fd5b7fa8126f7572bb1fdeae5b5aa9ec126438b91f658a07873f009d041ae690f3a1933334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160055434029050806002540360028190555080600354016003819055506002546003540160048190555080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060025460076000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505050505081565b600081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b600060035460025401905090565b6000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610ad357600080fd5b81600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550610b68848484611520565b600190509392505050565b601281565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610ca1576040805190810160405280600481526020017f444541440000000000000000000000000000000000000000000000000000000081525060019080519060200190610c199291906118d6565b506040805190810160405280600981526020017f343034204d4f564544000000000000000000000000000000000000000000000081525060009080519060200190610c659291906118d6565b50600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b60076020528060005260406000206000915090505481565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dfe5780601f10610dd357610100808354040283529160200191610dfe565b820191906000526020600020905b815481529060010190602001808311610de157829003601f168201915b505050505081565b60025481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e6f57610e6e338383611520565b5b5050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156112df576001841415610edf57610ede8284611836565b5b60028414156110805782600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550826002540360028190555082600354016003819055506002546003540160048190555060025460076000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a35b60038414156112215782600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550826002540160028190555082600354036003819055506002546003540160048190555060025460076000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a35b60048414156112a757826002819055506002546003540160048190555060025460076000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60058414156112c55782600381905550600254600354016004819055505b60068414156112d657826005819055505b600190506112e0565b5b9392505050565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008084905061133e85856109ab565b156114a3578073ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338630876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561143857808201518184015260208101905061141d565b50505050905090810190601f1680156114655780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561148657600080fd5b6102c65a03f1151561149757600080fd5b505050600191506114a4565b5b509392505050565b6008602052816000526040600020602052806000526040600020600091509150505481565b60035481565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000808373ffffffffffffffffffffffffffffffffffffffff161415151561154757600080fd5b81600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561159557600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111151561162357600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401905081600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a380600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540114151561183057fe5b50505050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561189257600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156118d257600080fd5b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061191757805160ff1916838001178555611945565b82800160010185558215611945579182015b82811115611944578251825591602001919060010190611929565b5b5090506119529190611956565b5090565b61197891905b8082111561197457600081600090555060010161195c565b5090565b905600a165627a7a7230582088e7fed4e12019da8892f39c280c3b6bd8b358ed7962a1089115e8d3b69c302b0029', 
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  })



import { default as Web3} from 'web3';


var subDomain = window.location.host.split('.')[0];


//import { default as contract } from 'truffle-contract'


var cryptoah = require('../../build/contracts/Cryptoah.json');
var Cryptoah = web3.eth.contract(cryptoah.abi);

window.contractAddress = '0x1d29035eacc4a8bf72a9d776aa9e546cdd7dd946';
window.contractInstance = Cryptoah.at(window.contractAddress);

//console.log('window.contractInstance.name.call();', window.contractInstance.name.call());


contractInstance.symbol.call(function(error, result){
 if(!error)
     console.log(result)
 else
     console.error(error);
});



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













  




