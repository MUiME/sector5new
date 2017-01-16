export function HomeConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.home", {
            url: "/home",
            title: "Home",
            data: {
                        css: "/css/home/home.css",
                        authenticate: true,
                        //permissions: ["restricted"]
                    },
            views :{
                "top":{
                    templateUrl: "modules/home/home-top.html",
                    controller: "HomeTopController",
                    controllerAs: "home",


                },
//                "left":{
//                    templateUrl: "modules/home/home-left.html",
//                    controller: "HomeLeftController",
//                    controllerAs: "home",
//
//                },
//                "center":{
//                    templateUrl: "modules/home/home-center.html",
//                    controller: "HomeCenterController",
//                    controllerAs: "home",
//
//                },
//                "right":{
//                    templateUrl: "modules/home/home-right.html",
//                    controller: "HomeRightController",
//                    controllerAs: "home",
//
//                }
                "right":{
                    templateUrl: "modules/chat/chat.html",
                    controller: "ChatController",
                    controllerAs: "chat"
                }
            }
        })
        .state("main.home.timeline", {
            url: "/timeline",
            title: "Timeline",
            views :{
                "left@main":{
                    templateUrl: "modules/timeline/timeline-left.html",
                    controller: "TimelineLeftController",
                    controllerAs: "timeline",
                },
                "center@main":{
                    templateUrl: "modules/timeline/timeline-center.html",
                    controller: "TimelineCenterController",
                    controllerAs: "timeline",
                }
            }
        })
        .state("main.home.mail", {
            url: "/mail",
            title: "Mail",
            views :{
                "left@main":{
                    templateUrl: "modules/mail/mail-left.html",
                    controller: "MailLeftController",
                    controllerAs: "mail",
                },
                "center@main":{
                    templateUrl: "modules/mail/mail-center.html",
                    controller: "MailCenterController",
                    controllerAs: "mail",
                }
            },
            data: {
                css: "/css/mail/mail.css"
            },
        })
        .state("main.home.contacts", {
            url: "/contacts",
            title: "Contacts",
            views :{
                "left@main":{
                    templateUrl: "modules/contacts/contacts-left.html",
                    controller: "ContactsLeftController",
                    controllerAs: "contacts",
                },
                "center@main":{
                    templateUrl: "modules/contacts/contacts-center.html",
                    controller: "ContactsCenterController",
                    controllerAs: "contacts",
                }
            }
        })
        .state("main.home.notes", {
            url: "/notes",
            title: "Notes",
            views :{
                "left@main":{
                    templateUrl: "modules/notes/notes-left.html",
                    controller: "NotesLeftController",
                    controllerAs: "notes",
                },
                "center@main":{
                    templateUrl: "modules/notes/notes-center.html",
                    controller: "NotesCenterController",
                    controllerAs: "notes",
                }
            }
        })
        .state("main.home.calendar", {
            url: "/calendar",
            title: "Calendar",
            views :{
                "left@main":{
                    templateUrl: "modules/calendar/calendar-left.html",
                    controller: "CalendarLeftController",
                    controllerAs: "calendar",
                },
                "center@main":{
                    templateUrl: "modules/calendar/calendar-center.html",
                    controller: "CalendarCenterController",
                    controllerAs: "calendar",
                }
            }
        });
};
