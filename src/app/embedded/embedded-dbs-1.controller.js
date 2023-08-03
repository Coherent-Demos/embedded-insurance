(function() {
  'use strict';

  angular
    .module('coherentPaDemo')
    .controller('EmbeddedDBS1Controller', EmbeddedDBS1Controller);

  /** @ngInject */
  function EmbeddedDBS1Controller($state, $http, EmbeddedService) {
    var vm = this;

    vm.PFInput = {
      "Inputs": {},
      "TransactionDate": "2021-09-13T23:39:21.036Z",
      "EngineType": "Type3",
      "Images": [],
      "Reports": [],
      "Solves": []
    }

    vm.productTiles = [
      {
        title: 'Loading...',
        desc: 'Loading...'
      }
    ];

    vm.text1 = 'asdf'


    function init() {
      var req = {
        method: 'POST',
        url: 'https://excel.staging.coherent.global/api/v1/product/DBS/engines/Execute/dbs-product-admin',
        headers: {
          'SecretKey': '97b489ef-39e1-4c65-9149-d8d6655a2ac1',
          'x-tenant-name': 'coherent'
        },
        data: angular.toJson(vm.PFInput)
      }
      $http(req)
        .then(function (response) {
          var data = response.data.data.Outputs
          console.log(data)
          getProducts(data)
          EmbeddedService.setProductData(data)
        }, function () {
      });
    }

    function getProducts(data) {
      vm.productTiles = []
      console.log(data.ProductList)
      var list = data.ProductList
      for(var i=0;i<list.length;i++) {
        var aa = {}
        aa.title = data[list[i].Name + '_Title']
        aa.desc = data[list[i].Name + '_Desc']
        aa.name = list[i].Name
        vm.productTiles.push(aa)
      }
      console.log(vm.productTiles)
    }

    vm.learnMore = function (name) {
      EmbeddedService.setActiveProduct(name)
      $state.go('embedded-dbs-2');
    }

    init();

  }
})();
