import {ShopConfig} from "./shop.config";
import {ShopTopController} from "./shop.top.controller";
import {ShopLeftController} from "./shop.left.controller";
import {ShopCenterController} from "./shop.center.controller";
import {ShopRightController} from "./shop.right.controller";


angular.module("Shop")
    .config(ShopConfig)
    .controller("ShopTopController", ShopTopController)
    .controller("ShopLeftController", ShopLeftController)
    .controller("ShopCenterController", ShopCenterController);
//    .controller("ShopRightController", ShopRightController);
