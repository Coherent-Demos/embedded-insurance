(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .controller('SpendingController', ctrl);

  /** @ngInject */
  function ctrl($state,
                EmbeddedService,
                EmbeddedFactory,
                $http) {
    var vm = this;
    vm.totalTransactions = 0
    vm.index = EmbeddedService.activePersonaID-1
    vm.personas = EmbeddedService.personas
    console.log(vm.index)
    console.log(vm.personas)

    vm.activePersona = EmbeddedService.activePersona
    vm.txn1 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Health"])) 
    vm.txn2 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Child"])) 
    vm.txn3 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Retail_shopping"])) 
    vm.txn4 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Automotive"])) 
    vm.txn5 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Rent"])) 
    vm.txn6 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Travel"])) 
    vm.txn7 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Currency"])) 

    vm.totalTransactions = Math.abs(vm.txn1 + vm.txn2  + vm.txn3 + vm.txn4 + vm.txn5 + vm.txn6 + vm.txn7)

    vm.txn1Pct = Math.round(vm.txn1 / vm.totalTransactions  * 100)
    vm.txn2Pct = Math.round(vm.txn2 / vm.totalTransactions  * 100)
    vm.txn3Pct = Math.round(vm.txn3 / vm.totalTransactions  * 100)
    vm.txn4Pct = Math.round(vm.txn4 / vm.totalTransactions  * 100)
    vm.txn5Pct = Math.round(vm.txn5 / vm.totalTransactions  * 100)
    vm.txn6Pct = Math.round(vm.txn6 / vm.totalTransactions  * 100)
    vm.txn7Pct = Math.round(vm.txn7 / vm.totalTransactions  * 100)

    vm.txn1Count = Math.round(vm.txn1 / 100)
    vm.txn2Count = Math.round(vm.txn2 / 100)
    vm.txn3Count = Math.round(vm.txn3 / 100)
    vm.txn4Count = Math.round(vm.txn4 / 100)
    vm.txn5Count = Math.round(vm.txn5 / 100)
    vm.txn6Count = Math.round(vm.txn6 / 100)
    vm.txn7Count = Math.round(vm.txn7 / 100)


    vm.arclength1 = vm.txn1 / vm.totalTransactions * 565
    vm.arclength2 = vm.txn2 / vm.totalTransactions * 565
    vm.arclength3 = vm.txn3 / vm.totalTransactions * 565
    vm.arclength4 = vm.txn4 / vm.totalTransactions * 565
    vm.arclength5 = vm.txn5 / vm.totalTransactions * 565
    vm.arclength6 = vm.txn6 / vm.totalTransactions * 565
    vm.arclength7 = vm.txn7 / vm.totalTransactions * 565
    
    vm.offset1 = -1 * (0)
    vm.offset2 = -1 * (vm.arclength1)
    vm.offset3 = -1 * (vm.arclength1 + vm.arclength2)
    vm.offset4 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3)
    vm.offset5 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3 + vm.arclength4)
    vm.offset6 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3 + vm.arclength4 + vm.arclength5)
    vm.offset7 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3 + vm.arclength4 + vm.arclength5 + vm.arclength6)

    vm.dasharray1 = Math.round(vm.txn1 / vm.totalTransactions * 565) + ' 565'
    vm.dasharray2 = Math.round(vm.txn2 / vm.totalTransactions * 565) + ' 565'
    vm.dasharray3 = Math.round(vm.txn3 / vm.totalTransactions * 565) + ' 565'
    vm.dasharray4 = Math.round(vm.txn4 / vm.totalTransactions * 565) + ' 565'
    vm.dasharray5 = Math.round(vm.txn5 / vm.totalTransactions * 565) + ' 565'
    vm.dasharray6 = Math.round(vm.txn6 / vm.totalTransactions * 565) + ' 565'
    vm.dasharray7 = Math.round(vm.txn7 / vm.totalTransactions * 565) + ' 565'

    return vm;
  }
})();
