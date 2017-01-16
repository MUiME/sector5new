/**
 * @ngdoc controller
 * @name Signin.controller:SigninController
 * @description Controller for Singin module.
 */

export class SigninController {
    constructor(AuthService) {
        "ngInject";

        this._AuthService = AuthService ;
        this.user = {
            username: 'praewrung',
            password: 'prawrung'
        };
       // alert("a");


        //this.isAuthenticated = false;
        //this.welcome = '';
        //this.message = '';
    }

     submit() {
//        this._AuthService.signin(this.user.username, this.user.password).then(
//            () => {
//                this.isAuthenticated = true;
//
//                let profile = this._AuthService.profile;
//                this.welcome = 'Welcome ' + profile.first_name + ' ' + profile.last_name;
//            },
//            (data) => {
//                // Erase the token if the user fails to log in
//                this.isAuthenticated = false;
//
//                // Handle login errors here
//                this.error = 'Error: '+data;
//                this.welcome = '';
//            }
//        );


        if (this.user.username=="praewrung")
        {
            if (this.user.password=="prawrung")
            {
                window.location.href="/home"
            }
            else
            {
                alert("Invalid Password")
            }
        }
        else
        {  alert("Invalid UserID")
        }

        }


}

//alert("a");
//function passuser() {
//    alert("b");
//    if (this.username.value=="praewrung")
//    {
//        if (form.password.value=="prawrung")
//        {
//            location="main.home"
//        }
//        else
//        {
//            alert("Invalid Password")
//        }
//    }
//    else
//    {  alert("Invalid UserID")
//    }
//}
