import {ChatConfig} from "./chat.config";
import {ChatSocketService} from "./chat.socket.service";
import {ChatDataModel} from "./chat.datamodel.service";
import {ChatController} from "./chat.controller";
import {chatModule} from "./chat-module.directive";
import {chatRid} from "./chat-rid.directive";
import {chatConversationClose} from "./chat-conversation-close.directive";
import {chatConversationDroppable} from "./chat-conversation-droppable.directive";
import {chatConversationImageContent} from "./chat-conversation-image-content.directive";
import {chatConversationTool} from "./chat-conversation-tool.directive";
import {chatConversationInput} from "./chat-conversation-input.directive";
import {chatConversationTakephoto} from "./chat-conversation-takephoto.directive";
import {ChatRun} from "./chat.run";

angular.module("Chat")
    .config(ChatConfig)
    .factory('ChatSocketService', ChatSocketService)
    .factory("ChatDataModel", ChatDataModel)
    .controller("ChatController", ChatController)
    .directive("chatModule", chatModule)
    .directive("chatRid", chatRid)
    .directive("chatConversationClose", chatConversationClose)
    .directive("chatConversationDroppable", chatConversationDroppable)
    .directive("chatConversationImageContent", chatConversationImageContent)
    .directive("chatConversationTool", chatConversationTool)
    .directive("chatConversationInput", chatConversationInput)
    .directive("chatConversationTakephoto", chatConversationTakephoto)
    .run(ChatRun);
