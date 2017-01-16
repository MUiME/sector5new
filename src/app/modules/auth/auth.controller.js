/**
 * @ngdoc controller
 * @name Auth.controller:AuthController
 * @description Controller for Auth module.
 */
export class AuthController {
    constructor($http, $window, $location, $filter, $state, $timeout, AuthService, UserService, Idle) {
        "ngInject";

        this._$http = $http;
        this._$window = $window;
        this._$location = $location;
        this._$filter = $filter;
        this._$state = $state;
        this._$timeout = $timeout;
        this._AuthService = AuthService;
        this._UserService = UserService;
        this._Idle = Idle;

        this.arrBdays = [];
        for(let day=1; day<=31; day++){
            this.arrBdays.push({
                value: (day>=10)? day: "0"+day,
                text: day
            });
        }

        this.arrBmonths = [];
        let arrMonthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for(let month=1; month<=12; month++){
            this.arrBmonths.push({
                value: (month>=10)? month: "0"+month,
                text: arrMonthNames[month]
            });
        }

        this.arrByears = [];
        let yearStart = $filter('date')(new Date(), 'yyyy')-3;
        let yearFinish = yearStart-80;
        for(let year=yearStart; year>=yearFinish; year--){
            this.arrByears.push(year);
        }

        this.error = {
            signin: false,
            logout: false,
            duplicateUsername: false,
            notEmail: false,
            lessLengthPassword1: false,
            lessLengthPassword2: false,
            passwordsNotMatch: false,
            invalidBirthday: false
        };

        this.firstInputError = null;

        this.logoutFailed = {
            current: 0,
            FORGOTPW: 3,
            SIGNOUT: 4
        };
    }

    signin() {
        this._AuthService.signin(this.user.username, this.user.password)
            .then(
            () => {
                if(this._$state.current.name == "signin"){
                    this._$window.location.href = "/community";
                }
                else{
                    this._$window.location.reload();
                }
            },
            (data) => {
                 this.error.signin = true;
            }
        );
    }

    signup() {
        let user = {
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            email: this.user.email,
            password: this.user.password1,
            gender: this.user.gender
        };

        this._UserService.Create(user)
            .then(
                () => { //success
                    if(this._$state.current.name == "signin"){
                        this._$window.location.href = "/community";
                    }
                    else{
                        this._$window.location.reload();
                    }
                },
                () => { //error
                    //
                }
            );
    }

    logout() {
        if(this.passwordLogout != "" && this.passwordLogout != undefined){
            this._AuthService.logout(this.passwordLogout).then(
                () => {
                    this._Idle.watch();
                },
                () => {
                    this.logoutFailed.current++;
                    this.error.logout = true;
                    this.passwordLogout = "";

                    if(this.logoutFailed.current == this.logoutFailed.SIGNOUT){
                        this._$timeout(() => {
                            this.signout()
                        }, 1000);
                    }
                }
            );
        }
    }

    signout() {
        this._AuthService.signout();
    }

    isDuplicateUsername() {console.log("isDuplicateUsername");
        let is = this._UserService.isDuplicateUsername(this.user.email);
        this.error.duplicateUsername = is;
        this.error.notEmail = false;

        return is;
    }

    isNotEmail() {
        let is = !(this.user.email.toLowerCase().match(/^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/));
        this.error.notEmail = is;
        this.error.duplicateUsername = false;

        return is;
    }

    isLessLengthPassword1() {console.log("isLessLengthPassword1");
        let is = !(this.user.password1.length >= 6);
        this.error.lessLengthPassword1 = is;

        return is;
    }

    isLessLengthPassword2() {
        let is = !(this.user.password2.length >= 6);
        this.error.lessLengthPassword2 = is;
        this.error.passwordsNotMatch = false;

        return is;
    }

    isPasswordsNotMatch() {
        let is = !(this.user.password1 == this.user.password2);
        this.error.passwordsNotMatch = is;
        this.error.lessLengthPassword2 = false;

        return is;
    }

    isInvalidBirthday(){
        let is;
        if(this.user.byear && this.user.bmonth && this.user.bday){
            let birthday = `${this.user.byear}-${this.user.bmonth}-${this.user.bday}`;
            is = !(this._$filter('date')(new Date(birthday), 'yyyy-MM-dd') == birthday);
        }
        else{
            is = false;
        }
        this.error.invalidBirthday = is;

        return is;
    }

    isFirstInputError(inputName){
        let is = (this.firstInputError == inputName);

        return is
    }

    hasFirstInputError(){
        return (this.firstInputError != null);
    }

    callRestricted() {
        this._$http({
            url: 'http://localhost:8000/protected/restricted',
            method: 'GET'
        })
        .success((data, status, headers, config) => {
            this.message = this.message + ' ' + data.name; // Should log 'foo'
        })
        .error((data, status, headers, config) => {
            alert(status+": "+data);
        });
    }
}
