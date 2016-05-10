'use strict';

angular.module('coalaHtmlApp')
  .controller('LogsCtrl', function ($scope, $http) {
    var parseCoalaProject = function(projectDir, coalaJSON) {
      coalaJSON = coalaJSON || projectDir + '/coala.json';
      $scope.data = [];
      $http.get(coalaJSON).success(function(response){
        $scope.data = response.logs;
      });
    };
    parseCoalaProject("tests/test_projects/simple");
  });
