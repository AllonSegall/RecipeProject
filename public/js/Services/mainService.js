app.factory('mainService', ['$http', function($http){
  var serviceData = {

    testData : {
      test: 'data'
    }

  }
  return serviceData;
}]);
