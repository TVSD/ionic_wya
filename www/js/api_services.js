angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function($http) {
        // Might use a resource here that returns a JSON array
        console.log("apiServices loaded");
        var apiServerUrl = "http://whereyouat2.azurewebsites.net/users";//"http://127.0.0.1:3000/";
        var friends;

        // Might use a resource here that returns a JSON array
        $http.get(apiServerUrl).success(function(data) {
            console.log("Got some data");
            friends = data;
        });

        return {
            all: function() {
                return friends;
            },
            get: function(friendId) {
                // Simple index lookup
                return friends[friendId];
            },
            getByMeetupId: function(meetupId) {
                for(i=0; i<friends.length; i++) {
                    if(friends[i].meetupId == meetupId)
                        return friends[i];
                }

                return null;
            }
        }
    });