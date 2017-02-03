var app = angular.module('recipeProject', ['ui.router', 'ngTagsInput']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '../views/home.html'
  })
  .state('upload', {
    url: '/upload',
    controller: 'uploadCtrl',
    templateUrl: '../views/uploadRecipes.html'
  })
  .state('dashboard', {
    url: '/dashboard',
    controller: 'dashCtrl',
    templateUrl: '../views/dashboard.html'
  })

  $urlRouterProvider.otherwise('/home');

}]);
