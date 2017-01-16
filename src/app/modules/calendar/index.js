import {CalendarLeftController} from "./calendar.left.controller";
import {CalendarCenterController} from "./calendar.center.controller";

angular.module("Calendar")
    .controller("CalendarLeftController", CalendarLeftController)
    .controller("CalendarCenterController", CalendarCenterController);
