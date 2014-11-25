angular.module('shortly.links', [])
.factory('Links', function() {
  return {};
})

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = Links;
  $scope.getLinks = function() {
    $http.get('/api/links')
      .success(function(data) {
        $scope.data.links = data;
        console.log(data);
      })
    // console.log(Links);
  };
  $scope.getLinks();
});
