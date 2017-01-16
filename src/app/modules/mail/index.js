import {MailLeftController} from "./mail.left.controller";
import {MailCenterController} from "./mail.center.controller";

angular.module("Mail")
    .controller("MailLeftController", MailLeftController)
    .controller("MailCenterController", MailCenterController);
