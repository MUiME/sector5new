/**
 * @ngdoc controller
 * @name User.controller:UserController
 * @description Controller for User module.
 */
export class UserController {
    constructor(UserService) {
        "ngInject";

        this._UserService = UserService;
    }

    listUsers() {
        this._UserService.getAll().then((data) => {
            this.list_user = data;
        });
    }
}
