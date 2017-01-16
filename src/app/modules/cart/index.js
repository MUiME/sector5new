import {CartConfig} from "./cart.config";
import {CartTopController} from "./cart.top.controller";
import {CartLeftController} from "./cart.left.controller";
import {CartCenterController} from "./cart.center.controller";
import {CartRightController} from "./cart.right.controller";

angular.module("Cart")
    .config(CartConfig)
    .controller("CartTopController", CartTopController)
    .controller("CartLeftController", CartLeftController)
    .controller("CartCenterController", CartCenterController)
    .controller("CartRightController", CartRightController);

