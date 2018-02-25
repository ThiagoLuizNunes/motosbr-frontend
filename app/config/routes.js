'use strict';

(function() {
  angular
    .module('motos-app')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('motos', {
            url: '/',
            views: {
              '': {
                templateUrl: 'template/website/motosbr.html'},
              'view-motos@motos': {
                templateUrl: 'template/website/views/main.html'}}})
          .state('brand', {
            url: 'marcas',
            parent: 'motos',
            views: {
              'view-motos@motos': {
                templateUrl: 'template/website/views/brand.html'}}})
          .state('cylinder', {
            url: 'cilindrada',
            parent: 'motos',
            views: {
              'view-motos@motos': {
                templateUrl: 'template/website/views/cylinder.html'}}})
          .state('style', {
            url: 'estilo',
            parent: 'motos',
            views: {
              'view-motos@motos': {
                templateUrl: 'template/website/views/style.html'}}})
          .state('comparation', {
            url: 'comparativo',
            parent: 'motos',
            views: {
              'view-motos@motos': {
                templateUrl: 'template/website/views/comparation.html'}}});
          $urlRouterProvider.otherwise('/');
    }]);
})();
