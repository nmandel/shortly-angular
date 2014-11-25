// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    if (!$scope.user.username || !$scope.user.password) {
      return;
    }
    if ($scope.user.username.indexOf(' ') > -1) {
      console.log("Your username or password is bad! You should think about what you've done.");
      return;
    }

    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    if (!$scope.user.username || !$scope.user.password) {
      return;
    }
    if ($scope.user.username.indexOf(' ') > -1) {
      console.log("Your username or password is bad! You should think about what you've done.");
      return;
    }

    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
