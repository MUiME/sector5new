import {ItemConfig} from "./item.config";
import {ItemTopController} from "./item.top.controller";
import {ItemLeftController} from "./item.left.controller";
import {ItemCenterController} from "./item.center.controller";
import {ItemRightController} from "./item.right.controller";

angular.module("Item")
    .config(ItemConfig)
    .controller("HelTopController", ItemTopController)
    .controller("ItemLeftController", ItemLeftController)
    .controller("ItemCenterController", ItemCenterController)
    .controller("ItemRightController", ItemRightController);
