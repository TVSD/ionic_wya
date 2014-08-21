angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $location) {
    $scope.go = function ( path ) {
        $location.path( path );
    };
})

.controller('MembersCtrl', function($rootScope, Members) {
    // Check whether friends have already been loaded.
    // If so, do not reload.
    if (typeof $rootScope.members != 'undefined')
        return;

    console.log("Loading members");
    var promise = Members.all();
    promise.then(function(data) {
        $rootScope.members = data;
    });
})

.controller('FriendsCtrl', function($rootScope,  Friends) {
    // Check whether friends have already been loaded.
    // If so, do not reload.
    if (typeof $rootScope.friends != 'undefined')
        return;

    console.log("Loading friends");
    var promise = Friends.all();
    promise.then(function(data) {
        $rootScope.friends = data;
    });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.getByMeetupId($stateParams.friendId);
})

.controller('MemberDetailCtrl', function($scope, $stateParams, Members) {
    $scope.member = Members.getByMeetupId($stateParams.memberId);
})

.controller('AccountCtrl', function($scope) {
});
