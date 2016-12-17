
	var SamparkReportsApp = angular.module('SamparkApp', ['ui.router', 'ngMaterial', 'ngMessages','ngStorage']);

	SamparkReportsApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) { 

		/*$locationProvider.html5Mode({
		  enabled: true		  
		});*/

		$urlRouterProvider.otherwise('/login');
    
	    $stateProvider
	    	
	        .state('login', {	        	
	            url: '/login',	            
	            templateUrl: '/scripts/views/Login/LoginForm.html',
	            controller: 'LoginForm'
        	})

	       	.state('dashboard', {
	        	//abstract: true,
	            url: '/Dashboard',
	            views: {
	                '@': {
	            		templateUrl: '/scripts/views/Attendance/AttendanceReport.html'
	            	}
	            },
	            controller: 'Report'
        	})

	       	.state('dashboard.reports', {        	
	            url: '/Reports',
	            views: {
	                '@': {
	            		templateUrl: '/scripts/views/Attendance/AttendanceReport.html'
	            	}
	        	},
	        	controller: 'Report'
	        })

	})

	
