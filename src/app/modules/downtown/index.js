import {DowntownConfig} from "./downtown.config";
import {DowntownTopController} from "./downtown.top.controller";
import {DowntownLeftController} from "./downtown.left.controller";
import {DowntownCenterController} from "./downtown.center.controller";
import {DowntownRightController} from "./downtown.right.controller";
import {DowntownCenterBankController} from "./downtown.center.bank.controller";
import {DowntownCenterItemController} from "./downtown.center.item.controller";
import {DowntownCenterShopController} from "./downtown.center.shop.controller";
import {DowntownCenterCatalogController} from "./downtown.center.catalog.controller";
angular.module("Downtown")
    .config(DowntownConfig)
    .controller("DowntownTopController", DowntownTopController)
    .controller("DowntownLeftController", DowntownLeftController)
    .controller("DowntownCenterController", DowntownCenterController)
    .controller("DowntownRightController", DowntownRightController)
    .controller("DowntownCenterBankController", DowntownCenterBankController)
    .controller("DowntownCenterItemController", DowntownCenterItemController)
    .controller("DowntownCenterShopController", DowntownCenterShopController)
    .controller("DowntownCenterCatalogController", DowntownCenterCatalogController);


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
