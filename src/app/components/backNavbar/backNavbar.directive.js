(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .directive('backNavbar', backNavbar);

  /** @ngInject */
  function backNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/backNavbar/backNavbar.html',
      scope: {
          content: '@',
          icon: '@',
          link: '@',
          removeMargin: '@'
      },
      controller: BackNavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BackNavbarController($scope, $state, $window) {
      var vm = this;

      vm.back = function() {
        if(vm.link) {
          $state.go(vm.link);
        } else {
          $window.history.back();
        }
      };

      vm.content = $scope.content;
      vm.icon = $scope.icon;
      vm.link = $scope.link;
      vm.removeMargin = angular.isDefined($scope.removeMargin) && $scope.removeMargin;
    }
  }

})();
