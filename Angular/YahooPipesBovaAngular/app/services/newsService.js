(function () {
    "use strict";

    angular.module("news")
        .factory("newsService", newsService);

    newsService.$inject = ["$http"];

    function newsService($http){
        return $http
            .get("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json");
    }
}());
