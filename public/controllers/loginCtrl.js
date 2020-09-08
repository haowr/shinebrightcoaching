(function () {

    var app = angular.module('loginController', ['authServices'])

    app.config(function () {


    })

    app.controller('loginCtrl', function ($scope, Auth, $timeout, $location, $rootScope,$window) {

        $rootScope.payPeriod    = false;
        $scope.successfulLogin  = false;
        $scope.failedLogin      = false;
        $scope.loading          = false;
        $scope.fadein           = false;
    

        $scope.errorMsg         = false;
      
        $scope.openModal = function () {

            $('#modal2').modal('open');
            
        }

        $scope.openModal();

        $scope.loginUser = function (loginData, valid) {

        
            $scope.failedLogin      = false;
            $scope.fadein           = true;
            $scope.succesfulLogin   = false;
            $scope.loading          = true;

            Auth.login(this.loginData).then(function (data) {

                if (data.data.success) {

                    $scope.loading              = false;
                    $rootScope.payPeriodIcon    = true;
                    $scope.fadein               = true;
                    $scope.successfulLogin      = true;
                    $window.localStorage.setItem('_id', data.data.user._id)
                    $window.localStorage.setItem('intakeId', data.data.user._id)

                    $rootScope.payPeriod        = data.data.user.payperiodnum;

                    if ( data.data.user.userclass == "admin" ) {

                        if(data.data.user.wellness){

                            $rootScope.viewWellness   = true;
                            
                        }else{

                            $rootScope.createWellness = true;

                        }
                        $timeout(function () {

                            $scope.fadein           = false;
                            $scope.successfulLogin  = false;

                            $location.path('/profile/' + data.data.user._id)

                        }, 3000)

                    } else if (data.data.user.userclass == "employee") {

                        $timeout(function () {

                            $scope.fadein           = false;
                            $scope.successfulLogin  = false;

                            $location.path('/clientprofile/')
 
                        }, 3000)

                    } else {

                        $timeout(function () {

                            $scope.fadein           = false;
                            $scope.successfulLogin  = false;

                            $location.path('/management')

                        }, 3000)

                    }


                } else {

                    $scope.loading      = false;
                    $scope.failedLogin  = true;
                    $scope.errorMsg     = data.data.message;

                    $timeout(function(){

                        $scope.fadein       = false;
                        $scope.failedLogin  = false;
                        $scope.errorMsg     = ""

                    },5000)

                }

            })

        }

    })

}());