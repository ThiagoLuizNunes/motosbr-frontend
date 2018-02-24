'use strict';

(function() {
  angular
    .module('moto-app')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index', {
          url: '/',
          templateUrl: 'index.html'});
        $urlRouterProvider.otherwise('/index');
      }]);
})();
