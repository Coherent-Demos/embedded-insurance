"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('CatalogLandingController', CatalogLandingController);
  /** @ngInject */

  function CatalogLandingController($http, CatalogService, $stateParams, $location, $state) {
    var vm = this;

    vm.prioritizeList = function(jsonData) {
      // Create an object to track the order of each group ID
      var groupOrder = {};

      jsonData.sort(function(a, b) {
        if (a["Group ID"] === null && b["Group ID"] === null) {
          return 0;
        }
        if (a["Group ID"] === null) {
          return 1;
        }
        if (b["Group ID"] === null) {
          return -1;
        }

        // Update the group order if it doesn't exist
        if (!groupOrder[a["Group ID"]]) {
          groupOrder[a["Group ID"]] = 1;
        }
        if (!groupOrder[b["Group ID"]]) {
          groupOrder[b["Group ID"]] = 1;
        }

        // Compare group IDs
        if (a["Group ID"] !== b["Group ID"]) {
          return a["Group ID"] - b["Group ID"];
        }

        // Update orderInGroup based on group order
        if (groupOrder[a["Group ID"]] === 1) {
          a.orderInGroup = "last";
          b.orderInGroup = "first";
        } else {
          a.orderInGroup = "last";
          b.orderInGroup = "first";
        }
        groupOrder[a["Group ID"]] += 2; // Increment by 2 for "first" and "last"

        return 0;
      });
      return jsonData;
    };

    vm.coreSolutions = CatalogService.coreSolutions
    vm.Features = CatalogService.Features

    vm.quickFilter = function(item) {
      var element = document.getElementById('materials-list');
      vm.searchTerm = item.keywords
      element.scrollIntoView({ behavior: 'smooth' });
      var keywords = item.keywords.replace(/\//g, ' ').replace(/  /g, '');
      if (vm.isCoreSolutions) {
        $state.go('catalog-search', { urlSearchTerm: keywords }, { notify: false });
      } else {
        $state.go('catalog-search-features', { urlSearchTerm: keywords }, { notify: false });
      }
    }

    vm.scrollTo = function(id) {
      var element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }

    vm.searchFilter = function(item) {
      if (!vm.searchTerm) {
        return true; // No search term provided, show all items
      }

      var searchTerm = vm.searchTerm.toLowerCase();
      var searchTerms = [];
      var regex = /[^\s"]+|"([^"]*)"/gi;

      var match;
      while ((match = regex.exec(searchTerm)) !== null) {
        // Add non-empty matches or content inside double quotes to the search terms array
        if (match[1] !== undefined) {
          searchTerms.push(match[1]);
        } else if (match[0].trim() !== "") {
          searchTerms.push(match[0]);
        }
      }

      if (item['Resource Name']) {
        var itemName = item['Resource Name'].toLowerCase();
      } else {
        var itemName = "";
      }

      if (item['Topic Group']) {
        var itemTopic = item['Topic Group'].toLowerCase();
      } else {
        var itemTopic = "";
      }

      if (item['Features']) {
        var itemFeatures = item['Features'].toLowerCase();
      } else {
        var itemFeatures = "";
      }

      // Check if any search term matches any of the fields
      for (var i = 0; i < searchTerms.length; i++) {
        var term = searchTerms[i];
        if (vm.isCoreSolutions&&(itemName.includes(term) || itemTopic.includes(term))) {
          return true; // Show the item if any term matches
        } else if(vm.isFeatures&&itemFeatures.includes(term)) {
          return true; // Show the item if any term matches
        }
      }

      return false; // No matching terms found
    };

    vm.formatFeatures = function(inputString) {
      if (inputString) {
        // Remove square brackets and any trailing comma
        var trimmedString = inputString.replace(/^\[|\]$/g, '').trim();

        // Split the string into an array, remove single quotes, and add spaces after commas
        var arrayItems = trimmedString.split(',').map(function(item) {
          return item.trim().replace(/'/g, '');
        });
        for (var i = arrayItems.length - 1; i >= 0; i--) {
            if (arrayItems[i] === '') {
                arrayItems.splice(i, 1);
            }
        }
        var result = arrayItems.join(', ');
        return result
      } else {
        return ""
      }
    }

    vm.isImportant = function(type) {if (type=='Demo Front-End') {return true} else {return false}}
    vm.isZnglist = function(type) {if (type=='Znglist') {return true} else {return false}}
    vm.isModel = function(type) {if (type=='Demo Model') {return true} else {return false}}
    vm.isPPT = function(type) {if (type=='PPT Deck') {return true} else {return false}}
    vm.isGong = function(type) {if (type=='Gong Call') {return true} else {return false}}

    vm.isCoreSolutions = true;
    vm.isFeatures = false;
    vm.tileList = vm.coreSolutions;

    vm.tileMenu = function(selection) {
      if (selection=='Features') {
        vm.isFeatures = true; vm.isCoreSolutions = false;
        vm.tileList = vm.Features;
      } else {
        vm.isFeatures = false; vm.isCoreSolutions = true;
        vm.tileList = vm.coreSolutions;
      }
    }

    vm.isFirstInBundle = function (item) {
      var i = vm.filteredData.indexOf(item)
      if (item['Group ID']) {
        return true
      } else {
        return false
      }
    }

    vm.clearSearch = function() {
      vm.searchTerm = "";
      vm.filteredData = vm.originalData;
      $state.go('catalog-landing', { urlSearchTerm: '' }, { notify: false });
    }

    vm.catalogAPIInput = JSON.parse(CatalogService.apiConstants.catalog.inputTemplate)

    // CatalogService.getCatalog(vm.catalogAPIInput)
    //   .then(function(outputs) {
    //     vm.catalogData = outputs.catalog
    //   })
    //   .catch(function(error) {
    //     console.error("API call error:", error);
    //   });

    function getCatalog(inputdata) {
      vm.isLoading = true 
      var req = {
        method: 'POST',
        url: 'https://excel.uat.us.coherent.global/coherent/api/v3/folders/Spark FE Demos/services/demo-catalog/Execute',
        headers: {
          'SecretKey': '2277565c-9fad-4bf4-ad2b-1efe5748dd11',
          'x-tenant-name': 'coherent'
        },
        data: inputdata
      };
      $http(req).then(function (response) {
        vm.isLoading = false
        vm.originalData = vm.prioritizeList(response.data.response_data.outputs.catalog);
        vm.filteredData = vm.originalData;
        if($stateParams.urlSearchTerm) {
          vm.searchTerm = $stateParams.urlSearchTerm;
          if($state.current.name=='catalog-search-features') {
            vm.tileMenu('Features')  
          }
          setTimeout(function() {
            vm.scrollTo('materials-list');
          }, 1);
        }
      }, function () {});
    }

    getCatalog(vm.catalogAPIInput)

    // //search function
    // vm.filterData = function(item) {
    //   vm.originalData = originalData
    //   for(var i=0;i<originalData.length;i++) {
    //     if(originalData[i]["Resource Name"].includes || )
    //   }
    // };
  }
})();