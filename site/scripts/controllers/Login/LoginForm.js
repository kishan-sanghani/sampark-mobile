
SamparkReportsApp.controller('LoginForm', ["$scope", "$http", "$state", function($scope, $http, $state) {
	$scope.user = {
	  email: '',
	  password: ''
	};

	//$scope.baseURL = 'http://samparkyds.org/web/app_intf.php?';
	$scope.baseURL = 'http://samparkyds.org/api/index.php/Apitestmy/loginAuthUsers';
	
	$scope.processForm = function () {
	    $http({
	        method  : 'POST',
	        url     : $scope.baseURL,
	        //data: { 'userid' : 3288 },        
	        data: { 'loginid' : $scope.user.email , 'password' : $scope.user.password }	        ,
	        headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
	      })
	    .success(function(data) {	      

	      if (!data.login) {    
	        //$scope.errorName = data.errors.name;
	        //$scope.errorSuperhero = data.errors.superheroAlias;
	        $scope.authenticated = true;
	        $scope.authService.setAuthenticated(false)
	      } else {           

	      	$scope.authService.setAuthData(data);
	        $scope.message = data.message;	        
	        $scope.authenticated = false;
	        $scope.authService.setAuthenticated(true)
	        $state.go('dashboard.reports');
	      }
	    });
	  };   

}]);