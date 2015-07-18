angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function($http) {
        // Might use a resource here that returns a JSON array
        console.log("apiServices loaded");
        var apiServerUrl = "http://whereyouat2.azurewebsites.net/users";//"http://127.0.0.1:3000/";
        var friends = [];

        var Friends = function(data) {
            angular.extend(this, data);
        }

        Friends.all = function() {
            return $http.get(apiServerUrl)
                .success(function(data) {
                    console.log("Success: Got some data");
                    friends = data;
                    return new Friends(data);
                })
                .error(function(data) {
                    console.log("Error: " + data);
                    throw new Error("Server returned an error");
                });
        }

        Friends.getByMeetupId = function(meetupId) {
            for(i=0; i<friends.length; i++) {
                if(friends[i].id == meetupId)
                    return friends[i];
            }

            return null;
        }

        return Friends;
    })


.factory('Members', function($http) {
    // Might use a resource here that returns a JSON array
    console.log("apiServices loaded");
    var apiServerUrl = "http://whereyouat2.azurewebsites.net/meetupusers";//"http://127.0.0.1:3000/";
    var members = [];

    var Members = function(data) {
        angular.extend(this, data);
    }

    Members.all = function() {
        return $http.get(apiServerUrl).then(function(response) {
            console.log("Got some data");
            members = response.data.results;
            return new Members(response.data.results);
        });
    }

    Members.getByMeetupId = function(meetupId) {
        for(i=0; i<members.length; i++) {
            if(members[i].id == meetupId)
                return members[i];
        }

        return null;
    }

    return Members;
});
