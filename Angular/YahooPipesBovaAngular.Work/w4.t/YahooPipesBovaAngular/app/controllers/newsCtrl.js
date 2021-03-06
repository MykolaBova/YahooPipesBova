(function () {
    "use strict";
    angular
        .module("news",["Serv"])
        .controller("NewsCtrl",
                    NewsCtrl);

    function NewsCtrl($scope, $http, MyService ) {
        var vm = this;

        /*
        $http.jsonp("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=JSON_CALLBACK").
        success(function(data) {
            //console.log(data);
            vm.news = data;
            //$scope.data = data;
        }).
        error(function (data) {
            $scope.data = "Request failed";
        });
        */
        vm.news = MyService.sendJson(getData);

        var getData = function(data) {
            console.log("===");
            console.log(data);
            console.log("===");
        }

    }
}());