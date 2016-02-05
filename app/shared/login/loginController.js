imsControllers.controller('loginController', ['$scope','$location','$cookies','$window',
  function($scope,$location,$cookies,$window) {
    $scope.phones = [];
    $scope.orderProp = 'age';
    $scope.login = function(userLogin){
    	console.log("login request has been recieved");
    	if($scope.userLogin.email=="rak.dev007@gmail.com" && $scope.userLogin.password=="1234@" ){
    		console.log("auth successful");
    		$cookies.put('isLoggedIn',1);
    		$location.path( "/index" );
    	}
    	else{
    		console.log("auth has been failed");
    	}
    };
  }]);	