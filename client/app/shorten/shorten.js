angular.module('shortly.shorten', [])


.controller('ShortenController', function ($scope, $http, $location) {
  $scope.link = {};
  $scope.addLink = function(str) {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (str.match(rValidUrl)) {
      $http.post('/api/links', {url: str})
        .success(function(data) {
          $scope.link.url = data.base_url + "/api/links/" + data.code;
          console.log(data);
        })
    } else {
      console.log("Bad input. You suck.")
    }
  };

});
