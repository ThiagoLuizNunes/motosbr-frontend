'use strict';

(function() {
  angular
    .module('motos-app')
    .controller('DashboardCtrl', DashboardController);

  DashboardController.$inject = ['$http', 'consts'];

  function DashboardController($http, consts) {
    const vm = this;
    const url = `${consts.apiUrl}/motorcycle/count`;
    vm.getTotalMotorcycle = function() {
      $http.get(url)
        .then((response) => {
          vm.count = response.data.value;
        }
      );
      $http.get(`${url}-brands`)
        .then((response) => {
          vm.brands = response.data.value;
        }
      );
    };

    vm.getTotalMotorcycle();
  }
})();
