SamparkReportsApp.controller('Report', ["$scope", "$http", "$timeout", "$mdSidenav",'$sessionStorage' ,function($scope, $http, $timeout, $mdSidenav, $sessionStorage) {          



  $http({
    method  : 'POST',
    url     : 'http://samparkyds.org/api/index.php/Apitestmy/monthlyReport',
    data    : { "token":$sessionStorage.token,
                "type":"mandal",
                "sabhatype":"YUVAK",
                "startdate":"2016-07-01",
                "enddate":"2016-12-01",
                "reportview":"H" 
                }
    }) 
    .success(function(data) {       
       console.log(data);
       $scope.items = data.data;
    }); 
  

  $scope.sortColumn = {"label" : "fname", "sort": false };

 
   $scope.checkedItems = {'fname': true, 'lname': true, 'mandal': true, 'sabha': true};
   $scope.checkedItemsArray = [];

    $scope.toggle = function () {
      if ($scope.toggle[0] == true) {
          $scope.toggle[0] = false;
      } else {
          $scope.toggle[0] = true;
      }
    };

   
  $scope.$watchCollection('checkedItems', function(newNames, oldNames) {
    $scope.checkedItemsArray = [];
    for (item in $scope.checkedItems) {
                
      if($scope.checkedItems[item]) { 
        $scope.checkedItemsArray.push(item);   
      }
      
    }
  });

  $scope.toggleLeft = buildToggler('left');
  $scope.toggleLeft2 = buildToggler('left2');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    }
  }
    

}])