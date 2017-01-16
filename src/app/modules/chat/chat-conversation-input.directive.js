export function chatConversationInput($timeout) {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('focus', function(){
                scope.chat.messages[scope.chat.room]
                    .filter(function(chat){
                        return chat.seen == false;
                    }).forEach(function(chat){
                        chat.seen = true;
                    });
            });

            elem.bind('keyup', function(event){
                if(event.keyCode == 13 && !event.shiftKey){
                    scope.$apply(function(){
                        scope.chat.sendMessage();

						$timeout(function() {
                            var chatConvMsgs = $('#chatConvMsgs');
                            chatConvMsgs.scrollTop(chatConvMsgs[0].scrollHeight);
						}, 100);
                    });
                }
            });
        }
    };
}
