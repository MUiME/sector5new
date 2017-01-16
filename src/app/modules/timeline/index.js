import {TimelineLeftController} from "./timeline.left.controller";
import {TimelineCenterController} from "./timeline.center.controller";

angular.module("Timeline")
    .controller("TimelineLeftController", TimelineLeftController)
    .controller("TimelineCenterController", TimelineCenterController);
