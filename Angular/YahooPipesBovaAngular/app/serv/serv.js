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
}());