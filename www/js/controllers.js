angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location) {
    $scope.go = function ( path ) {
        $location.path( path );
    };
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope,  Friends) {
    //$http.get('http://whereyouat2.azurewebsites.net/users')
    //    .then(function (response)
    //    {
    //        $scope.friends = response.data;
    //        console.log(response.data);
    //    })
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
