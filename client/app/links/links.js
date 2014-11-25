angular.module('shortly.links', [])
.factory('Links', function() {
  return [];
})

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.data.links = Links;
  $scope.getLinks = function() {
    $http.get('/api/links')
      .success(function(data) {
        $scope.data.links = data;
        console.log(data);
      })
    // console.log(Links);
  };
  $scope.displayShortenedLink = function(link) {
    var shortened = link.base_url + "/api/links/" + link.code;
    return shortened;
  }
  $scope.getLinks();
});
