(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
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
      })
      .state('catalog-search', {
        url: '/catalog/:urlSearchTerm',
        templateUrl: 'app/catalog/catalog-landing.html',
        controller: 'CatalogLandingController',
        controllerAs: 'cont'
      })
      .state('catalog-search-features', {
        url: '/catalog-features/:urlSearchTerm',
        templateUrl: 'app/catalog/catalog-landing.html',
        controller: 'CatalogLandingController',
        controllerAs: 'cont'
      })
      .state('catalog-landing', {
        url: '/catalog',
        templateUrl: 'app/catalog/catalog-landing.html',
        controller: 'CatalogLandingController',
        controllerAs: 'cont'
      });


    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'app/404.html'
      });

    $urlRouterProvider.otherwise('/404');
  }

})();
