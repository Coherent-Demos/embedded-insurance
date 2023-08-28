(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .config(config);

  /** @ngInject */
  function config($httpProvider, $logProvider, $translateProvider, toastrConfig) {

    var reqs = {};
    var rejected = 0;

    // Apply interceptors for loader
    $httpProvider.interceptors.push(function($q, $rootScope) {
      return {
        request: function(config) {
          reqs[config.url] = true;

          $rootScope.loading = true;

          return config;
        },

        requestError: function(rejection) {
          rejected++;

          var reqsLeft = Object.keys(reqs).length;
          if (reqsLeft === 0 || reqsLeft === rejected) {
            reqs = {};
            $rootScope.loading = false;
          }

          return $q.reject(rejection);
        },

        response: function(response) {
          if (reqs[response.config.url]) {
            delete reqs[response.config.url];
          }

          var reqsLeft = Object.keys(reqs).length;
          if (reqsLeft === 0 || reqsLeft === rejected) {
            reqs = {};
            $rootScope.loading = false;
          }

          return response;
        },

        responseError: function(rejection) {
          rejected++;

          var reqsLeft = Object.keys(reqs).length;
          if (reqsLeft === 0 || reqsLeft === rejected) {
            reqs = {};
            $rootScope.loading = false;
          }

          return $q.reject(rejection);
        }
      };
    });

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $translateProvider
      .useStaticFilesLoader({
        prefix: '/assets/translations/locale-',
        suffix: '.json'
      })
      .useLoaderCache(true)
      .forceAsyncReload(true)
      .preferredLanguage('jp');
  }

})();
