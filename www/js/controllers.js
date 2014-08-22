angular.module('starter.controllers', ['ngStorage'])

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

.controller('FriendsCtrl', function($rootScope, Friends) {
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

.controller('FriendDetailCtrl', function($scope, $stateParams, $localStorage, Friends) {
    var memberId = $stateParams.friendId;
    $scope.friend = Friends.getByMeetupId(memberId);

    // If a note has been saved for this friend then inject it into scope
    if(typeof $localStorage[memberId] != 'undefined')
        $scope.note = $localStorage[memberId];
})

.controller('MemberDetailCtrl', function($scope, $stateParams, $localStorage, Members) {
    var memberId = $stateParams.memberId;
    $scope.member = Members.getByMeetupId(memberId);

    // If a note has been saved for this member then inject it into scope
    if(typeof $localStorage[memberId] != 'undefined')
        $scope.note = $localStorage[memberId];
})

.controller('NoteCtrl', function($scope, $stateParams, $localStorage, $ionicViewService) {
    var memberId = $stateParams.memberId;
    $scope.memberId = memberId;

    // If a note for this member is already in the local storage
    // then get its text and send it to the note text area
    // Also set the title text accordingly ("New note" or "Edit note"
    if(typeof $localStorage[memberId] != 'undefined') {
        $scope.noteTextArea = $localStorage[memberId];
        $scope.titleText = "Edit note";
    }
    else
        $scope.titleText = "New note";

    // Function to be called from the view upon click on "Save note"
    $scope.saveNote = function(note) {
        $localStorage[memberId] = note;

        // Force the app to go back to the previous page
        var backView = $ionicViewService.getBackView();
        backView.go();
    }

    // Function to be called from the view upon click on "Delete note"
    $scope.deleteNote = function() {
        // Delete the note from the local storage
        delete $localStorage[memberId];

        // Force the app to go back to the previous page
        var backView = $ionicViewService.getBackView();
        backView.go();
    }

})

.controller('AccountCtrl', function($scope) {
});
