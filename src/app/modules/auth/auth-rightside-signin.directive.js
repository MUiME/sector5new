export function authRightsideSignin() {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl) {
            setRatioSignin();

            $(window).bind('resize', function(){
                setRatioSignin();
            });

            function setRatioSignin(){
                var ratio = 1.12;
                var elemAuth = $('#authRightside');
                var elemSigninCard = $('#authRightside .signin .card');
                var authWidth = elemAuth[0].offsetWidth;
                var signinWBase = elemSigninCard[0].offsetWidth;
                var signinHBase = elemSigninCard[0].offsetHeight;
                var signinWidth = authWidth/ratio;
                var signinHeight = signinHBase*signinWidth/signinWBase;
                var signinScale = signinWidth/signinWBase;
                var transformValue = "scale("+signinScale+", "+signinScale+")";
                var transformOriginValue = "center center";

                elemSigninCard.css({
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
                $(elem).css('height', signinHeight);
            }
        }
    };
}
