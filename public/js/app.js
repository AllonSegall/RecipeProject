var app = angular.module('recipeProject', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('upload', {
    url: '/upload',
    controller: 'uploadCtrl',
    templateUrl: './views/uploadRecipes.html'
    })


}]);
