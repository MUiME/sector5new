export function chatConversationImageContent(AuthService) {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.on('load', function(){
                let maxWidth = $(this).parent()[0].offsetWidth;
                let maxHeight = maxWidth * 1.6;
                let baseRatio = maxHeight/maxWidth;

                let currWidth = $(this).width()
                let currHeight = $(this).height();
                let currRatio = currHeight/currWidth;

                if(currRatio > baseRatio){
                    $(this).css('height', maxHeight);
                }
                else{
                    $(this).css('width', maxWidth);
                }

                $(this).parent().css('width', $(this).width());
            });
        }
    };
}
