app.controller('mainCtrl', ['$scope','mainService', function($scope, mainService){
  $scope.bob = mainService.testData.test;
}]);
