import {NotesLeftController} from "./notes.left.controller";
import {NotesCenterController} from "./notes.center.controller";

angular.module("Notes")
    .controller("NotesLeftController", NotesLeftController)
    .controller("NotesCenterController", NotesCenterController);
