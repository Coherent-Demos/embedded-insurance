(function() {
  'use strict';

  angular
    .module('coherentPaDemo')
    .controller('EmbeddedDBS2Controller', EmbeddedDBS2Controller);

  /** @ngInject */
  function EmbeddedDBS2Controller($state, EmbeddedService) {
    var vm = this;

    vm.activeProduct = EmbeddedService.activeProduct
    vm.productData = EmbeddedService.productData

    console.log(vm.productData)

    vm.title = vm.productData[vm.activeProduct + '_Title']
    vm.desc = vm.productData[vm.activeProduct + '_Desc']
    vm.CTAURL = vm.productData[vm.activeProduct + '_CTAURL']
    vm.Disclaimer = vm.productData[vm.activeProduct + '_Disclaimer']
    vm.Premium = vm.productData[vm.activeProduct + '_Premium']


  }
})();
