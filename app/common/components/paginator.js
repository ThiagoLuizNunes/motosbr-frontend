'use strict';

(function() {
  angular
    .module('motos-app')
    .component('paginator', {
      bindings: {
        url: '@',
        pages: '@'},
      controller: ['$location', PaginatorCtrl],
      template: `
      <ul ng-if="$ctrl.needPagination" class="pagination 
        pagination-sm no-margin pull-right">
        <li ng-if="$ctrl.hasPrev">
          <a href="{{ $ctrl.url }}?page={{ $ctrl.current - 1 }}"> < </a>
        </li>
        <li ng-class="{active: $ctrl.isCurrent(index)}" 
          ng-repeat="index in $ctrl.pagesArray">
          <a href="{{ $ctrl.url }}?page={{ index }}">{{ index }}</a>
        </li>
        <li ng-if="$ctrl.hasNext">
          <a href="{{ $ctrl.url }}?page={{ $ctrl.current + 1 }}"> > </a>
        </li>
      </ul>
      `});

  function PaginatorCtrl(location) {
    let vm = this;
    vm.$onInit = function() {
      const pages = parseInt(vm.pages) || 1;
      vm.pagesArray = Array(pages).fill(0).map((e, i) => i + 1);

      vm.current = parseInt($location.search().page) || 1;
      vm.needPagination = vm.pages > 1;
      vm.hasPrev = vm.current > 1;
      vm.hasNext = vm.current < vm.pages;

      vm.isCurrent = function(i) {
        return vm.current == i;
      };
    };
  }
})();
