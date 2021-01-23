(function () {

    var app = angular.module('discoveryController', ['authServices','userServices'])

    app.config(function () {

            console.log("discovery Controller Loaded...")

    })

    app.controller('discoveryCtrl', function ($scope, Auth, User, $timeout, $location, $rootScope,$window) {


        $scope.bookDiscovery8 = true
            $scope.bookDiscovery9 = true;
            $scope.bookDiscovery18 = true;
            $scope.bookDiscovery19 = true;
            $scope.bookDiscovery28 = true;
            $scope.bookDiscovery29 = true;
            $scope.bookDiscovery39 = true;
            $scope.bookDiscovery49 = true;
            $scope.bookDiscovery59 = true;
            $scope.bookDiscovery10 = true;
            $scope.bookDiscovery110 = true;
            $scope.bookDiscovery210 = true;
            $scope.bookDiscovery310 = true;
            $scope.bookDiscovery410 = true;
            $scope.bookDiscovery510 = true;
            $scope.bookDiscovery11 = true;
            $scope.bookDiscovery111 = true;
            $scope.bookDiscovery211 = true;
            $scope.bookDiscovery311 = true;
            $scope.bookDiscovery411 = true;
            $scope.bookDiscovery511 = true;
            $scope.bookDiscovery12 = true;
            $scope.bookDiscovery112 = true;
            $scope.bookDiscovery212 = true;
            $scope.bookDiscovery312 = true;
            $scope.bookDiscovery412 = true;
            $scope.bookDiscovery512 = true;
            $scope.bookDiscovery1 = true;
            $scope.bookDiscovery11 = true;
            $scope.bookDiscovery21 = true;
            $scope.bookDiscovery31 = true;
            $scope.bookDiscovery41 = true;
            $scope.bookDiscovery51 = true;
            $scope.bookDiscovery2 = true;
            $scope.bookDiscovery102 = true;
            $scope.bookDiscovery22 = true;
            $scope.bookDiscovery32 = true;
            $scope.bookDiscovery42 = true;
            $scope.bookDiscovery52 = true;
            $scope.bookDiscovery3 = true;
            $scope.bookDiscovery13 = true;
            $scope.bookDiscovery23 = true;
            $scope.bookDiscovery33 = true;
            $scope.bookDiscovery43 = true;
            $scope.bookDiscovery53 = true;
            $scope.bookDiscovery38 = true;
            $scope.bookDiscovery48 = true;
            $scope.bookDiscovery58 = true;
            
            $scope.currentHour = $window.localStorage.getItem('currentHour')
            $scope.currentDate = $window.localStorage.getItem('currentDate')


            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                console.log(data)

                $scope.globalDateInformation = data.data.date;

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.currentHour == "nine") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                


                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.currentHour == "nine") {
                        //$location.path("/datepage/discovery");


                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                


            })

        

        $scope.openBookingPage = function (slot) {

            $scope.dateCondensed = $window.localStorage.getItem('dateCondensed')
            
            $window.location.href = "/schedule/"+$scope.dateCondensed+"/checkup";

        }

      
    
    })

}());