/**
 * @ngdoc controller
 * @name Chat.controller:ChatController
 * @description Controller for Chat module.
 */
export class ChatController {
    constructor(ChatSocketService, AuthService, FileAttachService, $scope, $filter, $timeout) {
        "ngInject";

        this.socket = ChatSocketService;
        this._AuthService = AuthService;
        this._FileAttachService = FileAttachService;
        this._$scope = $scope;



        this.newMsg = "";

        this.icon = {
            'r1': "http://i.imgur.com/ae5r9VA.png",
            'r2': "http://i.imgur.com/tnMJGyT.png",
            'r3': "http://i.imgur.com/tnMJGyT.png",
            'r4': "http://i.imgur.com/ae5r9VA.png",
            'r5': "http://i.imgur.com/tnMJGyT.png"
        };

        this.name = {
            'r1': "Kevin Spacey",
            'r2': "Rosamund Pike",
            'r3': "Eva Green",
            'r4': "Paul Newman",
            'r5': "Thomas Break"
        };

        this.messages = {
            'r1': [],
            'r2': [],
            'r3': [],
            'r4': [],
            'r5': []
        };

        this.room = "";

        this.convState = false;





        this.socket.on('connect', () => {
            console.log("io connect success");

//            this.socket.emit('get:contacts');
//
//            this.socket.on('get:contacts', function (data) {
//                console.log(data);
//            });


            this.socket.on('send:message', (data) => {
                data.params.seen = false;
                this.messages[data.room].push(data.params);

                var chatConvMsgs = $('#chatConvMsgs');
                var needScrollToBottom = (chatConvMsgs[0].scrollHeight - (chatConvMsgs[0].scrollTop + chatConvMsgs.height() + parseInt(chatConvMsgs.css('padding-top'))) < 1);
                $timeout(function() {
                    if (needScrollToBottom){
                        chatConvMsgs.scrollTop(chatConvMsgs[0].scrollHeight);
                    }
                }, 100);
            });

            this.socket.on('send:image', (data) => {
//                let reader = new FileReader();
//                 reader.onload = function (evt) {
//                     let fContent = evt.target.result;
//
//                     let chat = {
//                        icon: data.params.icon,
//                        username: data.params.username,
//                        type: "image",
//                        content: fContent,
//                        origDt: data.params.origDt,
//                         seen: false
//                     };
//
//                     this.messages[data.room].push(chat);
//                 };
//                reader.readAsDataURL(data.params.fileInfo);


                data.params.seen = false;
                this.messages[data.room].push(data.params);

                var chatConvMsgs = $('#chatConvMsgs');
                var needScrollToBottom = (chatConvMsgs[0].scrollHeight - (chatConvMsgs[0].scrollTop + chatConvMsgs.height() + parseInt(chatConvMsgs.css('padding-top'))) < 1);
                $timeout(function() {
                    if (needScrollToBottom){
                        chatConvMsgs.scrollTop(chatConvMsgs[0].scrollHeight);
                    }
                }, 100);
            });

            this.socket.on('send:file', (data) => {
                data.params.seen = false;
                this.messages[data.room].push(data.params);

                var chatConvMsgs = $('#chatConvMsgs');
                var needScrollToBottom = (chatConvMsgs[0].scrollHeight - (chatConvMsgs[0].scrollTop + chatConvMsgs.height() + parseInt(chatConvMsgs.css('padding-top'))) < 1);
                $timeout(function() {
                    if (needScrollToBottom){
                        chatConvMsgs.scrollTop(chatConvMsgs[0].scrollHeight);
                    }
                }, 100);
            });
        });
    }

    isSender(username){
        return (username == this._AuthService.profile.username);
    }

    getNumNotify(room){
        return this.messages[room].filter(function(chat){ return chat.seen == false; }).length;
    }

    get currentMessages() {
        return this.messages[this.room];
    };

    get currentName() {
        return this.name[this.room];
    }

    get currentIcon() {
        return this.icon[this.room];
    }

    getIconFile(fileName){
        return this._FileAttachService.getIcon(fileName);
    }

    formatCapacityFile(fileSize){
        return this._FileAttachService.formatCapacity(fileSize);
    }

    sendMessage() {
        if (this.newMsg.trim() != "") {
            var chat = {
                icon: "http://placehold.it/16x16",
                username: this._AuthService.profile.username,
                type: "text",
                text: this.newMsg,
                origDt: new Date()//$filter('date')(new Date(), 'HH:mm:ss')
            };

            //this.socket.emit('send:message', chat);
            this.socket.emit('send:message', {
                room: this.room,
                params: chat
            });

            // add the message to our model locally
            this.messages[this.room].push(chat);

            // clear message box
            this.newMsg = "";
        }
    }

    sendFile(arrfiles) {
        arrfiles.forEach((file) => {
            if(/^image/.test(file.type)){
                let reader = new FileReader();
                reader.onload = (evt) => {
                    let fContent = evt.target.result;

//                    if (checkSize(size) && isTypeValid(type)) {
//                        return scope.$apply(function () {
//                            scope.file = evt.target.result;
//                            if (angular.isString(scope.fileName)) {
//                                return scope.fileName = name;
//                            }
//                        });
//                    }

                    let chat = {
                        icon: "http://placehold.it/16x16",
                        username: this._AuthService.profile.username,
                        type: "image",
                        content: fContent,
                        origDt: new Date() //$filter('date')(new Date(), 'HH:mm:ss')
                    };

                    this.socket.emit('send:image', {
                        room: this.room,
                        params: chat
                    });

                    this._$scope.$apply(() => {
                        this.messages[this.room].push(chat);
                    });
                };
                reader.readAsDataURL(file);
            }
            else{
                let chat = {
                    icon: "http://placehold.it/16x16",
                    username: this._AuthService.profile.username,
                    type: "file",
                    fileName: file.name,
                    fileType: file.type,
                    fileSize: file.size,
                    origDt: new Date() //$filter('date')(new Date(), 'HH:mm:ss')
                };

                this.socket.emit('send:file', {
                    room: this.room,
                    params: chat
                });

                this._$scope.$apply(() => {
                    this.messages[this.room].push(chat);
                });
            }
        });
    }
}
