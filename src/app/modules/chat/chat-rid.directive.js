export function chatRid($timeout) {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('click', function(event) {
                if(scope.chat.convState && scope.chat.room == attrs.chatRid){
                    scope.$apply(function() {
                        scope.chat.room = "";
                        scope.chat.convState = false;
                    });
                }
                else{
                    scope.$apply(function() {
                        scope.chat.room = attrs.chatRid;
                        scope.chat.convState = true;

                        $timeout(function(){
                            //console.log($("#chatConvInput").focus);

                            $("#chatConvInput").focus();
                        }, 100);
                    });
                }
            });
        }
    };

}
