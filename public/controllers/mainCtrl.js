(function () {

    var app = angular.module('mainController', ['authServices'])
    app.config(function () {

        //console.log("Main Controller Loaded")
    })

    app.controller('mainCtrl', function ($scope,  $timeout, $location,  $rootScope,   $window,Auth) {

       $scope.shineHomeOpen = true;
       $scope.imageNumber = 0
       $scope.slideout = false;
       $scope.fadeinwelcome = false;
       $scope.slideinrightwelcome = false;
       $scope.slideinleftwelcome = true;
       $timeout(function(){
           $scope.slideinrightwelcome = true;
       },1000)
       $timeout(function(){
           $scope.fadeinwelcome = true;
       },2000)
       $scope.codingPageOpen = true;
       $scope.lifeCoach = false;
       $scope.wellnessCoach = false;
       $scope.openWellnessCoach = function(){
           $scope.wellnessCoach = true;
       }
       $scope.closeWellnessCoach = function(){
           $scope.wellnessCoach = false;
       }
       $scope.openLifeCoach = function(){
           $scope.lifeCoach = true;
       }
        $scope.closeLifeCoach = function(){
           $scope.lifeCoach = false;
       }
       $scope.changeImageNumber= function(){
           //$scope.slideout = true;
           if($scope.imageNumber < 7){
 $scope.imageNumber++
           }else{
               $scope.imageNumber = 0
               ////console.log("here")
           }
          
       }
      // $scope.createWellness= false;
       $//scope.viewWellness = false;
        $scope.logOut = function(){
            Auth.logout();
            $location.path('/')
        }
       Auth.getUser().then(function(data){
           ////console.log("GEt USER")
           ////console.log(data)
       })
        Auth.getUser().then(function (data) {
            //console.log(data)

            //console.log($rootScope.user_id)
            if (data.data.success) {
                $rootScope.userClass = data.data.userclass;
                $rootScope.user_id = data.data._id
                $rootScope.messageCount = data.data.messages.length
                $rootScope.payPeriod = data.data.payperiod;
                $rootScope.userClassy = $rootScope.userClass
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

            //console.log("Logged In?", Auth.isLoggedIn())
            $rootScope.loggedIn = Auth.isLoggedIn()
            // //console.log(AuthToken.getToken())
           
            $rootScope.userClassy = $rootScope.userClass

            Auth.getUser().then(function (data) {
                //console.log(data)
                if (data.data.success) {
                    $rootScope.userClass = data.data.userclass
                    $rootScope.payPeriod = data.data.payperiod;
                    $rootScope.userClassy = $rootScope.userClass
                } else {
                    Auth.logout();
                }


                //console.log($rootScope.userClass)
            })
        })
       
     
    })

}());