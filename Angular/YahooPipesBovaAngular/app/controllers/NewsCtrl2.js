(function () {
    "use strict";
    angular
        .module("news")
        .controller("NewsCtrl2",
            ["Serv", NewsCtrl2]);

    function NewsCtrl2(Serv) {

        var vm = this;
        vm.errors = [];

        Serv
            .getNews()
            .then(
                function(response){
                    //vm.pipe = response.data.value;
                    vm.news = response.data;
                },
                function(){
                    vm.errors.push("Sorry, error retrieving data. Please, try again later.");
                });

/*
        var vm = this;

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


    }
}());