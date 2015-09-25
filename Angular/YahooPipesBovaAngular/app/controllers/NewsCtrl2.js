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
            .sendJson()
            .then(
                function(response){
                    vm.news = response.data;
                },
                function(){
                    vm.errors.push("Sorry, error retrieving data. Please, try again later.");
                });

        vm.toggleDescription = function(post){
            post.show = !post.show;
        };
    }
}());