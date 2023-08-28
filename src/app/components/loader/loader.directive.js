(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .directive('loader', loader);

  /** @ngInject */
  function loader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/loader/loader.html',
      controller: LoaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LoaderController($rootScope, $scope) {
      var vm = this;

      vm.loading = false;

      $scope.$watch('$root.loading', function() {
        vm.loading = $rootScope.loading;
      });
    }
  }

})();
