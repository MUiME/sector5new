export function slideToggleHorizontal() {
    "ngInject";

    return {
        restrict: 'A',
        scope: {
            elemSlide: '@slideTarget'
        },

        link: function (scope, elem, attrs) {
            elem.bind('click', function(){
                let elemSlide = $(scope.elemSlide);

                if(elemSlide.hasClass("show")){
                    elemSlide.animate({
                        left: "100%"
                    }, 500, function() {
                        elemSlide.removeClass("show");
                        elemSlide.css("left", "");
                    });
                }
                else{
                    elemSlide.animate({
                        left: 0
                    }, 500, function() {
                        elemSlide.addClass("show");
                        elemSlide.css("left", "");
                    });
                }
            });
        }
    };
};
