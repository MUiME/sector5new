export function CommunityConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.community", {
            url: "/community",
            title: "Community",
             data: {
                            css: "/css/community/community.css",
                            authenticate: true,
                            permissions: ["restricted"]
                        },
            views :{
                 "top" :{
                        templateUrl: "modules/community/community-top.html",
                        controller: "CommunityTopController",
                        controllerAs: "community",


                 },
                "left" :{
                        templateUrl: "modules/community/community-left.html",
                        controller: "CommunityLeftController",
                        controllerAs: "community",


                 },
                "center" :{
                        templateUrl: "modules/community/community-center.html",
                        controller: "CommunityCenterController",
                        controllerAs: "community",


                 },
//                "right" :{
//                        templateUrl: "modules/community/community-right.html",
//                        controller: "CommunityRightController",
//                        controllerAs: "community",
//
//
//                 }
                "right":{
                    templateUrl: "modules/chat/chat.html",
                    controller: "ChatController",
                    controllerAs: "chat"
                }



            }

        });
};
