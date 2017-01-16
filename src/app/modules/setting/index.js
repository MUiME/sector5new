import {SettingConfig} from "./setting.config";
import {SettingTopController} from "./setting.top.controller";
import {SettingLeftController} from "./setting.left.controller";
import {SettingCenterController} from "./setting.center.controller";
import {SettingRightController} from "./setting.right.controller";

angular.module("Setting")
    .config(SettingConfig)
    .controller("SettingTopController", SettingTopController)
    .controller("SettingLeftController", SettingLeftController)
    .controller("SettingCenterController", SettingCenterController);
//    .controller("SettingRightController", SettingRightController);
