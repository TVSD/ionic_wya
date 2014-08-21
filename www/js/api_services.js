angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function($http) {
        // Might use a resource here that returns a JSON array
        console.log("apiServices loaded");
        var apiServerUrl = "http://whereyouat2.azurewebsites.net/meetupusers";//"http://127.0.0.1:3000/";
        var friends = [];

        var Friends = function(data) {
            angular.extend(this, data);
        }

        Friends.all = function() {
            return $http.get(apiServerUrl).then(function(response) {
                console.log("Got some data");
                friends = response.data.results;
                return new Friends(response.data.results);
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
    });
