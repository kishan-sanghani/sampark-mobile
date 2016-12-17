(function () {

	var injectParams = ['$http', '$window', '$localStorage', '$sessionStorage'];

	var authFactory = function ($http, $window, $localStorage, $sessionStorage) {
        
		var userGrp = [];
	  	var factory = {};
	  	var authData = {};
	  	$sessionStorage.isAuthenticated = $sessionStorage.isAuthenticated || false;

	  /*	factory.getUser = function () {
	      return $http.get('scripts/stubs/userGroup.json').then(
	        function (results) {
	          userGrp = results.data.userGroup;
	          return userGrp;
	      }, function (error) {
	          console.log(error);
	      });
	  	};

	    factory.getUserById = function (userId) {
	        var user = {};
	        angular.forEach(userGrp, function(value, key){
	            if(value.id == userId) {
	              user = userGrp[key];
	            }
	        });
	        return user;
	    };*/


	    //console.log($sessionStorage);

		factory.setAuthData = function (data) {
			authData = data;
			$sessionStorage.fname = data.login.fname;
			$sessionStorage.lname = data.login.lname;
			$sessionStorage.email = data.login.email;
			$sessionStorage.token = data.login.token;

		}

		factory.getAuthData = function () {
			return authData;
		}

	    factory.setAuthenticated = function (authValue) {
	      $sessionStorage.isAuthenticated = authValue;
	    };

	    factory.getAutenticated = function () {
	      return $sessionStorage.isAuthenticated;
	    };

	  	return factory;
  	};

	authFactory.$inject = injectParams;

    angular.module('SamparkApp').factory('authService', authFactory);
 
}());