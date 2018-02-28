'use strict';

(function() {
  angular
    .module('motos-app')
    .factory('validateUser', ValidateUserFactory);

  ValidateUserFactory.$inject =
    ['$rootScope', '$http', '$location', '$window', '$state', 'auth'];

  function ValidateUserFactory($rootScope, $http, $window, $state, auth) {
    // validateUser();
    // $rootScope.$on('$locationChangeStart', () => validateUser());

    function validator() {
      const user = auth.getUser();
      const authPage = 'auth';
      const adminPage = 'admin';
      const isAdmin = $window.location.href.includes(adminPage);
      const isAuthPage = $window.location.href.includes(authPage);

      if (!user && isAdmin) {
        console.log('!user e isAdmin, comeback to authPage');
        // $window.location.href = '#!/auth'
        $location.path(authPage);
      }
      if (user && $state.is('auth')) {
        console.log('To em AUTHPAGE');
        // $window.location.href = '#!/admin'
        $location.path(adminPage);
      } else if (user && isAuthPage) {
          console.log('OIIIIIi');
          console.log(user.isValid);
          $location.path(adminPage);
      } else if (user && !user.isValid) {
          auth.validateToken(user.token, (err, valid) => {
            if (!valid) {
              console.log('Error response, comeback to authPage');
              $location.path(adminPage);
            } else {
                user.isValid = true;
                $http.defaults.headers.common.Authorization = user.token;
                if (isAuthPage) {
                  console.log(`${isAuthPage} ${user.token}`);
                  $location.path(adminPage);
                }
            }
          });
      }
    }
    return {validator};
  }
})();
