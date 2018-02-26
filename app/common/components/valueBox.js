'use strict';

(function() {
  angular
    .module('motos-app')
    .component('valueBox', {
      bindings: {
        grid: '@',
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@'},
      controller: ['gridSystem', ValueBoxCtrl],
      template: `
      <div class="{{ $ctrl.gridClasses }}">
        <div class="small-box {{ $ctrl.colorClass }}">
          <div class="inner">
            <h3>{{ $ctrl.value }}</h3>
            <p>{{ $ctrl.text }}</p>
          </div>
          <div class="icon">
            <i class="{{ $ctrl.iconClass }}"></i>
          </div>
        </div>
      </div>
      `});

  function ValueBoxCtrl(gridSystem) {
    this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);
  }
})();
