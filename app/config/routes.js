'use strict';

(function() {
  angular
    .module('motos-app')
    .config(configure);

  configure.$inject =
    ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
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
            templateUrl: 'template/website/views/comparation.html'}}})
      // .state('admin', {
      //   url: '/admin',
      //   views: {
      //     'view-admin@admin': {
      //       templateUrl: 'template/admin/dashboard/dashboard.html'}}})
      // .state('dashboard', {
      //   parent: 'admin',
      //   views: {
      //     'view-admin@admin': {
      //       templateUrl: 'template/admin/dashboard/dashboard.html'}}})
      // .state('motorcycle', {
      //   parent: 'admin',
      //   views: {
      //     'view-admin@admin': {
      //       templateUrl: 'template/admin/motorcycle/tabs.html'}}})
      .state('auth', {
        url: '/auth',
        templateUrl: 'template/admin/auth/auth.html'});
      $urlRouterProvider.otherwise('/');
  }
})();
