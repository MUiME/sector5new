import {ContactsLeftController} from "./contacts.left.controller";
import {ContactsCenterController} from "./contacts.center.controller";

angular.module("Contacts")
    .controller("ContactsLeftController", ContactsLeftController)
    .controller("ContactsCenterController", ContactsCenterController);
