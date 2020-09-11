(function () {

    var app = angular.module("appRoutes", ['ngRoute','authServices']);

    app.config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '../views/pages/login.html',
                controller: 'loginCtrl',
                name: "QLH | HOME",
                resolve : {
                        //This function is injected with the AuthService where you'll put your authentication logic
                        'auth' : function(Auth){
                            console.log(Auth.isLoggedIn())
                            return Auth.isLoggedIn();
                        }
                    }
                
            })
            .when('/forms', {
                templateUrl: '../views/pages/forms.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/forms/:userid', {
                templateUrl: '../views/viewintake2.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/intake/:userid', {
                templateUrl: '../views/pages/intake.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/about', {
                templateUrl: '../views/pages/about.html',
                name: "QLH | SERVICES",
                controller: "mainCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/clientprofile', {
                templateUrl: '../views/pages/clientprofile.html',
                name: "QLH | SERVICES",
                controller: "clientProfileCtrl",
                controllerAs: 'profile',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/packages', {
                templateUrl: '../views/pages/packages.html',
                name: "QLH | SERVICES",
                controller: "mainCtrl",
                controllerAs: 'main',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/contact', {
                templateUrl: '../views/pages/contact.html',
                name: "QLH | SERVICES",
                controller: "mainCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/testimonials', {
                templateUrl: '../views/pages/testimonials.html',
                name: "QLH | SERVICES",
                controller: "mainCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/viewintake', {
                templateUrl: '../views/viewintake.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/viewintake', {
                templateUrl: '../views/viewintake.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/wellnessintake', {
                templateUrl: '../views/wellnessintake.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                    }
                }
            })
            .when('/viewwellnessintake', {
                templateUrl: '../views/viewwellnessintake.html',
                name: "QLH | SERVICES",
                controller: "intakeCtrl",
                controllerAs: 'intake',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
          
            .when('/register', {
                templateUrl: '../views/pages/register.html',
                name: "QLH | SERVICES",
                controller: "registerCtrl",
                controllerAs: 'register',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
            .when('/login', {
                templateUrl: '../views/pages/login.html',
                name: "QLH | SERVICES",
                controller: "loginCtrl",
                controllerAs: 'login',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })

            .when('/messages', {
                templateUrl: '../views/pages/messagepage.html',
                name: "QLH | PROFILE",
                controller: "profileCtrl",
                controllerAs: 'profile'

            })
            .when('/schedule', {
                templateUrl: '../views/pages/schedulepage.html',
                name: "QLH | PROFILE",
                controller: "profileCtrl",
                controllerAs: 'profile'

            })
            .when('/scheduledjobpage', {
                templateUrl: '../views/pages/scheduledjobpage.html',
                name: "QLH | PROFILE",
                controller: "profileCtrl",
                controllerAs: 'profile'

            })
            .when('/contact', {
                templateUrl: '../views/pages/contact.html',
                name: "QLH | SERVICES",
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
         
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false
            //now no more # required before routes
        })


    })
   

    app.run(['$rootScope', '$location','Auth', function ($rootScope, $location, $routeUpdate, $routeParams,Auth) {

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
          console.log( Auth)

        });


    }]);

}())