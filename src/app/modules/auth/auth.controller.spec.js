describe('AuthController', function () {
//    let windowObj = {location: {href: ''}};
//    beforeEach(angular.mock.module(function ($provide) {
//        $provide.value('$window', windowObj);
//    }));
     var $scope;
    beforeEach(angular.mock.module('MainApp'));

    let scope, deferred, controller, $location, AuthService,UserService;
    beforeEach(angular.mock.inject(function ($controller, $q, $rootScope, _$location_, _AuthService_,_UserService_) {
        // The injector unwraps the underscores from around the parameter names when matching

        $location = _$location_;
        AuthService = _AuthService_;
        UserService = _UserService_;

        deferred = $q.defer();

        // Generate a new scope
        scope = $rootScope.$new();

        controller = $controller('AuthController', {
            AuthService,
            $location
        });
    }));


    it('successful gets the list of users from the service', function () {
        // Mock implementation of AuthService.signin()
        spyOn(AuthService, 'signin').and.callFake(function () {
            deferred.resolve();
            return deferred.promise;
        });
        spyOn($location, 'path');

        controller.user = {
            username: "praewrung@muime.com",
            password: "123456"
        };

        controller.signin();

        scope.$apply();

        expect(AuthService.signin).toHaveBeenCalled();
        expect(AuthService.signin).toHaveBeenCalledWith("praewrung@muime.com", "123456");
        expect($location.path).toHaveBeenCalledWith("/home");


        //expect(controller._$window).toBeDefined();
    });

    it('should reject promise', function () {
        spyOn(AuthService, 'signin').and.callFake(function () {
            deferred.reject("Invalid username or password.");
            return deferred.promise;
        });

        controller.user = {
            username: "praewrung@muime.com",
            password: "123456"
        };

        controller.signin();

        scope.$apply();

        expect(controller.error.signin).toEqual(true);

//    // This will call the .catch function in the controller
//        deferred.reject();
//
//        // We have to call apply for this to work
//        scope.$apply();

        // Since we called apply, not we can perform our assertions
        //expect(scope.results).toBe(undefined);
        //expect(scope.error).toBe('There has been an error!');
      });

    it('successful gets the list of users from the service', function () {
        // Mock implementation of AuthService.signin()
        spyOn(UserService, 'Create').and.callFake(function () {
            deferred.resolve();
            return deferred.promise;
        });
        spyOn($location, 'path');



        controller.user = {
            firstname:"praewrung",
            lastname:"klaysomboon",
            email: "praewrung@muime.com",
            password1: "123456",
            gender:"orther"
        };

        controller.signup();

        scope.$apply();

        expect(UserService.Create).toHaveBeenCalled();
        expect(UserService.Create).toHaveBeenCalledWith({
            firstname:"praewrung",
            lastname:"klaysomboon",
            email: "praewrung@muime.com",
            password: "123456",
            gender:"orther"

        });


        //expect(controller._$window).toBeDefined();
    });
    it('should reject promise', function () {
        spyOn(UserService,'Create' ).and.callFake(function () {
            deferred.reject("Invalid.");
            return deferred.promise;
        });

        controller.user = {
           firstname:"praewrung",
            lastname:"klaysomboon",
            email: "praewrung@muime.com",
            password1: "123456",
            gender:"orther"
        };

        controller.signup();

        scope.$apply();

       // expect(controller.error.signup).toEqual(true);

      });

});
