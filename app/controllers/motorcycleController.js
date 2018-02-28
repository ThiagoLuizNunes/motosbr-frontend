'use strict';

(function() {
  angular
  .module('motos-app')
  .controller('MotorcycleCtrl', MotorcycleController);

  MotorcycleController.$inject =
    ['$http', '$location', 'msgs', 'sort', 'tabs', 'consts'];

  function MotorcycleController($http, $location, msgs, sort, tabs, consts) {
    const vm = this;
    const url = `${consts.apiUrl}/motorcycle`;

    /* Get Method and Refresh*/
    vm.refresh = function() {
      const page = parseInt($location.search().page) || 1;

      $http.get(`${url}`).then((response) => {
        vm.motorcycle = {};
        vm.auxMotorcycles = {};

        vm.auxMotorcycles = sort.sortData(response.data);
        vm.motorcycles = vm.auxMotorcycles
          .slice((page - 1) * 15, (page - 1) * 15 + 15);

        // Paginator
        $http.get(`${url}/count`)
          .then((response) => {
            vm.pages = Math.ceil(response.data.value / 15);
            tabs.show(vm, {tabList: true, tabCreate: true, tabSearch: true});
        });
      });
    };

    /* Post Method*/
    vm.create = function() {
      $http.get(`${consts.oapiUrl}/search-name/${vm.motorcycle.name}`)
      .then((response) => {
          if (response.data.length == 1) {
            msgs.addError('Moto já cadastrada!');
          } else {
            $http.post(url, vm.motorcycle)
              .then((response) => {
                vm.refresh();
                msgs.addSuccess('Operação realizada com sucesso!');
            })
              .catch((response) => {
                msgs.addError(response.data.errors);
              });
          }
        })
      .catch((response) => {
      });
    };

    /* Update Method*/
    vm.update = function() {
      const updateUrl = `${url}/${vm.motorcycle._id}`;
      $http.put(updateUrl, vm.motorcycle)
        .then((response) => {
          vm.refresh();
          msgs.addSuccess('Operação realizada com sucesso!');
        })
        .catch((response) => {
          msgs.addError(response.data.errors);
        });
    };

    /* Delete Method*/
    vm.delete = function() {
      const deleteUrl = `${url}/${vm.motorcycle._id}`;
      $http.delete(deleteUrl, vm.motorcycle)
        .then((response) => {
          vm.refresh();
          msgs.addSuccess('Operação realizada com sucesso!');
        })
        .catch((response) => {
          msgs.addError(response.data.errors);
        });
    };

    vm.showTabUpdate = function(motorcycle) {
      vm.motorcycle = motorcycle;
      tabs.show(vm, {tabUpdate: true});
    };

    vm.showTabDelete = function(motorcycle) {
      vm.motorcycle = motorcycle;
      tabs.show(vm, {tabDelete: true});
    };

    vm.swapChoice = function(name, brand) {
      vm.nameChoice = name;
      vm.brandChoice = brand;
    };

    vm.search = function() {
      vm.pages = 0;

      if (vm.nameChoice) {
        if (vm.choice != undefined) {
          $http.get(`${consts.oapiUrl}/search-name/${vm.choice}`)
            .then((response) => {
              if (!(response.data.length == 0)) {
                vm.motorcycles = {};
                vm.motorcycles = response.data;
              } else {
                vm.refresh();
                msgs.addError('Busca não encontrada');
              }
            })
            .catch((response) => {
              vm.refresh();
              msgs.addError(response.data.errors);
            });
        } else {
          msgs.addWarning('Campo vazio!');
        }
      } else if (vm.brandChoice) {
          if (vm.choice != undefined) {
            $http.get(`${consts.oapiUrl}/search-brand/${vm.choice}`)
              .then((response) => {
                if (!(response.data.length == 0)) {
                  vm.motorcycles = {};
                  vm.motorcycles = sort.sortData(response.data);
                } else {
                  vm.refresh();
                  msgs.addError('Busca não encontrada');
                }
              })
              .catch((response) => {
                vm.refresh();
                msgs.addError('Busca não encontrada');
              });
          } else {
            msgs.addWarning('Campo vazio!');
          }
      } else {
        msgs.addWarning('Selecione uma categoria!');
      }
    };
    vm.refresh();
  }
})();
