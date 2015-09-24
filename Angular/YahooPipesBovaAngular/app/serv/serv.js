(function () {
    "use strict";
    angular.module("news")
        .factory("Serv", ["$http", nasaNewsSource]);

    function nasaNewsSource($http){
        var PIPE_TMPLT_URL = "http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json";

        var getNews = function(){
            return $http.get(PIPE_TMPLT_URL);
        };

        return {getNews : getNews};
    }


/*        .service('MyService', function ($http) {
            //this.square = function (a) { return a*a};

            var ser = this;

            ser.sendJson = function(callback) {
                ser.callback = callback;
                $http.jsonp("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=JSON_CALLBACK").
                success(function (data) {
                    console.log("----");
                    console.log(data);
                    console.log("----");
                    console.log("----");
                    console.log(callback);
                    console.log("----");



                    //ser.news = data;

                    //ser.callback(data);
                }).
                error(function (data) {
                    console.log("Request failed");
                });
            };

            return {
                sendJson: ser.sendJson
            }

        });*/


}());