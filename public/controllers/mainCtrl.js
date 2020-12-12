(function () {

    var app = angular.module('mainController', ['authServices'])

    app.config(function () {

    })

    app.controller('mainCtrl', function ($scope,  $timeout, $location,  $rootScope,   $window,Auth) {

       $scope.shineHomeOpen                 = true;
       $scope.slideout                      = false;
       $scope.fadeinwelcome                 = false;
       $scope.slideinrightwelcome           = false;
       $scope.slideinleftwelcome            = true;
       

       $scope.audio                         = new Audio("../audio/shinebrightclick.wav")
       $scope.shinebrighterror              = new Audio("../audio/shinebrighterror.wav");
       $scope.shinebrightloading            = new Audio('../audio/shinebrightloading.wav');
       $scope.shinebrightsuccess            = new Audio('../audio/shinebrightsuccess.wav');
       $scope.shinebrighttap                = new Audio('../audio/shinebrighttap.wav');


       $scope.error                 = function(){

            $scope.shinebrighterror.play()

       }
       $scope.select                 = function(){

        $scope.shinebrighttap.play()

      }

  
        $scope.logOut = function(){

            Auth.logout();
            $scope.loggedIn = false;
            $location.path('/')
            
        }
  
        Auth.getUser().then(function (data) {
            
            if (data.data.success) {

                $rootScope.userClass    = data.data.userclass;
                $rootScope.user_id      = data.data._id
                $rootScope.messageCount = data.data.messages.length
                $rootScope.payPeriod    = data.data.payperiod;
                $rootScope.userClassy   = $rootScope.userClass

                if(data.data.wellness && !data.data.userclass !== 'admin'){

                    $scope.wellness = true;

                }else{

                    $scope.wellness = false;

                }
                if(data.data.intake && !data.data.userclass !== 'admin'){

                    $scope.intake = true;

                }else{

                    $scope.intake = false;

                }
            } else {

                    Auth.logout();

            }

        })
        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn     = Auth.isLoggedIn()    
            console.log("AUth.loggedIn", Auth.isLoggedIn())       
            $rootScope.userClassy   = $rootScope.userClass

            Auth.getUser().then(function (data) {

                if (data.data.success) {

                    $rootScope.userClass    = data.data.userclass
                    $rootScope.payPeriod    = data.data.payperiod;
                    $rootScope.userClassy   = $rootScope.userClass

                } else {

                    Auth.logout();

                }

            })

        })
       
    })

}());