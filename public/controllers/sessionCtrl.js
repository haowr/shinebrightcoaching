(function () {

    var app = angular.module('sessionController', ['authServices','userServices'])

    app.config(function () {

            console.log("session Controller Loaded...")

    })

    app.controller('sessionCtrl', function ($scope, User, $window) {


        $scope.bookSession8 = true
        $scope.bookSession9 = true;
        $scope.bookSession18 = true;
        $scope.bookSession19 = true;
        $scope.bookSession28 = true;
        $scope.bookSession29 = true;
        $scope.bookSession39 = true;
        $scope.bookSession49 = true;
        $scope.bookSession59 = true;
        $scope.bookSession10 = true;
        $scope.bookSession110 = true;
        $scope.bookSession210 = true;
        $scope.bookSession310 = true;
        $scope.bookSession410 = true;
        $scope.bookSession510 = true;
        $scope.bookSession11 = true;
        $scope.bookSession111 = true;
        $scope.bookSession211 = true;
        $scope.bookSession311 = true;
        $scope.bookSession411 = true;
        $scope.bookSession511 = true;
        $scope.bookSession12 = true;
        $scope.bookSession112 = true;
        $scope.bookSession212 = true;
        $scope.bookSession312 = true;
        $scope.bookSession412 = true;
        $scope.bookSession512 = true;
        $scope.bookSession1 = true;
        $scope.bookSession11 = true;
        $scope.bookSession21 = true;
        $scope.bookSession31 = true;
        $scope.bookSession41 = true;
        $scope.bookSession51 = true;
        $scope.bookSession2 = true;
        $scope.bookSession12 = true;
        $scope.bookSession22 = true;
        $scope.bookSession32 = true;
        $scope.bookSession42 = true;
        $scope.bookSession52 = true;
        $scope.bookSession3 = true;
        $scope.bookSession13 = true;
        $scope.bookSession23 = true;
        $scope.bookSession33 = true;
        $scope.bookSession43 = true;
        $scope.bookSession53 = true;
        $scope.bookSession38 = true;
        $scope.bookSession48 = true;
        $scope.bookSession58 = true;

            $scope.currentHour = $window.localStorage.getItem('currentHour')
            $scope.currentDate = $window.localStorage.getItem('currentDate')

            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                console.log(data)

                $scope.globalDateInformation = data.data.date;

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 &&
                            $scope.globalDateInformation['nine'].state[3]      == 0 &&
                            $scope.globalDateInformation['nine'].state[4]      == 0 ) {

                                $scope.bookSession58 = true;

                        }

                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;

                        }
                    }

                    if ($scope.currentHour == "nine") {

                       // $location.path("/datepage/session/nine");
                        console.log('OY')

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.currentHour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 &&
                            $scope.globalDateInformation['nine'].state[3]      == 0 &&
                            $scope.globalDateInformation['nine'].state[4]      == 0 ) {

                                $scope.bookSession58 = true;

                        }

                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;

                        }
                    }

                    if ($scope.currentHour == "nine") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.currentHour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }


            })

        

        $scope.openBookingPage = function (slot) {

            $scope.dateCondensed = $window.localStorage.getItem('dateCondensed')
            
            $window.location.href = "/schedule/"+$scope.dateCondensed+"/checkup";

        }

      
    
    })

}());