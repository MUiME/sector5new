/**
 * @ngdoc service
 * @name Auth.service:AuthService
 * @description Service for Auth module.
 */
export class AuthService {
    constructor($http, $window, $q, $uibModal, $timeout, jwtHelper, MainAppConstant) {
        "ngInject";

        this._$http = $http;
        this._$window = $window;
        this._$q = $q;
        this._$uibModal = $uibModal;
        this._$timeout = $timeout;
        this._jwtHelper = jwtHelper;
        this._MainAppConstant = MainAppConstant;

        this.localStorage = $window.localStorage;
        //this.loadedView = false;
    }

    signin(shortcutUsername, password) {
        let username = this.getUsernameFromShortcut(shortcutUsername).toLowerCase();
        let deferred = this._$q.defer();
        this._$http.post(this._MainAppConstant.apiPath+'/authenticate', { username, password }).then(
            (respond) => {
                this.localStorage.token = respond.data.token;
                this.localStorage.isLoggedOut = "0";

                deferred.resolve();
            },
            (reason) => {
                delete this.localStorage.token;
                delete this.localStorage.isLoggedOut;

                deferred.reject(reason.data);
            }
        );
        return deferred.promise;
    }

    getUsernameFromShortcut(shortcutName) {
        let user, domain;

        let indSymbol = -1;
        let posSymbol = -1;

        const listSymbol = ["@", "#", "$"];

        listSymbol.forEach((symbol, i) => {
            if(shortcutName.includes(symbol)){
                if (indSymbol == -1 || shortcutName.indexOf(symbol) < posSymbol) {
                    indSymbol = i;
                    posSymbol = shortcutName.indexOf(symbol);
                }
            }
        });


        if (indSymbol == -1) {
            user = shortcutName;
            domain = "muime.com";
        }
        else {
            user = shortcutName.substring(0, shortcutName.indexOf(listSymbol[indSymbol]));
            domain = (function getDomainFromPart(partName) {
                if (partName == '') {
                    return "muime.com";
                }
                else if (partName.indexOf(".") < 0) {
                    return partName.toLowerCase() + ".com";
                }
                else if (partName.substring(partName.indexOf(".") + 1) == "") {
                    return partName.toLowerCase() + "com";
                }
                else {
                    return partName.toLowerCase();
                }
            })(shortcutName.substring(shortcutName.indexOf(listSymbol[indSymbol]) + 1));
        }

        return `${user}@${domain}`;
    }

    signout() {
        delete this.localStorage.token;
        delete this.localStorage.isLoggedOut;

        this._$window.location.reload();
    }

    isSignedIn() {
        return this.localStorage.token != null;
    }

    isLoggedOut() {
        let remainSessTime = this._jwtHelper.getTokenExpirationDate(this.localStorage.token).getTime() - new Date().getTime();
//        if(remainSessTime < 16*60*1000){
//            this.localStorage.isLoggedOut = "1";
//        }
        console.log(remainSessTime/60000);
//        if(remainSessTime < 23*60*1000){
//            this.localStorage.isLoggedOut = "1";
//        }

        return this.localStorage.isLoggedOut == "1";
    }

    popupLogout() {
        this.localStorage.isLoggedOut = "1";

        if(!this.modalLogout){
            this.modalLogout = this._$uibModal.open({
                templateUrl: "modules/auth/logout.html",
                controller: "AuthController",
                controllerAs: "auth",
                backdrop: false,
                windowTemplateUrl: "modules/auth/window-logout.html"
            });

            let remainSessTime = this._jwtHelper.getTokenExpirationDate(this.localStorage.token).getTime() - new Date().getTime();
            this.timeoutSignout = this._$timeout(() => { this.signout(); }, remainSessTime);
        }
    }

    logout(password) {
        let deferred = this._$q.defer();

        if(this.profile.password == password){
            this._$timeout.cancel(this.timeoutSignout);

            this.modalLogout.close();
            this.modalLogout = null;

            this.localStorage.isLoggedOut = "0";

            deferred.resolve();
        }
        else{
            deferred.reject();
        }
        return deferred.promise;
    }

    isRequireAuthenForView(view){//alert(Object.keys(view));
        if(view.data.authenticate == undefined){
            return false;
        }
        return view.data.authenticate;
    }

    hasPermissionForView(view) {
        if (!view.data.permissions || !view.data.permissions.length) {
            return true;
        }

        var found = false;
        angular.forEach(view.data.permissions, (permission) => {
            if (this.profile.permissions.indexOf(permission) >= 0){
                found = true;
                return;
            }
        });
        return found;
    }

    userHasPermission(permissions) {
        var found = false;
        angular.forEach(permissions, (permission) => {
            if (this.profile.permissions.indexOf(permission) >= 0){
                found = true;
                return;
            }
        });
        return found;
    }

    get profile() {
        //this is used to parse the profile
        function url_base64_decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
            }
            return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
        }

        let encodedProfile = this.localStorage.token.split('.')[1];
        let profile = JSON.parse(url_base64_decode(encodedProfile));

        return profile;
    }
}
