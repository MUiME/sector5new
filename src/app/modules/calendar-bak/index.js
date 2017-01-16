import {CommunityConfig} from "./community.config";
import {CommunityTopController} from "./community.top.controller";
import {CommunityLeftController} from "./community.left.controller";
import {CommunityCenterController} from "./community.center.controller";
import {CommunityRightController} from "./community.right.controller";

angular.module("Community")
    .config(CommunityConfig)
    .controller("CommunityTopController", CommunityTopController)
    .controller("CommunityLeftController", CommunityLeftController)
    .controller("CommunityCenterController", CommunityCenterController);
//    .controller("CommunityRightController", CommunityRightController);
