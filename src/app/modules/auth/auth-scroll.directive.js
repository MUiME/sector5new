export function authScroll() {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function(event) {
                var $anchor = $(this);

                $('#auth1').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - $('#auth1').offset().top + $('#auth1').scrollTop()
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            });
        }
    };
}
