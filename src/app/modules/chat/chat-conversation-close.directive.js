export function chatConversationClose() {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function(event) {
                scope.$apply(function() {
                    scope.chat.convState = false;
                });
            });
        }
    };
}
