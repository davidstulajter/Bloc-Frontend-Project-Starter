(function() {
  function config($stateProvider, $locationProvider) {
    /*
    $locationProvider
      .html5Mode({
          enabled: true,
          requiredBase: false
      });
    */

    $stateProvider
      .state('active', {
        controller: 'ActiveCtrl as active',
        url: '/active',
        templateUrl: '/templates/active.html'
      })
      .state('inactive', {
        controller: 'InactiveCtrl as inactive',
        url: '/inactive',
        templateUrl: '/templates/inactive.html'
      })
  }


  angular
      .module('blocitoff', ['ui.router', 'firebase'])
      .config(config);
})();
