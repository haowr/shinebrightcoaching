(function(){

    var app = angular.module('registerController',['userServices','authServices'])

    app.config(function(){

    })

    app.controller('registerCtrl', function($scope,$http,$location,User,$timeout,$rootScope,Auth,$window){
               
        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn = Auth.isLoggedIn()

            Auth.getUser().then(function (data) {

                $rootScope.payPeriod = data.data.payperiod;
                $rootScope.userClassy = $rootScope.userClass

            })

        })
        
        $scope.successReg   = false;
        $scope.failReg      = false;
        $scope.errorMsg     = false;
        $scope.successMsg   = false;
  

        this.regClient=function(regData,valid,regForm){
           
            if(valid){
                
                this.regData.userclass  = "client"
                this.regData.iagree     = true;
                $scope.loading          = true;
                $location.path('/clientregister')

                User.create(this.regData).then(function(data){


                    if(data.data.success){

                        $scope.loading      = false;
                        $scope.successReg   = true;
                        $scope.successMsg   = data.data.message;

                        $timeout(function(){

                            $scope.successReg = false;
                            $scope.successMsg = false;
                            $location.path('/login');

                        },3000)

                    }else{

                        $scope.loading      = false;
                        $scope.failReg      = true;
                        $scope.errorMsg     = data.data.message;

                        setTimeout(function(){

                            $scope.failReg  = false;
                            $scope.errorMsg = false;

                        },3000)

                    }

                })

            }else{

                console.log("Incomplete form..")
                
            }
        }

    })

}());