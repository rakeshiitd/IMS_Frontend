imsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'app/shared/login/2.html',
        controller: 'mainIndexController'
      }).
      when('/index.html', {
        templateUrl: 'app/shared/login/2.html',
        controller: 'mainIndexController'
      }).
      when('/login',{
        templateUrl: 'app/shared/login/loginView.html',
        controller: 'loginController'
      }).
      when('/notfound',{
        templateUrl: 'app/shared/login/notfound.html',
        controller: 'loginController'
      }).
      otherwise({
        redirectTo: '/notfound'
      });
      ;
  }]).run( function($rootScope, $location,$cookies,$window) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $cookies.get('isLoggedIn')!=1 ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "app/shared/login/loginView.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/login" );
        }
      }        
    });
 })
