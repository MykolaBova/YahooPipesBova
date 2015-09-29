(function () {
    "use strict";

    angular
        .module("news")
        .controller("NewsCtrl", NewsCtrl);

    NewsCtrl.$inject = ["newsService"];

    function NewsCtrl(newsService) {
        var vm = this;
        vm.errors = [];

        newsService.then(
            function (response) {
                vm.news = response.data.value.items;
            },
            function () {
                vm.errors.push("Sorry, error retrieving data. Please, try again later.");
            });
    }
}());
