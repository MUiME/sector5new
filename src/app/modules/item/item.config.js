export function ItemConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.item", {
            url: "/item",
            title: "Item",
            data: {
                        css: "/css/item/item.css",
                        authenticate: true,
                        permissions: ["restricted"]
                    },
            views :{
                "top":{
                    templateUrl: "modules/item/item-top.html",
                    controller: "ItemTopController",
                    controllerAs: "item",


                },
                "left":{
                    templateUrl: "modules/item/item-left.html",
                    controller: "ItemLeftController",
                    controllerAs: "item",

                },
                "center":{
                    templateUrl: "modules/item/item-center.html",
                    controller: "ItemCenterController",
                    controllerAs: "item",

                },
                "right":{
                    templateUrl: "modules/item/item-right.html",
                    controller: "ItemRightController",
                    controllerAs: "item",

                }
            }

        });
};
