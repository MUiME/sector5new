import {HelpConfig} from "./help.config";
import {HelpTopController} from "./help.top.controller";
import {HelpLeftController} from "./help.left.controller";
import {HelpCenterController} from "./help.center.controller";
import {HelpRightController} from "./help.right.controller";

angular.module("Help")
    .config(HelpConfig)
    .controller("HelpTopController", HelpTopController)
    .controller("HelpLeftController", HelpLeftController)
    .controller("HelpCenterController", HelpCenterController);
//    .controller("HelpRightController", HelpRightController);
