export function chatModule($document) {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            //$document.bind('click', function(event){
            elem.bind('click', function(event){
                if($.inArray(event.target, $('.contact, .contact *, .conversation, .conversation *')) == -1){
                    scope.$apply(function() {
                        scope.chat.room = "";
                        scope.chat.convState = false;
                    });
                }
            });
        }
    };
}
