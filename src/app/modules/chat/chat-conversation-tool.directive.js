export function chatConversationTool($timeout, $uibModal) {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var functionTools = {
                takephoto: chatCTTakephoto,
                sendfile: chatCTSendfile,
                emo: chatCTEmo,
                call: chatCTCall,
                videocall: chatCTVideocall,
                location: chatCTLocation
            };

            elem.bind('click', function(event) {
                let toolName = attrs.chatConversationTool;
                functionTools[toolName](scope, $timeout, $uibModal);
            });
        }
    };
}

function chatCTTakephoto(scope, $timeout, $uibModal){
    let modal = $uibModal.open({
        templateUrl: "modules/chat/takephoto.html",
        controller: "ChatController",
        controllerAs: "chat",
        //backdrop: false,
        windowTemplateUrl: "modules/chat/window-takephoto.html"
    });
}

function chatCTEmo(){

}

function chatCTSendfile(scope, $timeout, $uibModal){
    let elInputFile = $('<input/>', {
        type: "file",
        multiple: ""
    }).appendTo('#chatConvBrowseFiles');

    elInputFile.on('change', function(event){
        let fileList = event.target.files || event.dataTransfer.files;
        let arrFiles = [];

        for (let i = 0; i < fileList.length; i++) {
            let file = fileList[i];
            arrFiles.push(file);
        }

        scope.chat.sendFile(arrFiles);

        $timeout(function() {
            var chatConvMsgs = $('#chatConvMsgs');
            chatConvMsgs.scrollTop(chatConvMsgs[0].scrollHeight);
        }, 100);
    });

    elInputFile.click();
}

function chatCTCall(){

}

function chatCTVideocall(){

}

function chatCTLocation(){

}
