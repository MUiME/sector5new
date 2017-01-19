export function authRightsideSignup() {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl) {
            setRatioSignup();

            $(window).bind('resize', function(){
                setRatioSignup();
            });

            function setRatioSignup(){
                var ratio = 1.04;
                var elemAuth = $('#authRightside');
                var elemSignupVCB = $('#authRightside .signup .vcenter-block');
                var authWidth = elemAuth[0].offsetWidth;
                var signupWBase = elemSignupVCB[0].offsetWidth;
                var signupHBase = elemSignupVCB[0].offsetHeight;
                var signupWidth = authWidth/ratio;
                var signupHeight = signupHBase*signupWidth/signupWBase;
                var signupScale = signupWidth/signupWBase;
                var transformValue = "scale("+signupScale+", "+signupScale+")";
                var transformOriginValue = "center center";

                elemSignupVCB.css({
                    'transform':transformValue,
                    '-webkit-transform':transformValue,
                    '-moz-transform':transformValue,
                    '-o-transform':transformValue,
                    '-ms-transform':transformValue,
                    'transform-origin':transformOriginValue,
                    '-webkit-transform-origin':transformOriginValue,
                    '-moz-transform-origin':transformOriginValue,
                    '-o-transform-origin':transformOriginValue,
                    '-ms-transform-origin':transformOriginValue
                });
                $(elem).css('height', signupHeight);
            }
        }
    };
}
