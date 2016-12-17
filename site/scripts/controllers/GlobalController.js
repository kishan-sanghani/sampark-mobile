SamparkReportsApp.controller('GlobalController',["$scope", "$http", "$state", "$stateParams", "authService" , "$location",  function($scope, $http, $state, $stateParams, authService, $location){
		
		  console.log($state.go('login'));
		  $scope.authService = authService;

		  $scope.$on( '$stateChangeStart' , function(e, current, prev) {
	    	  
		      var isUserAuth = authService.getAutenticated();
			  //console.log(isUserAuth);
			  //console.log($state)

		      if(isUserAuth) {
		          if (!$state.is('login')) $location.path('/Dashboard/Reports')
		      }
		      else {		      		
		      		if (!$state.is('login')) $location.path('/login')
		      }		      
		    });

	}])
