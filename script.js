// Code goes here

var app = angular.module('demo', []).
controller("demoController", function($scope) {
  $scope.title = "The resource could not be found";
  $scope.description = "The page you are looking for might have been removed had its name changed or is temporarily unavailable.";
  $scope.code="404";
  
}).
directive('ngError', function() {
  return {
    'restrict': 'E',
    'replace': true,
    'transclude': false,
    'scope': '@',
    'template': '<article class="error"><header class="error__header">'+
        '<h1 class="error__header__code">{{code}}</h1>'+
        '<p class="error__header__title">{{title}}</p></header>'+
        '<hr class="error__separator"/><section class="error__body">{{description}}</section></article>',
    'link': function($scope, element, attribute) {
       
    }
  };
});
