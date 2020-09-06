(function () {

    var app = angular.module('intakeController', ['userServices', 'authServices'])

    app.config(function () {


    })

    app.controller('intakeCtrl', function ($scope, $http, $location, User, $timeout, $rootScope, Auth, $routeParams, $window) {

        $rootScope.loggedIn = Auth.isLoggedIn()
        $scope.id = $window.localStorage.getItem('intakeId')
        $scope.idForUserClass = $window.localStorage.getItem('_id');
        $scope.currentClient = ""
        $scope.intakeObject = {};
        $scope.allFieldsMustBeFilledIn = false;
        console.log("LOGED IN?")
        console.log($rootScope.loggedIn)
        $scope.logOut = function () {
            Auth.logout();
        }
        $scope.intakeArray = []
        $scope.intakeIndex = null;
        $scope.page = 0
        $scope.intakeObject2 = {}
User.getUser($scope.idForUserClass).then(function(data){
    $rootScope.userClass = data.data.user.userclass

  if (data.data.user.userclass == 'admin') {
                User.getUser($scope.idForUserClass).then(function (data) {
            console.log(data)
            
           
            //$scope.userclass = data.data.user.userclass
            console.log("USER CLASS")
            console.log($scope.userclass)
                $scope.intakeArray = data.data.user.adminintakes
                $scope.intakeObject = data.data.user.intake
                User.getUser($scope.id).then(function(data){
                    $scope.intakeObject2 = data.data.user.intake
                    $scope.currentClient = data.data.user.name
                })
                
                console.log("DATA.DATA.USER.INTAKE")
                console.log(data.data.user.intake)
                console.log("ADMIN INTAKES ")
                console.log($scope.intakeArray)


                


                $scope.intakesLoading = true;
                $scope.intakesForPagination = [];
                $scope.intakesPaginated = [];
                $scope.pageLimit = 4;
                        console.log(data)
                      
                        console.log("MESSAGES ARRAY")
                        console.log($scope.messagesArray)
                        for (var i = 0; i <= $scope.intakeArray.length; i++) {

                            var page = 0;
                           
                            if (i < $scope.pageLimit) {
                                console.log("its less")

                            }
                            if (i < $scope.intakeArray.length) {
                                console.log("yup,less")
                            }

                            if (i < $scope.pageLimit && i < $scope.intakeArray.length) {//5
                                console.log("HELLO")
                                //console.log($scope.employees[i])
                                //console.log($scope.pageLimit, i, $scope.employees.length)
                                if ($scope.intakeArray[i]) {
                                    $scope.intakeArray[i].intakeIndex = i
                                    $scope.intakesForPagination.push($scope.intakeArray[i])
                                    console.log(i)
                                    console.log("firstCondiation")
                                   
                                }



                            } else {
                                if (!$scope.usersLoaded) {

                                    console.log("else")
                                    console.log(i)

                                    $scope.loadingUsers = false;
                                    $scope.intakesPaginated.push($scope.intakesForPagination)
                                    console.log("INTAKES PAGINATED")
                                    console.log($scope.intakesPaginated)
                                    console.log($scope.intakesPaginated.length)
                                    $scope.intakesForPagination = [];
                                    if ($scope.intakeArray[i] !== undefined) {
                                        $scope.intakeArray[i].intakeIndex = i
                                        $scope.intakesForPagination.push($scope.intakeArray[i])
                                    }
                                    $scope.pageLimit = $scope.pageLimit + 4;
                                    //console.log($scope.pageLimit, i, $scope.employees.length)

                                    page++

                                }

                            }

                        }
                
             }) }   else{
                User.getUser($scope.idForUserClass).then(function(data){
                    console.log("ELSE")
                    console.log(data)
                    $scope.intakeObject = data.data.user.intake
                     $scope.currentClient = data.data.user.name
                                $scope.currentClient = data.data.user.name

                })
                  


            }
            })
           
       
    


        $scope.openIndividualIntake= function(id,client,q1,q2,q3){
            console.log(id)
            $scope.intakeObject ={}
            $window.localStorage.setItem('intakeId',id)
            //$scope.currentClient = client


            $scope.intakeObject.question1 = q1
            $scope.intakeObject.question2 = q2
            $scope.intakeObject.question3 = q3
            console.log($scope.intakeObject)
            $location.path('/forms/'+id)

        }
        $scope.wIntakeInfo = {

            active: null,
            addictions: null,
            addictionsshare: null,
            address: null,
            age: null,
            bestwaycoach: null,
            breakfast: null,
            challenges: null,
            changesliked: null,
            chronicpain: null,
            digestion: null,
            digestionshare: null,
            eatstressed: null,
            eatwhenbored: null,
            email: null,
            energy: null,
            exerciseregular: null,
            exercisetype: null,
            healthconcerns: null,
            healthprograms: null,
            height: null,
            important: null,
            keepsyouup: null,
            majorhealth: null,
            meditation: null,
            name: null,
            operate: null,
            organization: null,
            pace: null,
            phonenumber: null,
            portioncontrol: null,
            relationship: null,
            share: null,
            sleep: null,
            stresslevel: null,
            water: null,
            weight: null,
            weightoneyearago: null,
            whatyouwant: null


        }
        $scope.loadingIntake = false;
        $scope.noWellnessIntake = false;
        $scope.submitwIntake = function () {
            console.log($scope.wIntakeInfo)
            if (!$scope.wIntakeInfo.whatyouwant) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.age) {

                console.log("hit")
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.address) {
                $scope.allFieldsMustBeFilledIn = true;
            }

            if (!$scope.wIntakeInfo.addictions) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.active) {
                $scope.allFieldsMustBeFilledIn = true;
                console.log("hite")
            }
            if (!$scope.wIntakeInfo.digestion) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.chronicpain) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.changesliked) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.challenges) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.breakfast) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.bestwaycoach) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.height) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.healthprograms) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.healthconcerns) {
                $scope.allFieldsMustBeFilledIn = true;
            }

            if (!$scope.wIntakeInfo.exercisetype) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.exerciseregular) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.energy) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.email) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.eatwhenbored) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.eatstressed) {
                $scope.allFieldsMustBeFilledIn = true;
            }


            if (!$scope.wIntakeInfo.weightoneyearago) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.weight) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.water) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.stresslevel) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.sleep) {
                $scope.allFieldsMustBeFilledIn = true;
            }

            if (!$scope.wIntakeInfo.relationship) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.portioncontrol) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.phonenumber) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.pace) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.organization) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.operate) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.name) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.meditation) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.majorhealth) {
                $scope.allFieldsMustBeFilledIn = true;
            }

            if (!$scope.wIntakeInfo.important) {
                $scope.allFieldsMustBeFilledIn = true;
            }
            if (!$scope.wIntakeInfo.height) {
                $scope.allFieldsMustBeFilledIn = true;
            }

            if ($scope.wIntakeInfo.height && $scope.wIntakeInfo.whatyouwant && $scope.wIntakeInfo.weightoneyearago && $scope.wIntakeInfo.weight && $scope.wIntakeInfo.water &&
                $scope.wIntakeInfo.stresslevel && $scope.wIntakeInfo.sleep && $scope.wIntakeInfo.relationship && $scope.wIntakeInfo.portioncontrol && $scope.wIntakeInfo.phonenumber &&
                $scope.wIntakeInfo.pace && $scope.wIntakeInfo.organization && $scope.wIntakeInfo.operate && $scope.wIntakeInfo.name && $scope.wIntakeInfo.meditation && $scope.wIntakeInfo.majorhealth
                && $scope.wIntakeInfo.important && $scope.wIntakeInfo.healthprograms && $scope.wIntakeInfo.healthconcerns && $scope.wIntakeInfo.exercisetype && $scope.wIntakeInfo.exerciseregular &&
                $scope.wIntakeInfo.energy && $scope.wIntakeInfo.email && $scope.wIntakeInfo.eatwhenbored && $scope.wIntakeInfo.eatstressed && $scope.wIntakeInfo.digestion &&
                $scope.wIntakeInfo.chronicpain && $scope.wIntakeInfo.changesliked && $scope.wIntakeInfo.challenges && $scope.wIntakeInfo.breakfast && $scope.wIntakeInfo.bestwaycoach && $scope.wIntakeInfo.age &&
                $scope.wIntakeInfo.address && $scope.wIntakeInfo.addictions && $scope.wIntakeInfo.active) {

                console.log("pefect")
                $scope.allFieldsMustBeFilledIn = false;
                $scope.wIntakeInfo.id = $window.localStorage.getItem('_id')
                $scope.loadingIntake = true;
                User.addWellnessIntake($scope.wIntakeInfo).then(function (data) {
                    console.log(data)
                    $timeout(function () {
                        if (data.data.success) {
                            $scope.loadingIntake = false;
                            $location.path('/viewwellnessintake');


                        } else {
                            $location.path('/wellnessintake');
                        }
                    }, 5000)
                })
            }

        }

        /* User.getCurrentUser($scope.id).then(function(data){
             console.log(data)
             $scope.currentClient = data.data.user.name

             $scope.intakeObject = data.data.user.intake
         
             if(!data.data.user.wellnessintake){
                 console.log("no wellness")
                 $scope.noWellnessIntake = true;
             }else{
                 $scope.wellnessIntakeObject = data.data.user.wellnessintake
             }
         })*/
        Auth.getUser().then(function (data) {
            console.log(data)
            $rootScope.payPeriod = data.data.payperiod;
            $rootScope.userClassy = $rootScope.userClass

            console.log($rootScope.userClass)
        })

        $scope.intakeInfo = {
            question1: null,
            question2: null,
            question3: null,

        }
        //$scope.loadingIntake = false;


        $scope.submitIntake = function () {
            console.log($scope.intakeInfo)
            if ($scope.intakeInfo.question1 == null) {
                $scope.allFieldsMustBeFilledIn = true;

            }
            if ($scope.intakeInfo.question2 == null) {
                $scope.allFieldsMustBeFilledIn = true;

            }
            if ($scope.intakeInfo.question3 == null) {
                $scope.allFieldsMustBeFilledIn = true;

            }
            if ($scope.intakeInfo.question1 && $scope.intakeInfo.question2 && $scope.intakeInfo.question3) {
                $('html, body').animate({ scrollTop: 0 }, 'fast');
                $scope.intakeInfo.id = $routeParams.userid
                $scope.intakeInfo.intake
                $scope.intakeInfo.client = $window.localStorage.getItem('intakeName')
                $window.localStorage.removeItem('intakeName')
                $scope.loadingIntake = true;

                User.addIntake($scope.intakeInfo).then(function (data) {
                    console.log(data)
                    $timeout(function () {
                        if (data.data.success) {
                            $scope.loadingIntake = false;
                            $location.path('/login');


                        } else {
                            $location.path('/intake/' + $routeParams.userid);
                        }
                    }, 5000)
                })

            }

        }

    })
}());