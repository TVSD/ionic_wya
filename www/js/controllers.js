angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location) {
    $scope.go = function ( path ) {
        $location.path( path );
    };
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
    var promise = Friends.all();
    promise.then(function(data) {
        $scope.friends = data;
    });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.getByMeetupId($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
