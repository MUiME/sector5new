export function SearchConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.search", {
            url: "/search",
            title: "Search",
            data: {
                        css: "/css/search/search.css",
                        authenticate: false,
                        permissions: ["restricted"]
                    },
            views :{

                "top" :{
                    templateUrl: "modules/search/search-top.html",
                    controller: "SearchTopController",
                    controllerAs: "search",

                },
                "left" :{
                    templateUrl: "modules/search/search-left.html",
                    controller: "SearchLeftController",
                    controllerAs: "search",


                },
               "center" :{
                    templateUrl: "modules/search/search-center.html",
                    controller: "SearchCenterController",
                    controllerAs: "search",

                },
               "right" :{
                    templateUrl: "modules/search/search-right.html",
                    controller: "SearchRightController",
                    controllerAs: "search",

                }
            }

        });
};
