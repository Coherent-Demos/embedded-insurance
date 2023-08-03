(function() {
  'use strict';

  angular
    .module('coherentPaDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('purchase-1-viber', {
        url: '/purchases/1?vid&agent',
        templateUrl: 'app/purchase/purchase-1.html',
        controller: 'Purchase1Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-1', {
        url: '/purchases/1',
        templateUrl: 'app/purchase/purchase-1.html',
        controller: 'Purchase1Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-embedded', {
        url: '/purchases/embedded',
        templateUrl: 'app/purchase/purchase-embedded.html',
        controller: 'PurchaseEmbeddedController',
        controllerAs: 'purchase'
      })
      // .state('purchase-1-agent', {
      //   url: '/purchases/1/:agent',
      //   templateUrl: 'app/purchase/purchase-1.html',
      //   controller: 'Purchase1Controller',
      //   controllerAs: 'purchase'
      // })
      .state('purchase-2', {
        url: '/purchases/2',
        templateUrl: 'app/purchase/purchase-2.html',
        controller: 'Purchase2Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-3', {
        url: '/purchases/3',
        templateUrl: 'app/purchase/purchase-3.html',
        controller: 'Purchase3Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-4', {
        url: '/purchases/4',
        templateUrl: 'app/purchase/purchase-4.html',
        controller: 'Purchase4Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-5', {
        url: '/purchases/5',
        templateUrl: 'app/purchase/purchase-5.html',
        controller: 'Purchase5Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-6', {
        url: '/purchases/6',
        templateUrl: 'app/purchase/purchase-6.html',
        controller: 'Purchase6Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-7', {
        url: '/purchases/7',
        templateUrl: 'app/purchase/purchase-7.html',
        controller: 'Purchase7Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-8', {
        url: '/purchases/8',
        templateUrl: 'app/purchase/purchase-8.html',
        controller: 'Purchase8Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-9', {
        url: '/purchases/9',
        templateUrl: 'app/purchase/purchase-9.html',
        controller: 'Purchase9Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-91', {
        url: '/purchases/91',
        templateUrl: 'app/purchase/purchase-9.1.html',
        controller: 'Purchase91Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-92', {
        url: '/purchases/92',
        templateUrl: 'app/purchase/purchase-9.2.html',
        controller: 'Purchase92Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-10', {
        url: '/purchases/10',
        templateUrl: 'app/purchase/purchase-10.html',
        controller: 'Purchase10Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-11', {
        url: '/purchases/11',
        templateUrl: 'app/purchase/purchase-11.html',
        controller: 'Purchase11Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-12', {
        url: '/purchases/12',
        templateUrl: 'app/purchase/purchase-12.html',
        controller: 'Purchase12Controller',
        controllerAs: 'purchase'
      })
      .state('purchase-13', {
        url: '/purchases/13',
        templateUrl: 'app/purchase/purchase-13.html',
        controller: 'Purchase13Controller',
        controllerAs: 'purchase'
      });

    $stateProvider
      .state('embedded-dbs-1', {
        url: '/embedded/dbs-1',
        templateUrl: 'app/embedded/embedded-dbs-1.html',
        controller: 'EmbeddedDBS1Controller',
        controllerAs: 'cont'
      })
      .state('embedded-dbs-2', {
        url: '/embedded/dbs-2',
        templateUrl: 'app/embedded/embedded-dbs-2.html',
        controller: 'EmbeddedDBS2Controller',
        controllerAs: 'cont'
      })  
      .state('embedded-flex-1', {
        url: '/embedded/flex-1',
        templateUrl: 'app/embedded/embedded-flex-1.html',
        controller: 'EmbeddedFlex1Controller',
        controllerAs: 'cont'
      })
      .state('embedded-flex-2', {
        url: '/embedded/flex-2',
        templateUrl: 'app/embedded/embedded-flex-2.html',
        controller: 'EmbeddedFlex2Controller',
        controllerAs: 'cont'
      })
      .state('embedded-flex-3', {
        url: '/embedded/flex-3',
        templateUrl: 'app/embedded/embedded-flex-3.html',
        controller: 'EmbeddedFlex3Controller',
        controllerAs: 'cont'
      })
      .state('embedded-flex-4', {
        url: '/embedded/flex-4',
        templateUrl: 'app/embedded/embedded-flex-4.html',
        controller: 'EmbeddedFlex4Controller',
        controllerAs: 'cont'
      })
      .state('embedded-flex-invest', {
        url: '/embedded/flex-invest',
        templateUrl: 'app/embedded/embedded-flex-invest.html',
        controller: 'EmbeddedFlexInvestController',
        controllerAs: 'cont'
      })
      .state('embedded-landing', {
        url: '/',
        templateUrl: 'app/embedded/landing.html',
        controller: 'LandingController',
        controllerAs: 'cont'
      })
      .state('pay-bills-1', {
        url: '/pay-bills-1',
        templateUrl: 'app/embedded/pay-bills-1.html',
        controller: 'PayBills1Controller',
        controllerAs: 'cont'
      })
      .state('pay-bills-2', {
        url: '/pay-bills-2',
        templateUrl: 'app/embedded/pay-bills-2.html',
        controller: 'PayBills2Controller',
        controllerAs: 'cont'
      })
      .state('pay-bills-3', {
        url: '/pay-bills-3',
        templateUrl: 'app/embedded/pay-bills-3.html',
        controller: 'PayBills3Controller',
        controllerAs: 'cont'
      })
      .state('pay-bills-4', {
        url: '/pay-bills-4',
        templateUrl: 'app/embedded/pay-bills-4.html',
        controller: 'PayBills4Controller',
        controllerAs: 'cont'
      })
      .state('ins-upsell-1', {
        url: '/ins-upsell-1',
        templateUrl: 'app/embedded/ins-upsell-1.html',
        controller: 'InsUpsell1Controller',
        controllerAs: 'cont'
      })
      .state('ins-upsell-2', {
        url: '/ins-upsell-2',
        templateUrl: 'app/embedded/ins-upsell-2.html',
        controller: 'InsUpsell2Controller',
        controllerAs: 'cont'
      })
      .state('ins-upsell-3', {
        url: '/ins-upsell-3',
        templateUrl: 'app/embedded/ins-upsell-3.html',
        controller: 'InsUpsell3Controller',
        controllerAs: 'cont'
      })
      .state('ins-upsell-4', {
        url: '/ins-upsell-4',
        templateUrl: 'app/embedded/ins-upsell-4.html',
        controller: 'InsUpsell4Controller',
        controllerAs: 'cont'
      })
      .state('ins-upsell-5', {
        url: '/ins-upsell-5',
        templateUrl: 'app/embedded/ins-upsell-5.html',
        controller: 'InsUpsell5Controller',
        controllerAs: 'cont'
      })
      .state('embedded-spending', {
        url: '/embedded/spending',
        templateUrl: 'app/embedded/embedded-spending.html',
        controller: 'SpendingController',
        controllerAs: 'cont'
      })
      .state('embedded-activation', {
        url: '/embedded/activation',
        templateUrl: 'app/embedded/activation.html',
        controller: 'ActivationController',
        controllerAs: 'cont'
      });

    $stateProvider
      .state('micro-1', {
        url: '/micro/1/:policyNumber',
        templateUrl: 'app/micro/micro-1.html',
        controller: 'Micro1Controller',
        controllerAs: 'micro'
      })
      .state('micro-2', {
        url: '/micro/2',
        templateUrl: 'app/micro/micro-2.html',
        controller: 'Micro2Controller',
        controllerAs: 'micro'
      })
      .state('micro-3', {
        url: '/micro/3',
        templateUrl: 'app/micro/micro-3.html',
        controller: 'Micro3Controller',
        controllerAs: 'micro'
      })
      .state('micro-4', {
        url: '/micro/4/:policyNumberCI',
        templateUrl: 'app/micro/micro-4.html',
        controller: 'Micro4Controller',
        controllerAs: 'micro'
      })
      .state('micro-5', {
        url: '/micro/5/:policyNumberBP',
        templateUrl: 'app/micro/micro-5.html',
        controller: 'Micro5Controller',
        controllerAs: 'micro'
      });

    $stateProvider
      .state('reward-1', {
        url: '/reward/1',
        templateUrl: 'app/reward/reward-1.html',
        controller: 'Reward1Controller',
        controllerAs: 'reward'
      })
      .state('reward-2', {
        url: '/reward/2',
        templateUrl: 'app/reward/reward-2.html',
        controller: 'Reward2Controller',
        controllerAs: 'reward'
      })
      .state('reward-landing', {
        url: '/reward/landing',
        templateUrl: 'app/reward/reward-landing.html',
        controller: 'RewardLandingController',
        controllerAs: 'reward'
      })

    $stateProvider
      .state('policy-login', {
        url: '/policy/login',
        templateUrl: 'app/policy/policy-login.html',
        controller: 'PolicyLoginController',
        controllerAs: 'policy'
      })
      .state('policy-1', {
        url: '/policies-1/:policyNumber',
        templateUrl: 'app/policy/policy-1.html',
        controller: 'Policy1Controller',
        controllerAs: 'policy'
      })
      .state('policy-detail', {
        url: '/policy-detail',
        templateUrl: 'app/policy/policy-detail.html',
        controller: 'PolicyDetailController',
        controllerAs: 'policy'
      })
      .state('policy-edit-details', {
        url: '/policy-edit-details',
        templateUrl: 'app/policy/policy-edit-details.html',
        controller: 'PolicyEditDetailController',
        controllerAs: 'policy'
      })
      .state('policy-confirmation', {
        url: '/policy-confirmation',
        templateUrl: 'app/policy/policy-confirmation.html',
        controller: 'PolicyConfirmationController',
        controllerAs: 'policy'
      })
      .state('policy-renew', {
        url: '/policy-renew',
        templateUrl: 'app/policy/policy-renew.html',
        controller: 'PolicyRenewController',
        controllerAs: 'policy'
      })
      .state('policy-cancel', {
        url: '/policy-cancel',
        templateUrl: 'app/policy/policy-cancel.html',
        controller: 'PolicyCancelController',
        controllerAs: 'policy'
      });

    $stateProvider
      .state('claim-2', {
        url: '/claims/2',
        templateUrl: 'app/claim/claim-2.html',
        controller: 'Claim2Controller',
        controllerAs: 'claim'
      })
      .state('claim-3', {
        url: '/claims/3',
        templateUrl: 'app/claim/claim-3.html',
        controller: 'Claim3Controller',
        controllerAs: 'claim'
      })
      .state('claim-4', {
        url: '/claims/4?id',
        templateUrl: 'app/claim/claim-4.html',
        controller: 'Claim4Controller',
        controllerAs: 'claim'
      })
      .state('claim-5', {
        url: '/claims/5?id',
        templateUrl: 'app/claim/claim-5.html',
        controller: 'Claim5Controller',
        controllerAs: 'claim'
      })
      .state('claim-51', {
        url: '/claims/51?id',
        templateUrl: 'app/claim/claim-5.1.html',
        controller: 'Claim51Controller',
        controllerAs: 'claim'
      })
      .state('claim-6', {
        url: '/claims/6?id',
        templateUrl: 'app/claim/claim-6.html',
        controller: 'Claim6Controller',
        controllerAs: 'claim'
      })
      .state('claim-7', {
        url: '/claims/7?id',
        templateUrl: 'app/claim/claim-7.html',
        controller: 'Claim7Controller',
        controllerAs: 'claim'
      })
      .state('claim-8', {
        url: '/claims/8?id',
        templateUrl: 'app/claim/claim-8.html',
        controller: 'Claim8Controller',
        controllerAs: 'claim'
      })
      .state('claim-9', {
        url: '/claims/9',
        templateUrl: 'app/claim/claim-9.html',
        controller: 'Claim9Controller',
        controllerAs: 'claim'
      })
      .state('claim-quick-claim', {
        url: '/claims/quickclaim',
        templateUrl: 'app/claim/quick-claim.html',
        controller: 'ClaimQuickClaimController',
        controllerAs: 'claim'
      });

    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'app/404.html'
      });

    $urlRouterProvider.otherwise('/404');
  }

})();
