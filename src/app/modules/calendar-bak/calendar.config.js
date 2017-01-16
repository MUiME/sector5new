export function CalendarConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.calendar", {
            url: "/calendar",
            title: "Calendar",
            data: {
                            css: "/css/calendar/calendar.css",
                            authenticate: true,
                            permissions: ["restricted"]
                        },
            views :{
                 "top" :{
                        templateUrl: "modules/calendar/calendar-top.html",
                        controller: "CalendarTopController",
                        controllerAs: "calendar",


                 },
                "left" :{
                        templateUrl: "modules/calendar/calendar-left.html",
                        controller: "CalendarLeftController",
                        controllerAs: "calendar",


                 },
                "center" :{
                        templateUrl: "modules/calendar/calendar-center.html",
                        controller: "CalendarCenterController",
                        controllerAs: "calendar",


                 },
//                "right" :{
//                        templateUrl: "modules/calendar/calendar-right.html",
//                        controller: "CalendarRightController",
//                        controllerAs: "calendar",
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
