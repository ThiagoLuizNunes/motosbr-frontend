'use strict';

(function() {
  angular
    .module('motos-app')
    .component('field', {
      bindings: {
        id: '@',
        label: '@',
        grid: '@',
        placeholder: '@',
        type: '@',
        model: '=',
        readonly: '<'},
      controller: ['gridSystem', FieldCtrl],
      template: `
        <div class="{{ $ctrl.gridClasses }}">
        <div class="form-group">
        <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
        <input id="{{ $ctrl.id }}" class="form-control" 
          placeholder="{{ $ctrl.placeholder }}"
          type="{{ $ctrl.type }}" ng-model="$ctrl.model" 
          ng-readonly="$ctrl.readonly"/>
        </div>
        </div>
      `});

    function FieldCtrl(gridSystem) {
      let vm = this;
      vm.$onInit = () => vm.gridClasses = gridSystem.toCssClasses(vm.grid);
    }
})();
