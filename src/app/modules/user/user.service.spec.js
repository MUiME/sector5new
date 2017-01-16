describe('UserService', function () {
    beforeEach(angular.mock.module('MainApp'));

    let service, $httpBackend, MainAppConstant;
    beforeEach(angular.mock.inject(function (_$httpBackend_, _MainAppConstant_, AuthService) {
        // The injector unwraps the underscores from around the parameter names when matching

        // Expose the service to the tests
        service = AuthService;

        $httpBackend = _$httpBackend_;
        MainAppConstant = _MainAppConstant_;
    }));

    // make sure no expectations were missed in your tests.
    // (e.g. expectGET or expectPOST)
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('getAll should return the response', function() {
        // set up some data for the http call to return and test later.
        let returnData = {
            token: "abc123"
        };


        // expectPOST to make sure this is called once.
        $httpBackend.expectPOST(MainAppConstant.apiPath+'/authenticate').respond(returnData);

        // make the call & set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        //let result;
//        service.getAll().then((data) =>

//            result = data;
//        });
        service.signin('praewrung@muime.com', '123456');
//        service.user({
//            firstname:"praewrung",
//            lastname:"klaysomboon",
//            email: "praewrung@muime.com",
//            password1: "123456",
//            gender:"orther"
//        });

        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();

        expect(service.localStorage.token).toEqual(returnData.token);

        //expect(result).toEqual(returnData);
    });

    it('getAll should return the response', function() {
        // set up some data for the http call to return and test later.
        let returnData = {
            token: "abc123"
        };


        // expectPOST to make sure this is called once.
        $httpBackend.expectPOST(MainAppConstant.apiPath+'/authenticate').respond(returnData);

        service.signin('praewrung@muime.com', '123456');


        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();

        expect(service.localStorage.token).toEqual(returnData.token);

        //expect(result).toEqual(returnData);
    });

});
