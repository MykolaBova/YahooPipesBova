(function () {
    "use strict";
    angular.module("news")
        .factory("Serv", ["$http", jsonpService]);

    function jsonpService($http){

        var sendJson = function(){
            return $http.
                get("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json");
        };

        return {sendJson : sendJson};
    }
}());