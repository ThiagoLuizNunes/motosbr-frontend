'use strict';

(function() {
  angular
    .module('motos-app')
    .factory('onInitFactory', [OnInitFactory]);

  function OnInitFactory() {
    function onInit(vm) {
      vm.iconClasses = `glyphicon glyphicon-${vm.icon} form-control-feedback`;
    }
    return onInit;
  }
})();
