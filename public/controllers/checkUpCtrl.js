(function () {

    var app = angular.module('checkUpController', ['authServices','userServices'])

    app.config(function () {

            console.log("checkUp Controller Loaded...")

    })

    app.controller('checkUpCtrl', function ($scope, Auth, User, $timeout, $location, $rootScope,$window) {




            $scope.currentHour = $window.localStorage.getItem('currentHour')


            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                console.log(data)

                $scope.globalDateInformation = data.data.date;


                if ($scope.appointmentType == "discovery") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                }
                if ($scope.appointmentType == "discovery") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.hour == "nine") {
                        $location.path("/datepage/discovery");


                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                }


                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.currentHour == "nine") {

                        $location.path("/datepage/checkup");

                        
                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookCheckUp29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.hour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }
                        

                    }

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.currentHour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookCheckUp29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.hour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                
                if ($scope.appointmentType == "session") { 


                    if ($scope.currentHour == "eight") {

                        $location.path("/datepage/session/eight");


                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
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

                        $location.path("/datepage/session/nine");


                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.hour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }
                if ($scope.appointmentType == "session") { 


                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
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

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.hour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }

            })

        

        $scope.openBookingPage = function (slot) {

            $scope.dateCondensed = $window.localStorage.getItem('dateCondensed')
            
            $window.location.href = "/schedule/"+$scope.dateCondensed+"/checkup";

        }

      
    
    })

}());