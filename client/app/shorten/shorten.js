angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location) {
  $scope.link = {};
  $scope.addLink = function(str) {
    $http.post('/api/links', {url: str})
      .success(function(data) {
        $scope.link.url = data.base_url + "/api/links/" + data.code;
        console.log(data);
      })
  };

});
