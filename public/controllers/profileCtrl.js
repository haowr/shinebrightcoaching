(function () {


    var app = angular.module('profileController', ['userServices'])

    app.config(function () {


    })

    app.controller('profileCtrl', function ($scope, $routeParams, $timeout, $window, $rootScope, User) {

        $scope.idFromLocalStorage = $window.localStorage.getItem('_id')

        $scope.bookingInfo = {

            id: $scope.idFromLocalStorage

        }

        User.getUser($scope.idFromLocalStorage).then(function (data) {


            $scope.clientName           = data.data.user.name
            $scope.clientEmail          = data.data.user.email
            $scope.clientPhone          = data.data.user.phonenumber
            $scope.personalCalender     = data.data.user.calender
            $scope.bookings             = data.data.user.bookings
            $scope.messageArray         = data.data.user.messages
            $scope.allBookingsArray     = []
            $scope.currentUserBookingsArray = data.data.user.bookings
            console.log("Current User Bookings Array")
            console.log($scope.currentUserBookingsArray)
            $scope.currentBooking       = data.data.user.bookings.length - 1
            console.log("Current Booking")
            console.log($scope.currentBooking)
            $rootScope.createWellness   = data.data.user.wellness
            $scope.userType             = data.data.user.userclass
            $scope.randomNumber         = (Math.random() * 4)
            $scope.entrance1            = false;
            $scope.entrance2            = false;
            $scope.pendingBookings      = true;
            $scope.amountPending        = 0;
        

            User.getUsers().then(function (data) {

                console.log(data.data.users)
                for (var i = 0; i < data.data.users.length; i++) {

                    for (var k = 0; k < data.data.users[i].bookings.length; k++) {

                        $scope.allBookingsArray.push(data.data.users[i].bookings[k])

                        if (!data.data.users[i].bookings[k].completed) {
                            $scope.pendingBookings = true;
                            $scope.amountPending++

                        }
                    }
                }

            })
            
            if ($scope.userType == 'admin') {

                $scope.heyLeah = true;

                if ($scope.randomNumber == 1) {

                    $scope.entrance1 = true;

                }
                else if ($scope.randomNumber == 2) {

                    $scope.entrance2 = true;

                }
                else if ($scope.randomNumber == 3) {

                    $scope.entrance3 = true;

                }
                else {

                    $scope.heyLeah = false;

                }



            } else {
                //SET BOOKED STAR ICONS //

                ////console.log("SET BOOKED STAR ICONS")
                ////console.log(data.data.user.calender[$scope.month])
                if (data.data.user.calender[$scope.month][1]) {
                    $scope.booked121 = true;
                    ////console.log("hero")
                }
                if (data.data.user.calender[$scope.month][2]) {
                    $scope.booked122 = true;
                    ////console.log("hero")
                }
                if (data.data.user.calender[$scope.month][3]) {
                    $scope.booked123 = true;
                    ////console.log("hero")
                }
                if (data.data.user.calender[$scope.month][4]) {
                    $scope.booked124 = true;
                    ////console.log("hero")
                }
                if (data.data.user.calender[$scope.month][5]) {
                    $scope.booked125 = true;
                    ////console.log("hero")
                }
                if (data.data.user.calender[$scope.month][6]) {
                    $scope.booked126 = true;
                    ////console.log("hero")
                }
                if (data.data.user.calender[$scope.month][7]) {
                    $scope.booked127 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][8]) {
                    $scope.booked128 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][9]) {
                    $scope.booked129 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][10]) {
                    $scope.booked1210 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][11]) {
                    $scope.booked1211 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][12]) {
                    $scope.booked1212 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][13]) {
                    $scope.booked1213 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][14]) {
                    $scope.booked1214 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][15]) {
                    $scope.booked1215 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][16]) {
                    $scope.booked1216 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][17]) {
                    $scope.booked1217 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][18]) {
                    $scope.booked1218 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][19]) {
                    $scope.booked1219 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][20]) {
                    $scope.booked1220 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][21]) {
                    $scope.booked1221 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][22]) {
                    $scope.booked1222 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][23]) {
                    $scope.booked1223 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][24]) {
                    $scope.booked1224 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][25]) {
                    $scope.booked1225 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][26]) {
                    $scope.booked1226 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][27]) {
                    $scope.booked1227 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][28]) {
                    $scope.booked1228 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][29]) {
                    $scope.booked1229 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][30]) {
                    $scope.booked1230 = true;
                    //console.log("hero")
                }
                if (data.data.user.calender[$scope.month][31]) {
                    $scope.booked1231 = true;
                    //console.log("hero")
                }
                // SET BOOKED STAR ICONS //
            }

        })
 

        $scope.bookingPageOpen = false;
        $scope.timeData = {}
        $scope.discoveryData = {

        }
        $scope.checkupData = {

        }
        $scope.dateData = {

        }
        $scope.dateDataForUser = {
            date: "",
            time: "",
            id: ""
        }

        $scope.dateDataNextHour = []
        $scope.bookDiscovery5 = true;
        $scope.booked = false;
        $scope.dateCondensed = ""
        $scope.newDateInfo = []
        $scope.bookDiscovery9to10tzero = true;
        $scope.bookDiscovery9to10ten = true;
        $scope.bookDiscovery9to10twenty = true;
        $scope.bookDiscovery9to10thirty = true;
        $scope.hourPlusOne = 0;

        $scope.dateInfo = {
            "eight": {
                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "nine": {

                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "ten": {
                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "eleven": {

                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "twelve": {

                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "one": {
                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "two": {

                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "three": {

                "state": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "date": 1,
            "month": "October",
            "name": "October 1",
            "__v": 1,
            "7": [],
            "8": [],
            "fifty": [],
            "fourty": [],
            "thirty": [],
            "twenty": []


        }
 
        $scope.selectMessageMenu = function () {
            if (!$scope.messageMenuSelected) {
                //$scope.messagePageOpen = true;
                $scope.messagePageSelected = true;
                //$scope.fadeOutMenu = true;
                //$scope.schedulePageOpen = false;
                //$scope.timesheetPageOpen = false;
                //     $scope.infoPageOpen = false;
                //$timeout(function(){
                $scope.messageMenuSelected = true;
                //},200)

            } else {
                $scope.messageMenuSelected = false;

            }
        }
        $scope.messageObject                = {
            id: "5bff0b83ccf498187c715bd3",
            from: $scope.clientName,
            to: "Leah Kelly",
            subject: "",
            read: false,
            body:""
        }
        $scope.closeBookingPage = function () {
            $scope.slot = null;
            $scope.bookingPageOpen = false;
            $scope.scheduledJobPageOpen = true;
            $scope.bookeCheckup = true;
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
            $scope.bookSession102 = true;
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

            $scope.bookCheckUp8 = true
            $scope.bookCheckUp9 = true;
            $scope.bookCheckUp18 = true;
            $scope.bookCheckUp19 = true;
            $scope.bookCheckUp28 = true;
            $scope.bookCheckUp29 = true;
            $scope.bookCheckUp39 = true;
            $scope.bookCheckUp49 = true;
            $scope.bookCheckUp59 = true;
            $scope.bookCheckUp10 = true;
            $scope.bookCheckUp110 = true;
            $scope.bookCheckUp210 = true;
            $scope.bookCheckUp310 = true;
            $scope.bookCheckUp410 = true;
            $scope.bookCheckUp510 = true;
            $scope.bookCheckUp11 = true;
            $scope.bookCheckUp111 = true;
            $scope.bookCheckUp211 = true;
            $scope.bookCheckUp311 = true;
            $scope.bookCheckUp411 = true;
            $scope.bookCheckUp511 = true;
            $scope.bookCheckUp12 = true;
            $scope.bookCheckUp112 = true;
            $scope.bookCheckUp212 = true;
            $scope.bookCheckUp312 = true;
            $scope.bookCheckUp412 = true;
            $scope.bookCheckUp512 = true;
            $scope.bookCheckUp1 = true;
            $scope.bookCheckUp101 = true;
            $scope.bookCheckUp21 = true;
            $scope.bookCheckUp31 = true;
            $scope.bookCheckUp41 = true;
            $scope.bookCheckUp51 = true;
            $scope.bookCheckUp2 = true;
            $scope.bookCheckUp12 = true;
            $scope.bookCheckUp22 = true;
            $scope.bookCheckUp32 = true;
            $scope.bookCheckUp42 = true;
            $scope.bookCheckUp52 = true;
            $scope.bookCheckUp3 = true;
            $scope.bookCheckUp13 = true;
            $scope.bookCheckUp23 = true;
            $scope.bookCheckUp33 = true;
            $scope.bookCheckUp43 = true;
            $scope.bookCheckUp53 = true;
            $scope.bookCheckUp38 = true;
            $scope.bookCheckUp48 = true;
            $scope.bookCheckUp58 = true;
            User.getDate($scope.id).then(function (data) {
                //console.log(data)
                $scope.dateInfo = data.data.date


                if (data.data.date['eight'].checkup.reduce($scope.reducer) == 0) {
                    $scope.checkUpFullyAvailable = true;
                }
                if (data.data.date['eight'].discovery.reduce($scope.reducer) == 0) {
                    $scope.discoveryFullyAvailable = true;

                }
                //AVAILABILITY ICON LOGIC//
                'eight'


                if (data.data.date['eight'].state[0] == 1 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1
                    && data.data.date['eight'].state[4] == 1 && data.data.date['eight'].state[5] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;
                    //console.log(820)


                }



                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 1 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = true;
                    //console.log(820)


                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAvailable8 = true;
                    $scope.discoveryAvailable8 = true;
                    //console.log(820)

                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkupAvailable8 = true;
                    //console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    //console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAlmostFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    //console.log(820)

                }

                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    //$scope.sessionFull1 = true;
                    //$scope.discoveryAlmostFull1 = true;
                    //$scope.checkUpAlmostFull1 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 1) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;

                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 1
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 1 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionAlmostFull8 = true;
                    //console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 - true;
                    $scope.sessionFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 - true;
                    $scope.sessionFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAvailable8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAvailable8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionFull8 = true;
                    //console.log(820)


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {

                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionFull8 = true;
                    //console.log(820)


                }


                'eight'


                'nine'


                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    //console.log(820)

                }

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkupAvailable9 = true;
                    //console.log(820)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    //console.log(820)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAlmostFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 1) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;

                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 1
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 - true;
                    $scope.sessionFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 - true;
                    $scope.sessionFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionFull9 = true;
                    //console.log(820)


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log(820)


                }

                'nine'


                // REACHING INTO NEXT TIME HOUR //


                if (data.data.date['eight'].state[5] == 0 || data.data.date['eight'].state[5] == 1 || data.data.date['eight'].state[5] == 2 || data.data.date['eight'].state[5] == 3) {


                    $scope.sessionFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpFull8 = false;


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;


                    //console.log("new nine")


                    // NEW EIGHT //
                    if (data.data.date['eight'].state[5] == 2) {
                        //$scope.bookSession53 = false;
                        // $scope.bookDiscovery53 = false;
                        //console.log("TIME TOGGLER")




                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable8 = false;
                            //console.log("new eight")


                        }


                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }





                    }
                    if (data.data.date['eight'].state[5] == 3) {
                        $scope.bookSession53 = false;
                        $scope.bookDiscovery53 = false;
                        //console.log("TIME TOGGLER")
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")
                            // $scope.hourAvailable3 = false;


                        }

                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable1 = false;
                            //console.log("new eight new new")


                        }


                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable1 = false;
                            //console.log("new eight new new")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = true;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }


                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")
                            $scope.hourAvailable3 = false;


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;


                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }

                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }

                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }

                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }

                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable8 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")
                            //console.log($scope.hourAvailable3)


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        //also add 22200
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("newest eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("newest eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("newest eight")


                        }
                    }
                    if (data.data.date['eight'].state[5] == 0) {
                        $scope.bookSession53 = false;
                        $scope.bookDiscovery53 = false;
                        //console.log("TIME TOGGLER")
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable1 = false;
                            //console.log("new eight new new")


                        }


                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable1 = false;
                            //console.log("new eight new new")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = true;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = false;
                            $scope.sessionAvailable8 = true;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }

                        if (data.data.date['eight'].state[0] == 1 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }

                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")
                            // here


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")
                            $scope.hourAvailable3 = false;


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;


                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 1) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;


                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false;
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = true
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = true;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 0) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            //console.log("new eight")
                            //console.log($scope.hourAvailable3)


                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = true;
                            $scope.checkUpAlmostFull8 = false;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("new eight")


                        }
                        //also add 22200
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("newest eight")


                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                            $scope.discoveryFull8 = true;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = false;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("newest eight")


                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                            $scope.discoveryFull8 = false;
                            $scope.discoveryAvailable8 = false
                            $scope.discoveryAlmostFull8 = true;

                            $scope.checkUpAvailable8 = false;
                            $scope.checkUpFull8 = false;
                            $scope.checkUpAlmostFull8 = true;

                            $scope.sessionFull8 = true;
                            $scope.sessionAvailable8 = false;
                            $scope.sessionAlmostFull8 = false;

                            $scope.hourAvailable3 = false;
                            //console.log("newest eight")


                        }
                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable1 = false;
                        //console.log("new eight new new")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = true;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = true;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }

                    if (data.data.date['eight'].state[0] == 1 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = true;

                        $scope.checkUpAvailable8 = true;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")
                        $scope.hourAvailable8 = false;


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;


                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = true;

                        $scope.checkUpAvailable8 = true;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = true;

                        $scope.checkUpAvailable8 = true;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 1) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;


                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0 && data.data.date['eight'].state[4] == 0) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = true
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = true;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 0) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false
                        $scope.discoveryAlmostFull8 = true;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = true;

                        //console.log("new eight")


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 0) {

                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false
                        $scope.discoveryAlmostFull8 = true;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = true;

                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = true;

                        //console.log("new eight")
                        //console.log($scope.hourAvailable8)


                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 3) {

                        $scope.discoveryFull8 = true;
                        $scope.discoveryAvailable8 = false
                        $scope.discoveryAlmostFull8 = false;

                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = true;
                        $scope.checkUpAlmostFull8 = false;

                        $scope.sessionFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        $scope.hourAvailable8 = false;
                        //console.log("new eight")


                    }


                }



                if (data.data.date['nine'].state[5] == 0 || data.data.date['nine'].state[5] == 1 || data.data.date['nine'].state[5] == 2 || data.data.date['nine'].state[5] == 3) {


                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.checkUpFull9 = false;


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;







                }

                // NEW EIGHT //

                // NEW EIGHT //
                //EIGHT//

                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                    $scope.discoveryFull8 = true;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;

                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAlmostFull8 = true;

                    $scope.sessionFull8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;

                    //console.log("new eight")


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 1 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 1 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    //$scope.discoveryFull8 = true;
                    //$scope.checkUpFull8 = true;
                    //$scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 1 && data.data.date['eight'].state[4] == 1) {



                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 1) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3 && data.data.date['eight'].state[4] == 3) {

                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 2 && data.data.date['eight'].state[4] == 2) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionFull8 = true;


                    //$scope.checkUpAlmostFull9 = true;
                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")



                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")



                }

                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 0) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 0) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 3) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 2) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;


                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.checkUpAvailable9 = true;
                    //$scope.sessionFull9 = true;


                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.checkUpAvailable9 = true;
                    //$scope.sessionFull9 = true;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.checkUpAvailable9 = true;
                    //$scope.sessionFull9 = true;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.checkUpAvailable9 = true;
                    //$scope.sessionFull9 = true;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;


                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                } if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    //$scope.discoveryAlmostFull9 = true;
                    //$scope.checkUpAvailable9 = true;
                    //$scope.sessionFull9 = true;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;


                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailables9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailables9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                //
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")




                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;



                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }



                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 0) {

                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionFull9 = false;

                    $scope.sessionFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpFull8 = false;


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 3) {

                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;

                    $scope.checkUpFull9 = false;
                    $scope.checkupAlmostFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;

                    $scope.sessionFull9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 2) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 1 && data.data.date['nine'].state[0] == 1 && data.data.date['nine'].state[1] == 1 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {

                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;


                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 1 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;

                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 1 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 1 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.sessionAvailable9 = true;
                    //console.log("eight reaching into next hour")


                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }


                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;

                    $scope.sessionFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpFull8 = false;


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;

                    $scope.checkUpAlmostFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 1) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;



                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2 && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }
                if (data.data.date['eight'].state[5] == 2 && data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0 && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 2) {


                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;

                    $scope.checkUpAvailable9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.sessionFull9 = true;
                    //console.log("eight reaching into next hour")


                }

                // NINE //


                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 0) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 3) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 2) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }



                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAvailable10 = true;
                    $scope.sessionAvailable10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }

                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAvailable10 = true;
                    $scope.sessionAvailable10 = true;
                    //console.log("nine reaching into next hour")


                }


                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }


                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }

                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;
                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }


                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }



                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 0) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 3) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 2) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 1 && data.data.date['ten'].state[0] == 1 && data.data.date['ten'].state[1] == 1 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {

                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;


                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }

                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 1 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.checkUpAvailable10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.discoveryAvailable10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 1 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 1 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAvailable10 = true;
                    $scope.sessionAvailable10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }

                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;
                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAvailable10 = true;
                    $scope.sessionAvailable10 = true;
                    //console.log("nine reaching into next hour")


                }


                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 0 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }


                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }

                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 3 && data.data.date['ten'].state[3] == 3 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }


                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 0) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAlmostFull10 = true;
                    $scope.discoveryAlmostFull10 = true;
                    $scope.sessionAlmostFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 1) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 2 && data.data.date['ten'].state[3] == 2 && data.data.date['ten'].state[4] == 2 && data.data.date['ten'].state[5] == 3) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpFull10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }
                if (data.data.date['nine'].state[5] == 2 && data.data.date['ten'].state[0] == 2 && data.data.date['ten'].state[1] == 2 && data.data.date['ten'].state[2] == 0 && data.data.date['ten'].state[3] == 0 && data.data.date['ten'].state[4] == 3 && data.data.date['ten'].state[5] == 2) {


                    $scope.checkUpAlmostFull10 = false;
                    $scope.checkUpFull10 = false;
                    $scope.discoveryFull10 = false;
                    $scope.discoveryAlmostFull10 = false;
                    $scope.sessionAlmostFull10 = false;
                    $scope.sessionFull10 = false;
                    $scope.sessionAvailable10 = false;
                    $scope.discoveryAvailabl10 = false;
                    $scope.checkUpAvailable10 = false;

                    $scope.checkUpAvailable10 = true;
                    $scope.discoveryFull10 = true;
                    $scope.sessionFull10 = true;
                    //console.log("nine reaching into next hour")


                }


                // TEN //


                if (data.data.date['ten'].state[5] == 1 && data.data.date['eleven'].state[0] == 1 && data.data.date['eleven'].state[1] == 1 && data.data.date['eleven'].state[2] == 1 && data.data.date['eleven'].state[3] == 1 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 0) {

                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;


                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionAlmostFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 1 && data.data.date['eleven'].state[0] == 1 && data.data.date['eleven'].state[1] == 1 && data.data.date['eleven'].state[2] == 1 && data.data.date['eleven'].state[3] == 1 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 3) {

                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;


                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 1 && data.data.date['eleven'].state[0] == 1 && data.data.date['eleven'].state[1] == 1 && data.data.date['eleven'].state[2] == 1 && data.data.date['eleven'].state[3] == 1 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 2) {

                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;



                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 1 && data.data.date['eleven'].state[0] == 1 && data.data.date['eleven'].state[1] == 1 && data.data.date['eleven'].state[2] == 1 && data.data.date['eleven'].state[3] == 1 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 1) {

                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;


                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }

                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 0 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 3 && data.data.date['eleven'].state[5] == 2) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 1 && data.data.date['eleven'].state[3] == 1 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 0 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.discoveryAvailable11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.sessionAvailable11 = false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 1 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 1 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 0 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 0) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAvailable11 = true;
                    $scope.sessionAvailable11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 0 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 0 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 2) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 0 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 3) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }

                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 2) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 3) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 0 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 0) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAvailable11 = true;
                    $scope.sessionAvailable11 = true;
                    //console.log("ten reaching into next hour")


                }


                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 0) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionAlmostFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 2) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 0 && data.data.date['eleven'].state[5] == 3) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAvailable11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionAlmostFull11 = true;
                    //console.log("ten reaching into next hour")


                }


                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 3 && data.data.date['eleven'].state[5] == 0) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionAlmostFull11 = true;
                    //console.log("ten reaching into next hour")


                }

                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 3 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 3 && data.data.date['eleven'].state[5] == 2) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 3 && data.data.date['eleven'].state[3] == 3 && data.data.date['eleven'].state[4] == 3 && data.data.date['eleven'].state[5] == 3) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }


                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 2 && data.data.date['eleven'].state[3] == 2 && data.data.date['eleven'].state[4] == 2 && data.data.date['eleven'].state[5] == 0) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpAlmostFull11 = true;
                    $scope.discoveryAlmostFull11 = true;
                    $scope.sessionAlmostFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 2 && data.data.date['eleven'].state[3] == 2 && data.data.date['eleven'].state[4] == 2 && data.data.date['eleven'].state[5] == 1) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 2 && data.data.date['eleven'].state[3] == 2 && data.data.date['eleven'].state[4] == 2 && data.data.date['eleven'].state[5] == 2) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }
                if (data.data.date['ten'].state[5] == 2 && data.data.date['eleven'].state[0] == 2 && data.data.date['eleven'].state[1] == 2 && data.data.date['eleven'].state[2] == 2 && data.data.date['eleven'].state[3] == 2 && data.data.date['eleven'].state[4] == 2 && data.data.date['eleven'].state[5] == 3) {


                    $scope.checkUpAlmostFull11 = false;
                    $scope.checkUpFull11 = false;
                    $scope.discoveryFull11 = false;
                    $scope.discoveryAlmostFull11 = false;
                    $scope.sessionAlmostFull11 = false;
                    $scope.sessionFull11 = false;
                    $scope.checkUpAvailable11 = false;
                    $scope.sessionAvailable11 = false
                    $scope.discoveryAvailable11 - false;

                    $scope.checkUpFull11 = true;
                    $scope.discoveryFull11 = true;
                    $scope.sessionFull11 = true;
                    //console.log("ten reaching into next hour")


                }

                // ELEVEN //


                if (data.data.date['eleven'].state[5] == 1 && data.data.date['twelve'].state[0] == 1 && data.data.date['twelve'].state[1] == 1 && data.data.date['twelve'].state[2] == 1 && data.data.date['twelve'].state[3] == 1 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 0) {

                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionAlmostFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 1 && data.data.date['twelve'].state[0] == 1 && data.data.date['twelve'].state[1] == 1 && data.data.date['twelve'].state[2] == 1 && data.data.date['twelve'].state[3] == 1 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 3) {

                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;


                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 1 && data.data.date['twelve'].state[0] == 1 && data.data.date['twelve'].state[1] == 1 && data.data.date['twelve'].state[2] == 1 && data.data.date['twelve'].state[3] == 1 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 2) {

                    $scope.discoveryAlmostFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;
                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.sessionFull12 = false;



                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 1 && data.data.date['twelve'].state[0] == 1 && data.data.date['twelve'].state[1] == 1 && data.data.date['twelve'].state[2] == 1 && data.data.date['twelve'].state[3] == 1 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 1) {

                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;


                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }

                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 0 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 3 && data.data.date['twelve'].state[5] == 2) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 1 && data.data.date['twelve'].state[3] == 1 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 0 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.checkUpAvailable12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 1 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 1 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 0 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 0) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAvailable12 = true;
                    $scope.sessionAvailable12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 0 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 0 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 2) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 0 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 3) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }

                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 2) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 3) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 0 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 0) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAvailable12 = true;
                    $scope.sessionAvailable12 = true;
                    //console.log("eleven reaching into next hour")


                }


                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 0) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionAlmostFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 2) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 0 && data.data.date['twelve'].state[5] == 3) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAvailable12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionAlmostFull12 = true;
                    //console.log("eleven reaching into next hour")


                }


                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 3 && data.data.date['twelve'].state[5] == 0) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionAlmostFull12 = true;
                    //console.log("eleven reaching into next hour")


                }

                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 3 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 3 && data.data.date['twelve'].state[5] == 2) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 3 && data.data.date['twelve'].state[3] == 3 && data.data.date['twelve'].state[4] == 3 && data.data.date['twelve'].state[5] == 3) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }


                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 2 && data.data.date['twelve'].state[3] == 2 && data.data.date['twelve'].state[4] == 2 && data.data.date['twelve'].state[5] == 0) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpAlmostFull12 = true;
                    $scope.discoveryAlmostFull12 = true;
                    $scope.sessionAlmostFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 2 && data.data.date['twelve'].state[3] == 2 && data.data.date['twelve'].state[4] == 2 && data.data.date['twelve'].state[5] == 1) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 2 && data.data.date['twelve'].state[3] == 2 && data.data.date['twelve'].state[4] == 2 && data.data.date['twelve'].state[5] == 2) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }
                if (data.data.date['eleven'].state[5] == 2 && data.data.date['twelve'].state[0] == 2 && data.data.date['twelve'].state[1] == 2 && data.data.date['twelve'].state[2] == 2 && data.data.date['twelve'].state[3] == 2 && data.data.date['twelve'].state[4] == 2 && data.data.date['twelve'].state[5] == 3) {


                    $scope.checkUpAlmostFull12 = false;
                    $scope.checkUpFull12 = false;
                    $scope.discoveryFull12 = false;
                    $scope.discoveryAlmostFull12 = false;
                    $scope.sessionAlmostFull12 = false;
                    $scope.sessionFull12 = false;
                    $scope.sessionAvailable12 = false;
                    $scope.discoveryAvailable12 = false;
                    $scope.checkUpAvailable12 = false;

                    $scope.checkUpFull12 = true;
                    $scope.discoveryFull12 = true;
                    $scope.sessionFull12 = true;
                    //console.log("eleven reaching into next hour")


                }

                // TWELVE //


                if (data.data.date['twelve'].state[5] == 1 && data.data.date['one'].state[0] == 1 && data.data.date['one'].state[1] == 1 && data.data.date['one'].state[2] == 1 && data.data.date['one'].state[3] == 1 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 0) {

                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;


                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionAlmostFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 1 && data.data.date['one'].state[0] == 1 && data.data.date['one'].state[1] == 1 && data.data.date['one'].state[2] == 1 && data.data.date['one'].state[3] == 1 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 3) {

                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;


                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 1 && data.data.date['one'].state[0] == 1 && data.data.date['one'].state[1] == 1 && data.data.date['one'].state[2] == 1 && data.data.date['one'].state[3] == 1 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 2) {

                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;


                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 1 && data.data.date['one'].state[0] == 1 && data.data.date['one'].state[1] == 1 && data.data.date['one'].state[2] == 1 && data.data.date['one'].state[3] == 1 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 1) {

                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;


                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 0 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 3 && data.data.date['one'].state[5] == 2) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;


                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 1 && data.data.date['one'].state[3] == 1 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 0 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.checkUpAvailable1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 1 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 1 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 0 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 0) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAvailable1 = true;
                    $scope.sessionAvailable1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 0 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 0 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 2) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 0 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 3) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }

                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 2) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 3) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 0 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 0) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAvailable1 = true;
                    $scope.sessionAvailable1 = true;
                    //console.log("twelve reaching into next hour")


                }


                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 0) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionAlmostFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 2) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 0 && data.data.date['one'].state[5] == 3) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAvailable1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionAlmostFull1 = true;
                    //console.log("twelve reaching into next hour")


                }


                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 3 && data.data.date['one'].state[5] == 0) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionAlmostFull1 = true;
                    //console.log("twelve reaching into next hour")


                }

                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 3 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 3 && data.data.date['one'].state[5] == 2) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 3 && data.data.date['one'].state[3] == 3 && data.data.date['one'].state[4] == 3 && data.data.date['one'].state[5] == 3) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }


                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 2 && data.data.date['one'].state[3] == 2 && data.data.date['one'].state[4] == 2 && data.data.date['one'].state[5] == 0) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpAlmostFull1 = true;
                    $scope.discoveryAlmostFull1 = true;
                    $scope.sessionAlmostFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 2 && data.data.date['one'].state[3] == 2 && data.data.date['one'].state[4] == 2 && data.data.date['one'].state[5] == 1) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.checkUpAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 2 && data.data.date['one'].state[3] == 2 && data.data.date['one'].state[4] == 2 && data.data.date['one'].state[5] == 2) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.checkUpAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['twelve'].state[5] == 2 && data.data.date['one'].state[0] == 2 && data.data.date['one'].state[1] == 2 && data.data.date['one'].state[2] == 2 && data.data.date['one'].state[3] == 2 && data.data.date['one'].state[4] == 2 && data.data.date['one'].state[5] == 3) {


                    $scope.checkUpAlmostFull1 = false;
                    $scope.checkUpFull1 = false;
                    $scope.checkUpAvailable1 = false;
                    $scope.discoveryAvailable1 = false;
                    $scope.discoveryFull1 = false;
                    $scope.discoveryAlmostFull1 = false;
                    $scope.sessionAlmostFull1 = false;
                    $scope.sessionFull1 = false;
                    $scope.sessionAvailable1 = false;

                    $scope.checkUpFull1 = true;
                    $scope.discoveryFull1 = true;
                    $scope.sessionFull1 = true;
                    //console.log("twelve reaching into next hour")


                }



                // ONE //


                if (data.data.date['one'].state[5] == 1 && data.data.date['two'].state[0] == 1 && data.data.date['two'].state[1] == 1 && data.data.date['two'].state[2] == 1 && data.data.date['two'].state[3] == 1 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 0) {

                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;


                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionAlmostFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 1 && data.data.date['two'].state[0] == 1 && data.data.date['two'].state[1] == 1 && data.data.date['two'].state[2] == 1 && data.data.date['two'].state[3] == 1 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 3) {

                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;


                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 1 && data.data.date['two'].state[0] == 1 && data.data.date['two'].state[1] == 1 && data.data.date['two'].state[2] == 1 && data.data.date['two'].state[3] == 1 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 2) {

                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;


                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 1 && data.data.date['two'].state[0] == 1 && data.data.date['two'].state[1] == 1 && data.data.date['two'].state[2] == 1 && data.data.date['two'].state[3] == 1 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 1) {

                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;;


                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }

                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 0 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 3 && data.data.date['two'].state[5] == 2) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 0 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 1 && data.data.date['two'].state[3] == 1 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 1 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 1 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 0 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 0) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAvailable2 = true;
                    $scope.sessionAvailable2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 0 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 0 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 2) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 0 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 3) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }

                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull3 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 2) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull3 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 3) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull3 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 0 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 0) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAvailable2 = true;
                    $scope.sessionAvailable2 = true;
                    //console.log("one reaching into next hour")


                }


                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 0) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionAlmostFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 2) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 0 && data.data.date['two'].state[5] == 3) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionAlmostFull2 = true;
                    //console.log("one reaching into next hour")


                }


                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 3 && data.data.date['two'].state[5] == 0) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionAlmostFull2 = true;
                    //console.log("one reaching into next hour")


                }

                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 3 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 3 && data.data.date['two'].state[5] == 2) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 3 && data.data.date['two'].state[3] == 3 && data.data.date['two'].state[4] == 3 && data.data.date['two'].state[5] == 3) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }


                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 2 && data.data.date['two'].state[3] == 2 && data.data.date['two'].state[4] == 2 && data.data.date['two'].state[5] == 0) {

                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpAlmostFull2 = true;
                    $scope.discoveryAlmostFull2 = true;
                    $scope.sessionAlmostFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 2 && data.data.date['two'].state[3] == 2 && data.data.date['two'].state[4] == 2 && data.data.date['two'].state[5] == 1) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 2 && data.data.date['two'].state[3] == 2 && data.data.date['two'].state[4] == 2 && data.data.date['two'].state[5] == 2) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }
                if (data.data.date['one'].state[5] == 2 && data.data.date['two'].state[0] == 2 && data.data.date['two'].state[1] == 2 && data.data.date['two'].state[2] == 2 && data.data.date['two'].state[3] == 2 && data.data.date['two'].state[4] == 2 && data.data.date['two'].state[5] == 3) {


                    $scope.discoveryAlmostFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAvailable2 = false;
                    $scope.checkUpAvailable2 = false;
                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.sessionFull2 = false;
                    $scope.sessionAvailable2 = false;
                    $scope.sessionAlmostFull2 = false;

                    $scope.checkUpFull2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("one reaching into next hour")


                }

                // ONE //

                // TWO//

                if (data.data.date['two'].state[5] == 1 && data.data.date['three'].state[0] == 1 && data.data.date['three'].state[1] == 1 && data.data.date['three'].state[2] == 1 && data.data.date['three'].state[3] == 1 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 0) {

                    $scope.discoveryAlmostFull3 = true;
                    $scope.checkUpAvailable3 = true;
                    $scope.sessionFull3 = true;


                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionAlmostFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 1 && data.data.date['three'].state[0] == 1 && data.data.date['three'].state[1] == 1 && data.data.date['three'].state[2] == 1 && data.data.date['three'].state[3] == 1 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 3) {

                    $scope.discoveryAlmostFull3 = true;
                    $scope.checkUpAvailable3 = true;
                    $scope.sessionFull3 = true;


                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 1 && data.data.date['three'].state[0] == 1 && data.data.date['three'].state[1] == 1 && data.data.date['three'].state[2] == 1 && data.data.date['three'].state[3] == 1 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 2) {

                    $scope.discoveryAlmostFull3 = true;
                    $scope.checkUpAvailable3 = true;
                    $scope.sessionFull3 = true;


                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 1 && data.data.date['three'].state[0] == 1 && data.data.date['three'].state[1] == 1 && data.data.date['three'].state[2] == 1 && data.data.date['three'].state[3] == 1 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 1) {

                    $scope.discoveryAlmostFull3 = true;
                    $scope.checkUpAvailable3 = true;
                    $scope.sessionFull3 = true;


                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }

                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 0 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 3 && data.data.date['three'].state[5] == 2) {


                    $scope.checkUpAlmostFull2 = false;
                    $scope.checkUpFull2 = false;
                    $scope.discoveryFull2 = false;
                    $scope.discoveryAlmostFull2 = false;
                    $scope.sessionAlmostFull2 = false;
                    $scope.sessionFull2 = false;

                    $scope.checkUpAvailable2 = true;
                    $scope.discoveryFull2 = true;
                    $scope.sessionFull2 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 0 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("twelve reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 1 && data.data.date['three'].state[3] == 1 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 1 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 1 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 0 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 0) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAvailable3 = true;
                    $scope.sessionAvailable3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 0 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 0 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 2) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 0 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 3) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }

                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 2) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 3) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 0 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 0) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAvailable3 = true;
                    $scope.sessionAvailable3 = true;
                    //console.log("two reaching into next hour")


                }


                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 0) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionAlmostFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 2) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 0 && data.data.date['three'].state[5] == 3) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAvailable3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionAlmostFull3 = true;
                    //console.log("two reaching into next hour")


                }


                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 3 && data.data.date['three'].state[5] == 0) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionAlmostFull3 = true;
                    //console.log("two reaching into next hour")


                }

                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 3 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 3 && data.data.date['three'].state[5] == 2) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 3 && data.data.date['three'].state[3] == 3 && data.data.date['three'].state[4] == 3 && data.data.date['three'].state[5] == 3) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }


                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 2 && data.data.date['three'].state[3] == 2 && data.data.date['three'].state[4] == 2 && data.data.date['three'].state[5] == 0) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpAlmostFull3 = true;
                    $scope.discoveryAlmostFull3 = true;
                    $scope.sessionAlmostFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 2 && data.data.date['three'].state[3] == 2 && data.data.date['three'].state[4] == 2 && data.data.date['three'].state[5] == 1) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 2 && data.data.date['three'].state[3] == 2 && data.data.date['three'].state[4] == 2 && data.data.date['three'].state[5] == 2) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }
                if (data.data.date['two'].state[5] == 2 && data.data.date['three'].state[0] == 2 && data.data.date['three'].state[1] == 2 && data.data.date['three'].state[2] == 2 && data.data.date['three'].state[3] == 2 && data.data.date['three'].state[4] == 2 && data.data.date['three'].state[5] == 3) {


                    $scope.checkUpAlmostFull3 = false;
                    $scope.checkUpFull3 = false;
                    $scope.discoveryFull3 = false;
                    $scope.discoveryAlmostFull3 = false;
                    $scope.sessionAlmostFull3 = false;
                    $scope.sessionFull3 = false;

                    $scope.checkUpFull3 = true;
                    $scope.discoveryFull3 = true;
                    $scope.sessionFull3 = true;
                    //console.log("two reaching into next hour")


                }

                // 3PM LOGIC //

                // 4PM LOGIC //


                // TIME TOGGLER //

                if (data.data.date['eight'].state[0] == 1 || data.data.date['eight'].state[0] == 2 || data.data.date['eight'].state[0] == 3) {

                    $scope.bookDiscovery8 = false;
                    $scope.bookCheckUp8 = false;
                    $scope.bookSession8 = false;

                }

                if (data.data.date['eight'].state[1] == 1 || data.data.date['eight'].state[1] == 2 || data.data.date['eight'].state[1] == 3) {

                    $scope.bookDiscovery18 = false;
                    $scope.bookCheckUp18 = false;
                    $scope.bookSession1 = false;
                    if (data.data.date['eight'].state[1] == 1) {
                        $scope.bookSession8 = false;
                        //$scope.bookSession8 = false;
                        //$scope.bookCheckUp8 = false;

                    }
                    if (data.data.date['eight'].state[1] == 2) {
                        $scope.bookDiscovery8 = false;
                        //$scope.bookCheckUp8 = false;

                    }

                }

                if (data.data.date['eight'].state[2] == 1 || data.data.date['eight'].state[2] == 2 || data.data.date['eight'].state[2] == 3) {

                    $scope.bookDiscovery28 = false;
                    $scope.bookCheckUp28 = false;
                    $scope.bookSession28 = false;
                    if (data.data.date['eight'].state[2] == 1) {

                        $scope.bookSession8 = false;
                        $scope.bookSession18 = false;
                        $scope.bookDiscovery18 = false
                        $scope.bookDiscovery18 = false;
                        //$scope.bookCheckUp18 = false;
                        //$scope.bookCheckUp8  = false;

                    }
                    if (data.data.date['eight'].state[2] == 2) {
                        $scope.bookDiscovery8 = false;
                        $scope.bookDiscovery18 = false;
                        $scope.bookSession18 = false;
                        $scope.bookSession8 = false;
                        //$scope.bookCheckUp18 = false;
                        //$scope.bookCheckUp8 = false;


                    }

                }


                if (data.data.date['eight'].state[3] == 1 || data.data.date['eight'].state[3] == 2 || data.data.date['eight'].state[3] == 3) {

                    $scope.bookDiscovery38 = false;
                    $scope.bookCheckUp38 = false;
                    $scope.bookSession38 = false;
                    if (data.data.date['eight'].state[3] == 1) {

                        $scope.bookSession8 = false;
                        $scope.bookSession18 = false;
                        $scope.bookSession28 = false;
                        $scope.bookDiscovery28 = false;
                        $scope.bookDiscovery18 = false;

                        //$scope.bookCheckUp28 = false;
                        //$scope.bookCheckUp18 = false;
                        //$scope.bookCheckUp8 = false;



                    }
                    if (data.data.date['eight'].state[3] == 2) {
                        $scope.bookDiscovery18 = false;
                        $scope.bookDiscovery28 = false;
                        $scope.bookSession28 = false
                        $scope.bookSession18 = false;
                        $scope.bookSession8 = false;
                        //$scope.bookCheckUp28 = false;
                        //$scope.bookCheckUp18 = false;

                    }

                    //console.log("shouldn't run", data.data.date['eight'].state[4])

                }

                if (data.data.date['eight'].state[4] == 1 || data.data.date['eight'].state[4] == 2 || data.data.date['eight'].state[4] == 3) {

                    $scope.bookDiscovery48 = false;
                    $scope.bookCheckUp48 = false;
                    $scope.bookSession48 = false;
                    if (data.data.date['eight'].state[4] == 1) {

                        $scope.bookSession8 = false;
                        $scope.bookSession18 = false;
                        $scope.bookSession28 = false;
                        $scope.bookSession38 = false;
                        $scope.bookDiscovery38 = false;
                        $scope.bookDiscovery28 = false;


                        //$scope.bookCheckUp38 = false;
                        //$scope.bookCheckUp28 = false;
                        //$scope.bookCheckUp18 = false;
                        //$scope.bookCheckUp8  = false;

                    }
                    if (data.data.date['eight'].state[4] == 2) {
                        $scope.bookDiscovery38 = false;
                        $scope.bookDiscovery28 = false;
                        $scope.bookSession38 = false;
                        $scope.bookSession28 = false;
                        $scope.bookSession18 = false;
                        $scope.bookSession8 = false;

                        //$scope.bookCheckUp28 = false;
                        //$scope.bookCheckUp38 = false;


                    }

                    //console.log("shouldn't run", data.data.date['eight'].state[4])

                }


                if (data.data.date['eight'].state[5] == 1 || data.data.date['eight'].state[5] == 2 || data.data.date['eight'].state[5] == 3) {

                    $scope.bookDiscovery58 = false;
                    $scope.bookCheckUp58 = false;
                    $scope.bookSession58 = false;
                    if (data.data.date['eight'].state[5] == 1) {

                        $scope.bookSession8 = false;
                        $scope.bookSession18 = false;
                        $scope.bookSession28 = false;
                        $scope.bookSession38 = false;
                        $scope.bookSession48 = false
                        $scope.bookDiscovery48 = false;
                        $scope.booDiscovery38 = false;

                    }
                    if (data.data.date['eight'].state[5] == 2) {
                        $scope.bookDiscovery48 = false;
                        $scope.bookDiscovery38 = false;
                        $scope.bookSession48 = false;
                        $scope.bookSession38 = false;
                        $scope.bookSession28 = false;
                        $scope.bookSession18 = false;
                        $scope.bookSession8 = false;
                        //$scope.bookCheckUp38 = false;
                        //$scope.bookCheckUp38 = false;

                    }


                }

                if (data.data.date['nine'].state[0] == 1 || data.data.date['nine'].state[0] == 2 || data.data.date['nine'].state[0] == 3) {

                    $scope.bookDiscovery9 = false;
                    $scope.bookCheckUp9 = false;
                    $scope.bookSession9 = false;


                }



                if (data.data.date['nine'].state[1] == 1 || data.data.date['nine'].state[1] == 2 || data.data.date['nine'].state[1] == 3) {

                    $scope.bookDiscovery19 = false;
                    $scope.bookCheckUp19 = false;
                    $scope.bookSession19 = false;
                    if (data.data.date['nine'].state[1] == 1) {
                        $scope.bookSession9 = false;
                        $scope.bookDiscovery9 = false;

                        //$scope.bookCheckUp9 = false;
                    }
                    if (data.data.date['nine'].state[1] == 2) {
                        $scope.bookDiscovery9 = false;
                        $scope.bookSession9 = false;

                        //$scope.bookCheckUp9 = false;

                    }

                }

                if (data.data.date['nine'].state[2] == 1 || data.data.date['nine'].state[2] == 2 || data.data.date['nine'].state[2] == 3) {

                    $scope.bookDiscovery29 = false;
                    $scope.bookCheckUp29 = false;
                    $scope.bookSession29 = false;
                    if (data.data.date['nine'].state[2] == 1) {
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp9 = false;
                        $scope.bookDiscovery19 = false;
                        $scope.bookDiscovery9 = false;
                        $scope.bookSession19 = false;
                        //$scope.bookCheckUp9 = false;
                    }
                    if (data.data.date['nine'].state[2] == 2) {
                        $scope.bookDiscovery9 = false;
                        $scope.bookDiscovery19 = false;
                        $scope.bookSession19 = false;
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp9 = false;
                        //$scope.bookCheckUp19 = false;

                    }

                }

                if (data.data.date['nine'].state[3] == 1 || data.data.date['nine'].state[3] == 2 || data.data.date['nine'].state[3] == 3) {

                    $scope.bookDiscovery39 = false;
                    $scope.bookCheckUp39 = false;
                    $scope.bookSession39 = false;
                    if (data.data.date['nine'].state[3] == 1) {
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp9 = false;
                        $scope.bookSession19 = false;
                        //$scope.bookCheckUp19 = false;
                        $scope.bookSession29 = false;
                        $scope.bookDiscovery29 = false;
                        $scope.bookDiscovery19 = false;
                        //$scope.bookCheckUp29 = false;

                    }
                    if (data.data.date['nine'].state[3] == 2) {
                        $scope.bookDiscovery9 = false;
                        $scope.bookDiscovery19 = false;
                        //$scope.bookCheckUp9 = false;
                        //$scope.bookCheckUp19 = false;
                        $scope.bookDiscovery29 = false;
                        $scope.bookSession29 = false;
                        $scope.bookSession19 = false;
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp29 = false;

                    }

                }

                if (data.data.date['nine'].state[4] == 1 || data.data.date['nine'].state[4] == 2 || data.data.date['nine'].state[4] == 3) {

                    $scope.bookDiscovery49 = false;
                    $scope.bookCheckUp49 = false;
                    $scope.bookSession49 = false;
                    if (data.data.date['nine'].state[4] == 1) {
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp9 = false;
                        $scope.bookSession19 = false;
                        //$scope.bookCheckUp19 = false;
                        $scope.bookSession29 = false;
                        //$scope.bookCheckUp29 = false;
                        $scope.bookSession39 = false;
                        $scope.bookDiscovery39 = false
                        $scope.bookDiscovery29 = false;
                        //$scope.bookCheckUp39 = false;

                    }
                    if (data.data.date['nine'].state[4] == 2) {
                        //$scope.bookDiscovery9 = false;
                        //$scope.bookDiscovery19 = false;
                        //$scope.bookCheckUp9 = false;
                        //$scope.bookCheckUp19 = false;
                        $scope.bookDiscovery29 = false;
                        //$scope.bookCheckUp29 = false;
                        $scope.bookDiscovery39 = false;
                        $scope.bookSession39 = false;
                        $scope.bookSession29 = false;
                        $scope.bookSession19 = false;
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp39 = false;

                    }

                }

                if (data.data.date['nine'].state[5] == 1 || data.data.date['nine'].state[5] == 2 || data.data.date['nine'].state[5] == 3) {

                    $scope.bookDiscovery59 = false;
                    $scope.bookCheckUp59 = false;
                    $scope.bookSession59 = false;
                    if (data.data.date['nine'].state[5] == 1) {
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp9 = false;
                        $scope.bookSession19 = false;
                        //$scope.bookCheckUp19 = false;
                        $scope.bookSession29 = false;
                        //$scope.bookCheckUp29 = false;
                        $scope.bookSession39 = false;
                        //$scope.bookCheckUp39 = false;
                        $scope.bookSession49 = false;
                        $scope.bookDiscovery49 = false;
                        $scope.bookDiscovery39 = false;
                        //$scope.bookCheckUp49 = false;

                    }
                    if (data.data.date['nine'].state[5] == 2) {
                        // $scope.bookDiscovery9 = false;
                        //$scope.bookDiscovery19 = false;
                        //$scope.bookCheckUp9 = false;
                        //$scope.bookCheckUp19 = false;
                        //$scope.bookDiscovery29 = false;
                        //$scope.bookCheckUp29 = false;
                        $scope.bookDiscovery39 = false;
                        //$scope.bookCheckUp39 = false;
                        $scope.bookDiscovery49 = false;
                        $scope.bookSession49 = false;
                        $scope.bookSession39 = false;
                        $scope.bookSession29 = false;
                        $scope.bookSession19 = false;
                        $scope.bookSession9 = false;
                        //$scope.bookCheckUp49 = false;

                    }

                }


                if (data.data.date['ten'].state[0] == 1 || data.data.date['ten'].state[0] == 2 || data.data.date['ten'].state[0] == 3) {

                    $scope.bookDiscovery10 = false;
                    $scope.bookSession10 = false;
                    $scope.bookCheckUp10 = false;


                }
                if (data.data.date['ten'].state[1] == 1 || data.data.date['ten'].state[1] == 2 || data.data.date['ten'].state[1] == 3) {


                    $scope.bookDiscovery110 = false;
                    $scope.bookSession110 = false;
                    $scope.bookCheckUp110 = false;
                    if (data.data.date['ten'].state[1] == 1) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookSession10 = false;

                    }
                    if (data.data.date['ten'].state[1] == 2) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookSession10 = false;
                    }


                }

                if (data.data.date['ten'].state[2] == 1 || data.data.date['ten'].state[2] == 2 || data.data.date['ten'].state[2] == 3) {

                    $scope.bookDiscovery210 = false;
                    $scope.bookSession210 = false;
                    $scope.bookCheckUp210 = false;

                    if (data.data.date['ten'].state[2] == 1) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookSession10 = false;
                        //$scope.bookCheckUp110 = false;
                        $scope.bookSession110 = false;
                        $scope.bookDiscovery110 = false;
                        $scope.bookSession10 = false;



                    }
                    if (data.data.date['ten'].state[2] == 2) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookDiscovery10 = false;
                        $scope.bookDiscovery110 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession10 = false;
                        //$scope.bookCheckUp110 = false;
                    }


                }
                if (data.data.date['ten'].state[3] == 1 || data.data.date['ten'].state[3] == 2 || data.data.date['ten'].state[3] == 3) {

                    $scope.bookDiscovery310 = false;
                    $scope.bookSession310 = false;
                    $scope.bookCheckUp310 = false;

                    if (data.data.date['ten'].state[3] == 1) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookSession10 = false;
                        //$scope.bookCheckUp110 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession210 = false;
                        $scope.bookDiscovery210 = false;
                        $scope.bookDiscovery110 = false;
                        //$scope.bookCheckUp210 = false;


                    }
                    if (data.data.date['ten'].state[3] == 2) {

                        //$scope.bookCheckUp10 = false;
                        // $scope.bookDiscovery10 = false;
                        $scope.bookDiscovery110 = false;
                        //$scope.bookCheckUp110 = false;
                        $scope.bookDiscovery210 = false;
                        $scope.bookSession210 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession10 = false;

                        //$scope.bookCheckUp210 = false;
                    }




                }
                if (data.data.date['ten'].state[4] == 1 || data.data.date['ten'].state[4] == 2 || data.data.date['ten'].state[4] == 3) {

                    $scope.bookDiscovery410 = false;
                    $scope.bookSession410 = false;
                    $scope.bookCheckUp410 = false;

                    if (data.data.date['ten'].state[4] == 1) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookSession10 = false;
                        //$scope.bookCheckUp110 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession210 = false;
                        //$scope.bookCheckUp210 = false;
                        $scope.bookSession310 = false;
                        $scope.bookDiscovery310 = false;
                        $scope.bookDisovery210 = false;
                        //$scope.bookCheckUp310 = false;


                    }
                    if (data.data.date['ten'].state[4] == 2) {

                        //$scope.bookCheckUp10 = false;
                        //$scope.bookDiscovery10 = false;
                        //$scope.bookDiscovery110 = false;
                        //$scope.bookCheckUp110 = false;
                        $scope.bookDiscovery210 = false;
                        //$scope.bookCheckUp210 = false;
                        $scope.bookDiscovery310 = false;
                        $scope.bookSession310 = false;
                        $scope.bookSession210 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession10 = false;
                        //$scope.bookCheckUp310 = false;
                    }



                }
                if (data.data.date['ten'].state[5] == 1 || data.data.date['ten'].state[5] == 2 || data.data.date['ten'].state[5] == 3) {

                    $scope.bookDiscovery510 = false;
                    $scope.bookCheckUp510 = false;
                    $scope.bookSession510 = false;

                    if (data.data.date['ten'].state[5] == 1) {

                        //$scope.bookCheckUp10 = false;
                        $scope.bookSession10 = false;
                        //$scope.bookCheckUp110 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession210 = false;
                        //$scope.bookCheckUp210 = false;
                        $scope.bookSession310 = false;
                        //$scope.bookCheckUp310 = false;
                        $scope.bookSession410 = false;
                        $scope.bookDiscovery410 = false;
                        $scope.bookDiscovery310 = false;

                        //$scope.bookCheckUp410 = false;


                    }
                    if (data.data.date['ten'].state[5] == 2) {

                        //$scope.bookCheckUp10 = false;
                        // $scope.bookDiscovery10 = false;
                        //$scope.bookDiscovery110 = false;
                        //$scope.bookCheckUp110 = false;
                        // $scope.bookDiscovery210 = false;
                        //$scope.bookCheckUp210 = false;
                        $scope.bookDiscovery310 = false;
                        //$scope.bookCheckUp310 = false;
                        //$scope.bookCheckUp410 = false;
                        $scope.bookDiscovery410 = false;
                        $scope.bookSession410 = false;
                        $scope.bookSession310 = false;
                        $scope.bookSession210 = false;
                        $scope.bookSession110 = false;
                        $scope.bookSession10 = false;
                    }



                }
                if (data.data.date['eleven'].state[0] == 1 || data.data.date['eleven'].state[0] == 2 || data.data.date['eleven'].state[0] == 3) {

                    $scope.bookDiscovery11 = false;
                    $scope.bookSession11 = false;
                    $scope.bookCheckUp11 = false;


                }
                if (data.data.date['eleven'].state[1] == 1 || data.data.date['eleven'].state[1] == 2 || data.data.date['eleven'].state[1] == 3) {

                    $scope.bookDiscovery111 = false;
                    $scope.bookSession111 = false;
                    $scope.bookCheckUp111 = false;

                    if (data.data.date['eleven'].state[1] == 1) {

                        $scope.bookSession11 = false;
                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;


                    }
                    if (data.data.date['eleven'].state[1] == 2) {

                        $scope.bookDiscovery11 = false;
                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;

                    }

                }
                if (data.data.date['eleven'].state[2] == 1 || data.data.date['eleven'].state[2] == 2 || data.data.date['eleven'].state[2] == 3) {

                    $scope.bookDiscovery211 = false;
                    $scope.bookSession211 = false;
                    $scope.bookCheckUp211 = false;

                    if (data.data.date['eleven'].state[2] == 1) {

                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookSession111 = false;
                        $scope.bookDiscovery111 = false;
                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp111 = false;


                    }
                    if (data.data.date['eleven'].state[2] == 2) {

                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookDiscovery111 = false;
                        $scope.bookSession111 = false;
                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp111 = false;

                    }

                }
                if (data.data.date['eleven'].state[3] == 1 || data.data.date['eleven'].state[3] == 2 || data.data.date['eleven'].state[3] == 3) {

                    $scope.bookDiscovery311 = false;
                    $scope.bookSession311 = false;
                    $scope.bookCheckUp311 = false;

                    if (data.data.date['eleven'].state[3] == 1) {

                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookSession111 = false;
                        //$scope.bookCheckUp111 = false;
                        $scope.bookSession211 = false;
                        //$scope.bookCheckUp211 = false;
                        $scope.bookDiscovery211 = false;
                        $scope.bookDiscovery111 = false;


                    }
                    if (data.data.date['eleven'].state[3] == 2) {

                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookDiscovery111 = false;
                        //$scope.bookCheckUp111 = false;
                        $scope.bookDiscovery211 = false;
                        $scope.bookSession211 = false;
                        $scope.bookSession111 = false;
                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp211 = false;


                    }

                }
                if (data.data.date['eleven'].state[4] == 1 || data.data.date['eleven'].state[4] == 2 || data.data.date['eleven'].state[4] == 3) {

                    $scope.bookDiscovery411 = false;
                    $scope.bookSession411 = false;
                    $scope.bookCheckUp411 = false;

                    if (data.data.date['eleven'].state[4] == 1) {

                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookSession111 = false;
                        //$scope.bookCheckUp111 = false;
                        $scope.bookSession211 = false;
                        //$scope.bookCheckUp211 = false;
                        $scope.bookSession311 = false;
                        $scope.bookDiscovery311 = false;
                        $scope.bookDiscovery211 = false;

                        //$scope.bookCheckUp311 = false;


                    }
                    if (data.data.date['eleven'].state[4] == 2) {

                        //$scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        //$scope.bookDiscovery111 = false;
                        //$scope.bookCheckUp111 = false;
                        $scope.bookDiscovery211 = false;
                        //$scope.bookCheckUp211 = false;
                        $scope.bookDiscovery311 = false;
                        $scope.bookSession311 = false;
                        $scope.bookSession211 = false;
                        $scope.bookSession111 = false;
                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp311 = false;


                    }

                }
                if (data.data.date['eleven'].state[5] == 1 || data.data.date['eleven'].state[5] == 2 || data.data.date['eleven'].state[5] == 3) {

                    $scope.bookDiscovery511 = false;
                    $scope.bookSession511 = false;
                    $scope.bookCheckUp511 = false;

                    if (data.data.date['eleven'].state[5] == 1) {

                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookSession111 = false;
                        //$scope.bookCheckUp111 = false;
                        $scope.bookSession211 = false;
                        //$scope.bookCheckUp211 = false;
                        $scope.bookSession311 = false;
                        //$scope.bookCheckUp311 = false;
                        $scope.bookSession411 = false;
                        $scope.bookDiscovery411 = false;
                        $scope.bookDiscovery311 = false;

                        //$scope.bookCheckUp411 = false;


                    }
                    if (data.data.date['eleven'].state[5] == 2) {

                        //$scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        //$scope.bookDiscovery111 = false;
                        //$scope.bookCheckUp111 = false;
                        // $scope.bookDiscovery211 = false;
                        //$scope.bookCheckUp211 = false;
                        //$scope.bookDiscovery311 = false;
                        //$scope.bookCheckUp311 = false;
                        $scope.bookSession411 = false;
                        $scope.bookSession311 = false;
                        $scope.bookSession211 = false;
                        $scope.bookSession111 = false;
                        $scope.bookSession11 = false;
                        $scope.bookDiscovery411 = false;
                        $scope.bookDiscover311 = false;

                        //$scope.bookCheckUp411 = false;


                    }

                }
                if (data.data.date['twelve'].state[0] == 1 || data.data.date['twelve'].state[0] == 2 || data.data.date['twelve'].state[0] == 3) {

                    $scope.bookDiscovery12 = false;
                    $scope.bookSession12 = false;
                    $scope.bookCheckUp12 = false;




                }
                if (data.data.date['twelve'].state[1] == 1 || data.data.date['twelve'].state[1] == 2 || data.data.date['twelve'].state[1] == 3) {

                    $scope.bookDiscovery112 = false;
                    $scope.bookSession112 = false;
                    $scope.bookCheckUp112 = false;

                    if (data.data.date['twelve'].state[1] == 1) {

                        $scope.bookSession12 = false;
                        $scope.bookDiscovery12 = false;
                        //$scope.bookCheckUp12 = false;

                    }
                    if (data.data.date['twelve'].state[1] == 2) {

                        $scope.bookDiscovery12 = false;
                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp12 = false;
                    }

                }
                if (data.data.date['twelve'].state[2] == 1 || data.data.date['twelve'].state[2] == 2 || data.data.date['twelve'].state[2] == 3) {

                    $scope.bookDiscovery212 = false;
                    $scope.bookSession212 = false;
                    $scope.bookCheckUp212 = false;
                    //console.log("this should run")

                    if (data.data.date['twelve'].state[2] == 1) {

                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookSession112 = false;
                        $scope.bookDiscovery112 = false;
                        $scope.bookDiscovery12 = false;
                        //$scope.bookCheckUp112 = false;

                    }
                    if (data.data.date['twelve'].state[2] == 2) {

                        $scope.bookDiscovery12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookDiscovery112 = false;
                        $scope.bookSession112 = false;
                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp112 = false;

                    }

                }
                if (data.data.date['twelve'].state[3] == 1 || data.data.date['twelve'].state[3] == 2 || data.data.date['twelve'].state[3] == 3) {

                    $scope.bookDiscovery312 = false;
                    $scope.bookSession312 = false;
                    $scope.bookCheckUp312 = false;
                    // //console.log("we hrer")
                    //console.log("we here?")

                    if (data.data.date['twelve'].state[3] == 1) {

                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookSession112 = false;
                        //$scope.bookCheckUp112 = false;
                        $scope.bookSession212 = false;
                        $scope.bookDiscovery212 = false;
                        $scope.bookDiscovery112 = false;
                        //$scope.bookCheckUp212 = false;
                    }
                    if (data.data.date['twelve'].state[3] == 2) {

                        $scope.bookDiscovery12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookDiscovery112 = false;
                        //$scope.bookCheckUp112 = false;
                        $scope.bookDiscovery212 = false;
                        //$scope.bookCheckUp212 = false;

                    }

                }
                if (data.data.date['twelve'].state[4] == 1 || data.data.date['twelve'].state[4] == 2 || data.data.date['twelve'].state[4] == 3) {

                    $scope.bookDiscovery412 = false;
                    $scope.bookSession412 = false;
                    $scope.bookCheckUp412 = false;

                    if (data.data.date['twelve'].state[4] == 1) {

                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookSession112 = false;
                        //$scope.bookCheckUp112 = false;
                        $scope.bookSession212 = false;
                        //$scope.bookCheckUp212 = false;
                        $scope.bookSession312 = false;
                        $scope.bookDiscovery312 = false;
                        $scope.bookDiscovery212 = false;
                        //$scope.bookCheckUp312 = false;
                    }
                    if (data.data.date['twelve'].state[4] == 2) {

                        $scope.bookDiscovery12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookDiscovery112 = false;
                        //$scope.bookCheckUp112 = false;
                        $scope.bookDiscovery212 = false;
                        //$scope.bookCheckUp212 = false;
                        $scope.bookDiscovery312 = false;
                        //$scope.bookCheckUp312 = false;

                    }

                }
                if (data.data.date['twelve'].state[5] == 1 || data.data.date['twelve'].state[5] == 2 || data.data.date['twelve'].state[5] == 3) {

                    $scope.bookDiscovery512 = false;
                    $scope.bookSession512 = false;
                    $scope.bookCheckUp512 = false;

                    if (data.data.date['twelve'].state[5] == 1) {

                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookSession112 = false;
                        //$scope.bookCheckUp112 = false;
                        $scope.bookSession212 = false;
                        //$scope.bookCheckUp212 = false;
                        $scope.bookSession312 = false;
                        //$scope.bookCheckUp312 = false;
                        $scope.bookSession412 = false;
                        $scope.bookDiscovery412 = false;
                        $scope.bookDiscovery312 = false;
                        //$scope.bookCheckUp412 = false;

                    }
                    if (data.data.date['twelve'].state[5] == 2) {

                        $scope.bookDiscovery12 = false;
                        //$scope.bookCheckUp12 = false;
                        $scope.bookDiscovery112 = false;
                        //$scope.bookCheckUp112 = false;
                        $scope.bookDiscovery212 = false;
                        //$scope.bookCheckUp212 = false;
                        $scope.bookDiscovery312 = false
                        //$scope.bookCheckUp312 = false;
                        $scope.bookDiscovery412 = false;
                        $scope.bookCheckUp412 = false;

                    }
                }
                if (data.data.date['one'].state[0] == 1 || data.data.date['one'].state[0] == 2 || data.data.date['one'].state[0] == 3) {

                    $scope.bookDiscovery1 = false;
                    $scope.bookSession1 = false;

                    $scope.bookCheckUp1 = false;



                }
                if (data.data.date['one'].state[1] == 1 || data.data.date['one'].state[1] == 2 || data.data.date['one'].state[1] == 3) {

                    $scope.bookDiscovery11 = false;
                    $scope.bookSession11 = false;
                    $scope.bookCheckUp101 = false;

                    if (data.data.date['one'].state[1] == 1) {

                        $scope.bookSession1 = false
                        //$scope.bookCheckUp1 = false;

                        $scope.bookDiscovery1 = false;
                    }
                    if (data.data.date['one'].state[1] == 2) {

                        $scope.bookDiscovery1 = false;
                        //$scope.bookCheckUp1 = false;

                        $scope.bookSession1 = false;

                    }

                }
                if (data.data.date['one'].state[2] == 1 || data.data.date['one'].state[2] == 2 || data.data.date['one'].state[2] == 3) {

                    $scope.bookDiscovery21 = false;
                    $scope.bookSession21 = false;
                    $scope.bookCheckUp21 = false;

                    if (data.data.date['one'].state[2] == 1) {

                        $scope.bookSession1 = false
                        //$scope.bookCheckUp1 = false;
                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;

                        $scope.bookDiscovery11 = false;
                        $scope.bookDiscovery1 = false;

                    }
                    if (data.data.date['one'].state[2] == 2) {

                        $scope.bookDiscovery1 = false;
                        //$scope.bookCheckUp1 = false;
                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;

                        $scope.bookSession11 = false;
                        $scope.bookSession1 = false;
                    }

                }
                if (data.data.date['one'].state[3] == 1 || data.data.date['one'].state[3] == 2 || data.data.date['one'].state[3] == 3) {

                    $scope.bookDiscovery31 = false;
                    $scope.bookSession31 = false;
                    $scope.bookCheckUp31 = false;

                    if (data.data.date['one'].state[3] == 1) {

                        $scope.bookSession1 = false
                        ////$scope.bookCheckUp1 = false;
                        $scope.bookSession11 = false;
                        ////$scope.bookCheckUp11 = false;
                        $scope.bookSession21 = false;
                        ////$scope.bookCheckUp21 = false;

                        $scope.bookDiscovery21 = false;
                        $scope.bookDiscovery11 = false;
                        // $scope.bookDiscovery1 = false;



                    }
                    if (data.data.date['one'].state[3] == 2) {

                        $scope.bookDiscovery1 = false;
                        //$scope.bookCheckUp1 = false;
                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookDiscovery21 = false;
                        //$scope.bookCheckUp21 = false;

                        $scope.bookSession21 = false;
                        $scope.bookSession11 = false;
                        $scope.bookSession1 = false;
                    }

                }
                if (data.data.date['one'].state[4] == 1 || data.data.date['one'].state[4] == 2 || data.data.date['one'].state[4] == 3) {

                    $scope.bookDiscovery41 = false;
                    $scope.bookSession41 = false;
                    $scope.bookCheckUp41 = false;

                    if (data.data.date['one'].state[4] == 1) {

                        $scope.bookSession1 = false
                        // $scope.bookCheckUp1 = false;
                        $scope.bookSession11 = false;
                        // $scope.bookCheckUp11 = false;
                        $scope.bookSession21 = false;
                        //$scope.bookCheckUp21 = false;
                        $scope.bookSession31 = false;
                        //$scope.bookCheckUp31 = false;
                        //$scope.bookDiscovery41 = false;
                        $scope.bookDiscovery31 = false;
                        $scope.bookDiscovery21 = false;
                        //$scope.bookDiscovery11 = false;
                        //$scope.bookDiscovery1 = false;


                    }
                    if (data.data.date['one'].state[4] == 2) {

                        $scope.bookDiscovery1 = false;
                        //$scope.bookCheckUp1 = false;
                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookDiscovery21 = false;
                        //$scope.bookCheckUp21 = false;
                        $scope.bookDiscovery31 = false;
                        //$scope.bookCheckUp31 = false
                        $scope.bookSession31 = false;
                        $scope.bookSession21 = false;
                        $scope.bookSession11 = false;
                        $scope.bookSession1 = false;

                    }

                }
                if (data.data.date['one'].state[5] == 1 || data.data.date['one'].state[5] == 2 || data.data.date['one'].state[5] == 3) {

                    $scope.bookDiscovery51 = false;
                    $scope.bookSession51 = false;
                    $scope.bookCheckUp51 = false;
                    //console.log("this should run one")

                    if (data.data.date['one'].state[5] == 1) {

                        $scope.bookSession1 = false
                        //$scope.bookCheckUp1 = false;
                        $scope.bookSession11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookSession21 = false;
                        //$scope.bookCheckUp21 = false;
                        $scope.bookSession31 = false;
                        //$scope.bookCheckUp31 = false;
                        $scope.bookSession41 = false;
                        //$scope.bookCheckUp41 = false;
                        $scope.bookDiscovery41 = false;
                        $scope.bookDiscovery31 = false;
                        //$scope.bookDiscovery21 = false;
                        //$scope.bookDiscovery11 = false;
                        //$scope.bookDiscovery1 = false;


                    }
                    if (data.data.date['one'].state[5] == 2) {

                        $scope.bookDiscovery1 = false;
                        //$scope.bookCheckUp1 = false;
                        $scope.bookDiscovery11 = false;
                        //$scope.bookCheckUp11 = false;
                        $scope.bookDiscovery21 = false;
                        //$scope.bookCheckUp21 = false;
                        $scope.bookDiscovery31 = false;
                        //$scope.bookCheckUp31 = false
                        $scope.bookDiscovery41 = false;
                        //$scope.bookCheckUp41 = false;
                        $scope.bookSession41 = false;
                        $scope.bookSession31 = false;
                        $scope.bookSession21 = false;
                        $scope.bookSession11 = false;
                        $scope.bookSession1 = false;

                    }


                }
                if (data.data.date['two'].state[0] == 1 || data.data.date['two'].state[0] == 2 || data.data.date['two'].state[0] == 3) {

                    $scope.bookDiscovery2 = false;
                    $scope.bookSession2 = false
                    $scope.bookCheckUp2 = false;
                    ;

                }
                if (data.data.date['two'].state[1] == 1 || data.data.date['two'].state[1] == 2 || data.data.date['two'].state[1] == 3) {

                    $scope.bookDiscovery102 = false;
                    $scope.bookSession12 = false;
                    $scope.bookCheckUp102 = false;

                    if (data.data.date['two'].state[1] == 1) {

                        $scope.bookSession2 = false;
                        $scope.bookDiscovery2 = false;
                        //$scope.bookCheckUp2 = false;


                    }
                    if (data.data.date['two'].state[1] == 2) {
                        $scope.bookDiscovery2 = false;
                        //$scope.bookCheckUp2 = false;

                    }

                }
                if (data.data.date['two'].state[2] == 1 || data.data.date['two'].state[2] == 2 || data.data.date['two'].state[2] == 3) {

                    $scope.bookDiscovery22 = false;
                    $scope.bookSession22 = false;
                    $scope.bookCheckUp22 = false;

                    if (data.data.date['two'].state[2] == 1) {

                        $scope.bookSession2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookSession12 = false;
                        $scope.bookDiscovery2 = false;
                        $scope.bookDiscovery102 = false;
                        //$scope.bookCheckUp102 = false;


                    }
                    if (data.data.date['two'].state[2] == 2) {
                        $scope.bookDiscovery2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookDiscovery102 = false;
                        $scope.bookSession12 = false;
                        $scope.bookSession2 = false;

                        //$scope.bookCheckUp102 = false;

                    }


                }
                if (data.data.date['two'].state[3] == 1 || data.data.date['two'].state[3] == 2 || data.data.date['two'].state[3] == 3) {

                    $scope.bookDiscovery32 = false;
                    $scope.bookSession32 = false;
                    $scope.bookCheckUp32 = false;

                    if (data.data.date['two'].state[3] == 1) {

                        $scope.bookSession2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession22 = false;
                        $scope.bookDiscovery22 = false;
                        $scope.bookDiscovery102 = false;

                        //$scope.bookCheckUp22 = false;



                    }
                    if (data.data.date['two'].state[3] == 2) {
                        //$scope.bookDiscovery2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookDiscovery102 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookDiscovery22 = false;
                        $scope.bookSession22 = false;
                        $scope.bookSession12 = false;

                        //$scope.bookCheckUp22 = false;

                    }

                }
                if (data.data.date['two'].state[4] == 1 || data.data.date['two'].state[4] == 2 || data.data.date['two'].state[4] == 3) {

                    $scope.bookDiscovery42 = false;
                    $scope.bookSession42 = false;
                    $scope.bookCheckUp42 = false;

                    if (data.data.date['two'].state[4] == 1) {

                        $scope.bookSession2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession22 = false;
                        //$scope.bookCheckUp22 = false;
                        $scope.bookSession32 = false;
                        //$scope.bookCheckUp32 = false;


                    }
                    if (data.data.date['two'].state[4] == 2) {
                        $scope.bookDiscovery2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookDiscovery102 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookDiscovery22 = false;
                        //$scope.bookCheckUp22 = false;
                        $scope.bookDiscovery32 = false;
                        //$scope.bookCheckUp32 = false;

                    }

                }
                if (data.data.date['two'].state[5] == 1 || data.data.date['two'].state[5] == 2 || data.data.date['two'].state[5] == 3) {

                    $scope.bookDiscovery52 = false;
                    $scope.bookCheckUp52 = false;
                    $scope.bookSession52 = false;
                    if (data.data.date['two'].state[5] == 1) {

                        $scope.bookSession2 = false;
                        //$scope.bookCheckUp2 = false;
                        $scope.bookSession12 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession22 = false;
                        //$scope.bookCheckUp22 = false;
                        $scope.bookSession32 = false;
                        //$scope.bookCheckUp32 = false;
                        $scope.bookSession42 = false;
                        $scope.bookDiscovery42 = false;
                        $scope.bookDiscovery32 = false;
                        //$scope.bookCheckUp42 = false;


                    }
                    if (data.data.date['two'].state[5] == 2) {
                        //$scope.bookDiscovery2 = false;
                        //$scope.bookCheckUp2 = false;
                        //$scope.bookDiscovery102 = false;
                        //$scope.bookCheckUp102 = false;
                        //$scope.bookDiscovery22 = false;
                        //$scope.bookCheckUp22 = false;
                        $scope.bookDiscovery32 = false;
                        //$scope.bookCheckUp32 = false;
                        $scope.bookDiscovery42 = false;
                        $scope.bookSession42 = false;
                        $scope.bookSession32 = false
                        $scope.bookSession22 = false;
                        $scope.bookSession12 = false;
                        $scope.bookSession2 = false;
                        //$scope.bookCheckUp42 = false;

                    }

                }
                if (data.data.date['three'].state[0] == 1 || data.data.date['three'].state[0] == 2 || data.data.date['three'].state[0] == 3) {

                    $scope.bookDiscovery3 = false;
                    $scope.bookSession3 = false;
                    $scope.bookCheckUp3 = false;


                }
                if (data.data.date['three'].state[1] == 1 || data.data.date['three'].state[1] == 2 || data.data.date['three'].state[1] == 3) {

                    $scope.bookDiscovery13 = false;
                    $scope.bookSession13 = false;
                    $scope.bookCheckUp13 = false;

                    if (data.data.date['three'].state[1] == 1) {
                        $scope.bookSession3 = false;
                        $scope.bookDiscovery3 = false;

                        //$scope.bookCheckUp3 = false;

                    }
                    if (data.data.date['three'].state[1] == 2) {
                        $scope.bookDiscovery3 = false;
                        $scope.bookSession3 = false;
                        //$scope.bookCheckUp3 = false;

                    }

                }
                if (data.data.date['three'].state[2] == 1 || data.data.date['three'].state[2] == 2 || data.data.date['three'].state[2] == 3) {

                    $scope.bookDiscovery23 = false;
                    $scope.bookSession23 = false;
                    $scope.bookCheckUp23 = false;

                    if (data.data.date['three'].state[2] == 1) {
                        $scope.bookSession3 = false;
                        //$scope.bookCheckUp3 = false;
                        $scope.bookSession13 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession23 = false
                        $scope.bookDiscovery23 = false;
                        $scope.bookDiscovery13 = false
                        //$scope.bookCheckUp23 = false;


                    }
                    if (data.data.date['three'].state[2] == 2) {
                        $scope.bookDiscovery3 = false;
                        //$scope.bookCheckUp3 = false;
                        $scope.bookDiscovery13 = false;
                        //$scope.bookCheckUp13 = false;
                        $scope.bookDiscovery23 = false
                        //$scope.bookCheckUp23 = false;
                        $scope.bookSession13 = false;
                        $scope.bookSession3 = false;


                    }

                }
                if (data.data.date['three'].state[3] == 1 || data.data.date['three'].state[3] == 2 || data.data.date['three'].state[3] == 3) {

                    $scope.bookDiscovery33 = false;
                    $scope.bookSession33 = false;
                    $scope.bookCheckUp33 = false;

                    if (data.data.date['three'].state[3] == 1) {
                        $scope.bookSession3 = false;
                        //$scope.bookCheckUp3 = false;
                        $scope.bookSession13 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession23 = false
                        $scope.bookDiscovery23 = false
                        $scope.bookDiscovery13 = false;

                        //$scope.bookCheckUp23 = false;


                    }
                    if (data.data.date['three'].state[3] == 2) {
                        //$scope.bookDiscovery3 = false;
                        //$scope.bookCheckUp3 = false;
                        $scope.bookDiscovery13 = false;
                        //$scope.bookCheckUp13 = false;
                        $scope.bookDiscovery23 = false
                        $scope.bookSession23 = false
                        $scope.bookSession13 = false;
                        $scope.bookSession3 = false;;

                        //$scope.bookCheckUp23 = false;


                    }

                }
                if (data.data.date['three'].state[4] == 1 || data.data.date['three'].state[4] == 2 || data.data.date['three'].state[4] == 3) {

                    $scope.bookDiscovery43 = false;
                    $scope.bookSession43 = false;
                    $scope.bookCheckUp43 = false;
                    //console.log("holda dbe jil")

                    if (data.data.date['three'].state[4] == 1) {
                        $scope.bookSession3 = false;
                        //$scope.bookCheckUp3 = false;
                        $scope.bookSession13 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession23 = false
                        //$scope.bookCheckUp23 = false;
                        $scope.bookSession33 = false;
                        $scope.bookDiscovery33 = false;
                        $scope.bookDiscovery23 = false;
                        //$scope.bookCheckUp33 = false;


                    }
                    if (data.data.date['three'].state[4] == 2) {
                        //$scope.bookDiscovery3 = false;
                        //$scope.bookCheckUp3 = false;
                        //$scope.bookDiscovery13 = false;
                        //$scope.bookCheckUp13 = false;
                        $scope.bookDiscovery23 = false
                        //$scope.bookCheckUp23 = false;
                        $scope.bookDiscovery33 = false;
                        //$scope.bookCheckUp33 = false;
                        $scope.bookSession33 = false;
                        $scope.bookSession23 = false;
                        $scope.bookSession13 = false;
                        $scope.bookSession3 = false;


                    }

                }
                if (data.data.date['three'].state[5] == 1 || data.data.date['three'].state[5] == 2 || data.data.date['three'].state[5] == 3) {

                    $scope.bookDiscovery53 = false;
                    $scope.bookCheckUp53 = false;
                    $scope.bookSession53 = false;

                    if (data.data.date['three'].state[5] == 1) {
                        $scope.bookSession3 = false;
                        //$scope.bookCheckUp3 = false;
                        $scope.bookSession13 = false;
                        //$scope.bookCheckUp102 = false;
                        $scope.bookSession23 = false
                        //$scope.bookCheckUp23 = false;
                        $scope.bookSession33 = false;
                        //$scope.bookCheckUp33 = false;
                        $scope.bookSession43 = false;
                        $scope.bookDiscovery43 = false;
                        $scope.bookDiscovery33 = false;
                        //$scope.bookCheckUp43 = false;


                    }
                    if (data.data.date['three'].state[5] == 2) {
                        //$scope.bookDiscovery3 = false;
                        //$scope.bookCheckUp3 = false;
                        //$scope.bookDiscovery13 = false;
                        //$scope.bookCheckUp13 = false;
                        //$scope.bookDiscovery23 = false
                        //$scope.bookCheckUp23 = false;
                        $scope.bookDiscovery33 = false;
                        //$scope.bookCheckUp33 = false;
                        $scope.bookDiscovery43 = false;
                        $scope.bookSession43 = false;
                        $scope.bookSession33 = false;
                        $scope.bookSession23 = false
                        $scope.bookSession13 = false;
                        $scope.bookSession3 = false;

                        //$scope.bookCheckUp43 = false;

                    }

                }

                // TIME TOGGLER //


                //console.log($scope.hourAvailable8)


                //$scope.slot1 = data.data.date['eight'].reduce($scope.reducer)
                $scope.slot2 = data.data.date['nine'].reduce($scope.reducer)
                //console.log("$scope.slot2", $scope.slot2)
                $scope.slot3 = data.data.date["ten"].reduce($scope.reducer)
                $scope.slot4 = data.data.date["eleven"].reduce($scope.reducer)
                $scope.slot5 = data.data.date["twelve"].reduce($scope.reducer)
                $scope.slot6 = data.data.date["one"].reduce($scope.reducer)
                $scope.slot7 = data.data.date["two"].reduce($scope.reducer)
                $scope.slot8 = data.data.date["three"].reduce($scope.reducer)
                $scope.slotTotal = $scope.slot1 + $scope.slot2 + $scope.slot3 + $scope.slot4 + $scope.slot5 + $scope.slot6 +
                    $scope.slot7 + $scope.slot8
                //console.log($scope.slotTotal)

                //$scope.scheduleSDOrCiPageOpen = true;
            })

        }
        $scope.exitScheduledJobPage = function () {

            $scope.scheduledJobPageOpen = false;
            console.log("CLICKED.")
            $scope.currentDate = null;
            $scope.bookeCheckup = true;
            $scope.bookDiscovery8 = false
            $scope.bookDiscovery9 = false;
            $scope.bookDiscovery18 = false;
            $scope.bookDiscovery19 = false;
            $scope.bookDiscovery28 = false;
            $scope.bookDiscovery29 = false;
            $scope.bookDiscovery39 = false;
            $scope.bookDiscovery49 = false;
            $scope.bookDiscovery59 = false;
            $scope.bookDiscovery10 = false;
            $scope.bookDiscovery110 = false;
            $scope.bookDiscovery210 = false;
            $scope.bookDiscovery310 = false;
            $scope.bookDiscovery410 = false;
            $scope.bookDiscovery510 = false;
            $scope.bookDiscovery11 = false;
            $scope.bookDiscovery111 = false;
            $scope.bookDiscovery211 = false;
            $scope.bookDiscovery311 = false;
            $scope.bookDiscovery411 = false;
            $scope.bookDiscovery511 = false;
            $scope.bookDiscovery12 = false;
            $scope.bookDiscovery112 = false;
            $scope.bookDiscovery212 = false;
            $scope.bookDiscovery312 = false;
            $scope.bookDiscovery412 = false;
            $scope.bookDiscovery512 = false;
            $scope.bookDiscovery1 = false;
            $scope.bookDiscovery11 = false;
            $scope.bookDiscovery21 = false;
            $scope.bookDiscovery31 = false;
            $scope.bookDiscovery41 = false;
            $scope.bookDiscovery51 = false;
            $scope.bookDiscovery2 = false;
            $scope.bookDiscovery102 = false;
            $scope.bookDiscovery22 = false;
            $scope.bookDiscovery32 = false;
            $scope.bookDiscovery42 = false;
            $scope.bookDiscovery52 = false;
            $scope.bookDiscovery3 = false;
            $scope.bookDiscovery13 = false;
            $scope.bookDiscovery23 = false;
            $scope.bookDiscovery33 = false;
            $scope.bookDiscovery43 = false;
            $scope.bookDiscovery53 = false;
            $scope.bookDiscovery38 = false;
            $scope.bookDiscovery48 = false;
            $scope.bookDiscovery58 = false;

            $scope.bookSession8 = false
            $scope.bookSession9 = false;
            $scope.bookSession18 = false;
            $scope.bookSession19 = false;
            $scope.bookSession28 = false;
            $scope.bookSession29 = false;
            $scope.bookSession39 = false;
            $scope.bookSession49 = false;
            $scope.bookSession59 = false;
            $scope.bookSession10 = false;
            $scope.bookSession110 = false;
            $scope.bookSession210 = false;
            $scope.bookSession310 = false;
            $scope.bookSession410 = false;
            $scope.bookSession510 = false;
            $scope.bookSession11 = false;
            $scope.bookSession111 = false;
            $scope.bookSession211 = false;
            $scope.bookSession311 = false;
            $scope.bookSession411 = false;
            $scope.bookSession511 = false;
            $scope.bookSession12 = false;
            $scope.bookSession112 = false;
            $scope.bookSession212 = false;
            $scope.bookSession312 = false;
            $scope.bookSession412 = false;
            $scope.bookSession512 = false;
            $scope.bookSession1 = false;
            $scope.bookSession11 = false;
            $scope.bookSession21 = false;
            $scope.bookSession31 = false;
            $scope.bookSession41 = false;
            $scope.bookSession51 = false;
            $scope.bookSession2 = false;
            $scope.bookSession12 = false;
            $scope.bookSession22 = false;
            $scope.bookSession32 = false;
            $scope.bookSession42 = false;
            $scope.bookSession52 = false;
            $scope.bookSession3 = false;
            $scope.bookSession13 = false;
            $scope.bookSession23 = false;
            $scope.bookSession33 = false;
            $scope.bookSession43 = false;
            $scope.bookSession53 = false;
            $scope.bookSession38 = false;
            $scope.bookSession48 = false;
            $scope.bookSession58 = false;

            $scope.bookCheckUp8 = false
            $scope.bookCheckUp9 = false;
            $scope.bookCheckUp18 = false;
            $scope.bookCheckUp19 = false;
            $scope.bookCheckUp28 = false;
            $scope.bookCheckUp29 = false;
            $scope.bookCheckUp39 = false;
            $scope.bookCheckUp49 = false;
            $scope.bookCheckUp59 = false;
            $scope.bookCheckUp10 = false;
            $scope.bookCheckUp110 = false;
            $scope.bookCheckUp210 = false;
            $scope.bookCheckUp310 = false;
            $scope.bookCheckUp410 = false;
            $scope.bookCheckUp510 = false;
            $scope.bookCheckUp11 = false;
            $scope.bookCheckUp111 = false;
            $scope.bookCheckUp211 = false;
            $scope.bookCheckUp311 = false;
            $scope.bookCheckUp411 = false;
            $scope.bookCheckUp511 = false;
            $scope.bookCheckUp12 = false;
            $scope.bookCheckUp112 = false;
            $scope.bookCheckUp212 = false;
            $scope.bookCheckUp312 = false;
            $scope.bookCheckUp412 = false;
            $scope.bookCheckUp512 = false;
            $scope.bookCheckUp1 = false;
            $scope.bookCheckUp11 = false;
            $scope.bookCheckUp21 = false;
            $scope.bookCheckUp31 = false;
            $scope.bookCheckUp41 = false;
            $scope.bookCheckUp51 = false;
            $scope.bookCheckUp2 = false;
            $scope.bookCheckUp102 = false;
            $scope.bookCheckUp22 = false;
            $scope.bookCheckUp32 = false;
            $scope.bookCheckUp42 = false;
            $scope.bookCheckUp52 = false;
            $scope.bookCheckUp3 = false;
            $scope.bookCheckUp13 = false;
            $scope.bookCheckUp23 = false;
            $scope.bookCheckUp33 = false;
            $scope.bookCheckUp43 = false;
            $scope.bookCheckUp53 = false;
            $scope.bookCheckUp38 = false;
            $scope.bookCheckUp48 = false;
            $scope.bookCheckUp58 = false;
        }
        $scope.submitCheckUp = function (hour) {

            if ($scope.checkUpData.time == "8:00am" || $scope.checkUpData.time == "9:00am" ||
                $scope.checkUpData.time == "10:00am" || $scope.checkUpData.time == "11:00am" ||
                $scope.checkUpData.time == "12:00pm" || $scope.checkUpData.time == "1:00pm" ||
                $scope.checkUpData.time == "2:00pm" || $scope.checkUpData.time == "3:00pm") {


                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                User.getDate($scope.id).then(function (data) {


                    data.data.date[hour].state[0] = 3
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {
                 
                        $scope.audio.play();
             
                    })

                })

            }
            if ($scope.checkUpData.time == "8:10am" || $scope.checkUpData.time == "9:10am" ||
                $scope.checkUpData.time == "10:10am" || $scope.checkUpData.time == "11:10am" ||
                $scope.checkUpData.time == "12:10pm" || $scope.checkUpData.time == "1:10pm" ||
                $scope.checkUpData.time == "2:10pm" || $scope.checkUpData.time == "3:10pm") {

       
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                User.getDate($scope.id).then(function (data) {
                
                    data.data.date[hour].state[1] = 3
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {
           
                        $scope.audio.play();

                    })

                })

            }
            if ($scope.checkUpData.time == "8:20am" || $scope.checkUpData.time == "9:20am" ||
                $scope.checkUpData.time == "10:20am" || $scope.checkUpData.time == "11:20am" ||
                $scope.checkUpData.time == "12:20pm" || $scope.checkUpData.time == "1:20pm" ||
                $scope.checkUpData.time == "2:20pm" || $scope.checkUpData.time == "3:20pm") {
           
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                User.getDate($scope.id).then(function (data) {
                
                    data.data.date[hour].state[2] = 3
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {
    
                        $scope.audio.play();
        
                    })

                })
                
            }
            if ($scope.checkUpData.time == "8:30am" || $scope.checkUpData.time == "9:30am" ||
                $scope.checkUpData.time == "10:30am" || $scope.checkUpData.time == "11:30am" ||
                $scope.checkUpData.time == "12:30pm" || $scope.checkUpData.time == "1:30pm" ||
                $scope.checkUpData.time == "2:30pm" || $scope.checkUpData.time == "3:30pm") {
              
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                User.getDate($scope.id).then(function (data) {
                   
                    data.data.date[hour].state[3] = 3;
                    $scope.dateData.dateInfo = data.data.date[hour].state;

                    User.updateDate($scope.dateData).then(function (data) {
             
                        $scope.audio.play();
           
                    })
                    
                })

            }
            if ($scope.checkUpData.time == "8:40am" || $scope.checkUpData.time == "9:40am" ||
                $scope.checkUpData.time == "10:40am" || $scope.checkUpData.time == "11:40am" ||
                $scope.checkUpData.time == "12:40pm" || $scope.checkUpData.time == "1:40pm" ||
                $scope.checkUpData.time == "2:40pm" || $scope.checkUpData.time == "3:40pm") {
    
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                User.getDate($scope.id).then(function (data) {
                   
                    data.data.date[hour].state[4] = 3;
                    $scope.dateData.dateInfo = data.data.date[hour].state;

                    User.updateDate($scope.dateData).then(function (data) {
                  
                        $scope.audio.play();
    
                    })

                })

            }
            if ($scope.checkUpData.time == "8:50am" || $scope.checkUpData.time == "9:50am" ||
                $scope.checkUpData.time == "10:50am" || $scope.checkUpData.time == "11:50am" ||
                $scope.checkUpData.time == "12:50pm" || $scope.checkUpData.time == "1:50pm" ||
                $scope.checkUpData.time == "2:50pm" || $scope.checkUpData.time == "3:50pm") {
            
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                User.getDate($scope.id).then(function (data) {
                    
                    data.data.date[hour].state[5] = 3
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {
              
                        $scope.audio.play();
     
                    })

                })

            }

        }
        $scope.openComposeMessagePage       = function (id) {
            //console.log("clicked")

            if (!$scope.composeMessagePageOpen) {
                $scope.composeMessagePageOpen = true;
                $scope.messagePageSelected = true;
                //$scope.fadeOutMenu = true;
                $scope.schedulePageOpen = false;
                $scope.timesheetPageOpen = false;
                $scope.infoPageOpen = false;
                //$timeout(function(){
                $scope.messageMenuSelected = true;
                //},200)

            } else {
                $scope.composeMessagePageOpen = true;

            }
        }
        $scope.submitMessageAdmin = function () {

            $scope.sendingMessage = true;
            if($scope.messageObject.subject == ""){

                $scope.messageSubjectCannotBeEmpty = true;

            }

            if($scope.messageObject.body == ""){

                $scope.messabeBodyCannotBeEmpty = true;

            }

            if($scope.messageObject.body !== "" &&
               $scope.messageObeject.subject !== ""){
                
            $timeout(function () {

                User.sendMessage($scope.messageObject).then(function (data) {
                    //console.log(data)
                    $scope.sendingMessage = false
                    $scope.messageSent = true;
                    $timeout(function () {
                        $scope.messageSent = false;
                        $scope.messageObject.subject = ""
                        $scope.messageObject.body = ""
                    }, 2500)

                })
            }, 2500)
                
            }


        }
        $scope.openInbox = function () {
            //console.log("clicked")
            if (!$scope.inboxOpen) {
                $scope.inboxOpen = true;
                $scope.composeOpen = false;
            }
        }
        $scope.openCompose = function () {
            if (!$scope.composeOpen) {
                $scope.composeOpen = true;
                $scope.inboxOpen = false;
                $scope.userListOpen = true;
            }
        }
        $scope.markAsUnread = function (index, messageindex) {

            User.changeMessageToUnRead($routeParams.userid, messageindex).then(function (data) {
                //console.log(data)

                //console.log(data)
                //
                $scope.pageLimit = 4;
                $scope.messagesPaginated = [];
                $scope.messagesForPagination = []
                $scope.messagesArray = data.data.user.messages;

                // $scope.messagesLoading = false;
                for (var i = 0; i <= $scope.messagesArray.length; i++) {

                    var page = 0;
                    //////console.log($scope.pageLimit, i, $scope.employees.length)
                    //console.log($scope.employees)
                    if (i < $scope.pageLimit) {
                        //console.log("its less")

                    }
                    if (i < $scope.messagesArray.length) {
                        //console.log("yup,less")
                    }

                    if (i < $scope.pageLimit && i < $scope.messagesArray.length) {//5
                        //console.log("HELLO")
                        ////console.log($scope.employees[i])
                        ////console.log($scope.pageLimit, i, $scope.employees.length)
                        if ($scope.messagesArray[i]) {
                            $scope.messagesArray[i].messageIndex = i
                            $scope.messageForPagination.push($scope.messagesArray[i])
                            //console.log(i)
                            //console.log("firstCondiation")
                            //console.log($scope.pageArray)

                        }



                    } else {
                        if (!$scope.usersLoaded) {

                            //console.log("else")
                            $scope.loadingUsers = false;
                            $scope.messagesPaginated.push($scope.messageForPagination)
                            $scope.messageIndex = null;
                            //console.log($scope.messagesPaginated)
                            $scope.messageForPagination = [];
                            if ($scope.messagesArray[i] !== undefined) {
                                $scope.messagesArray[i].messageIndex = i
                                $scope.messageForPagination.push($scope.messagesArray[i])
                            }
                            $scope.pageLimit = $scope.pageLimit + 4;
                            ////console.log($scope.pageLimit, i, $scope.employees.length)

                            page++

                        }

                    }

                }

            })

        }
        $scope.openBooking = function (index, bookingindex) {
            //console.log(index)
            //console.log(bookingindex)
            if (index == $scope.bookingIndex
            ) {
                $scope.bookingIndex = null;

            } else {
                $scope.bookingIndex = index
                // $scope.messagesArray =[]



            }
        }
        $scope.closeComposePageAdmin = function () {
            $scope.userListOpen = true;
        }
        $scope.nextPage = function () {
            if ($scope.page < $scope.bookingsPaginated.length - 1) {
                $scope.page++
            } else {
                $scope.page = 0;
            }
        }
        $scope.previousPage = function () {
            if ($scope.page > 0) {
                $scope.page = $scope.page - 1
            } else {
                //console.log("here")
                $scope.page = $scope.bookingsPaginated.length - 1;
            }
        }
        $scope.firstPage = function () {
            $scope.page = 0
        }
        $scope.lastPage = function () {
            $scope.page = $scope.bookingsPaginated.length - 1
        }
        $scope.markAsInComplete = function (bookingindex, index) {
            //$scope.bookingIndex = index
            $scope.markAsCompleteObject.id = "5c007bd92275332a70bb109a";
            $scope.markAsCompleteObject.bookingIndex = bookingindex;
            $scope.loadingChangesUndo = true;
            $timeout(function () {



                User.markAsInComplete($scope.markAsCompleteObject).then(function (data) {

                    //$scope.bookedJobsPageOpened = false;
                    $scope.chartsPageOpen = false;
                    $scope.historyPageOpenProfile = false;
                    $scope.messagePageSelected = true;
                    $scope.messagesLoading = true;
                    $scope.bookingsForPagination = [];
                    $scope.bookingsPaginated = []

                    $scope.pageLimit = 4;
                    User.getUser("5c007bd92275332a70bb109a").then(function (data) {
                        //console.log(data)
                        //$scope.messagesArray = data.data.users;
                        $scope.allBookingsArray = data.data.user.bookings
                        //console.log($scope.allBookingsArray)
                        // $scope.messagesLoading = false;
                        for (var i = 0; i <= $scope.allBookingsArray.length; i++) {

                            var page = 0;
                            //////console.log($scope.pageLimit, i, $scope.employees.length)

                            if (i < $scope.pageLimit) {
                                //console.log("its less")

                            }
                            if (i < $scope.allBookingsArray.length) {
                                //console.log("yup,less")
                            }

                            if (i < $scope.pageLimit && i < $scope.allBookingsArray.length) {//5
                                //console.log("HELLO")
                                ////console.log($scope.employees[i])
                                ////console.log($scope.pageLimit, i, $scope.employees.length)
                                if ($scope.allBookingsArray[i]) {
                                    $scope.allBookingsArray[i].bookingIndex = i
                                    $scope.bookingsForPagination.push($scope.allBookingsArray[i])
                                    //console.log(i)
                                    //console.log("firstCondiation")
                                    //console.log($scope.pageArray)

                                }



                            } else {
                                if (!$scope.usersLoaded) {

                                    //console.log("else")
                                    //console.log(i)

                                    $scope.loadingUsers = false;
                                    $scope.bookingsPaginated.push($scope.bookingsForPagination)

                                    //console.log($scope.bookingsPaginated)
                                    $scope.bookingsForPagination = [];
                                    if ($scope.allBookingsArray[i] !== undefined) {
                                        $scope.allBookingsArray[i].bookingIndex = i
                                        $scope.bookingsForPagination.push($scope.allBookingsArray[i])
                                    }
                                    $scope.pageLimit = $scope.pageLimit + 4;
                                    ////console.log($scope.pageLimit, i, $scope.employees.length)

                                    page++

                                }

                            }

                        }
                        $scope.loadingChangesUndo = false;
                    })

                })
            }, 2000)
            /* User.markAsComplete($scope.markAsCompleteObject).then(function(data){*/

        }
        $scope.markAsComplete = function (bookingindex, index) {
            //$scope.bookingIndex = index
            $scope.markAsCompleteObject.id = "5c007bd92275332a70bb109a";
            $scope.markAsCompleteObject.bookingIndex = bookingindex;
            $scope.loadingChanges = true;
            $timeout(function () {



                User.markAsComplete($scope.markAsCompleteObject).then(function (data) {

                    //$scope.bookedJobsPageOpened = false;
                    $scope.chartsPageOpen = false;
                    $scope.historyPageOpenProfile = false;
                    $scope.messagePageSelected = true;
                    $scope.messagesLoading = true;
                    $scope.bookingsForPagination = [];
                    $scope.bookingsPaginated = []

                    $scope.pageLimit = 4;
                    User.getUser("5c007bd92275332a70bb109a").then(function (data) {
                        //console.log(data)
                        //$scope.messagesArray = data.data.users;
                        $scope.allBookingsArray = data.data.user.bookings
                        //console.log($scope.allBookingsArray)
                        // $scope.messagesLoading = false;
                        for (var i = 0; i <= $scope.allBookingsArray.length; i++) {

                            var page = 0;
                            //////console.log($scope.pageLimit, i, $scope.employees.length)

                            if (i < $scope.pageLimit) {
                                //console.log("its less")

                            }
                            if (i < $scope.allBookingsArray.length) {
                                //console.log("yup,less")
                            }

                            if (i < $scope.pageLimit && i < $scope.allBookingsArray.length) {//5
                                //console.log("HELLO")
                                ////console.log($scope.employees[i])
                                ////console.log($scope.pageLimit, i, $scope.employees.length)
                                if ($scope.allBookingsArray[i]) {
                                    $scope.allBookingsArray[i].bookingIndex = i
                                    $scope.bookingsForPagination.push($scope.allBookingsArray[i])
                                    //console.log(i)
                                    //console.log("firstCondiation")
                                    //console.log($scope.pageArray)

                                }



                            } else {
                                if (!$scope.usersLoaded) {

                                    //console.log("else")
                                    //console.log(i)

                                    $scope.loadingUsers = false;
                                    $scope.bookingsPaginated.push($scope.bookingsForPagination)
                                    $scope.loadingChanges = false;
                                    //console.log($scope.bookingsPaginated)
                                    $scope.bookingsForPagination = [];
                                    if ($scope.allBookingsArray[i] !== undefined) {
                                        $scope.allBookingsArray[i].bookingIndex = i
                                        $scope.bookingsForPagination.push($scope.allBookingsArray[i])
                                    }
                                    $scope.pageLimit = $scope.pageLimit + 4;
                                    ////console.log($scope.pageLimit, i, $scope.employees.length)

                                    page++

                                }

                            }

                        }
                    })

                })
            }, 2000)
            /* User.markAsComplete($scope.markAsCompleteObject).then(function(data){*/

        }
        $scope.openMessage = function (index, messageindex) {
            //console.log(index)
            //console.log(messageindex)
            if (index == $scope.messageIndex
            ) {
                $scope.messageIndex = null;

            } else {
                $scope.messageIndex = index
                // $scope.messagesArray =[]

                User.changeMessageToRead($routeParams.userid, messageindex).then(function (data) {
                    //console.log(data)

                    //console.log(data)
                    //
                    $scope.pageLimit = 4;
                    $scope.messagesPaginated = [];
                    $scope.messagesForPagination = []
                    $scope.messagesArray = data.data.user.messages;

                    // $scope.messagesLoading = false;
                    for (var i = 0; i <= $scope.messagesArray.length; i++) {

                        var page = 0;
                        //////console.log($scope.pageLimit, i, $scope.employees.length)
                        //console.log($scope.employees)
                        if (i < $scope.pageLimit) {
                            //console.log("its less")

                        }
                        if (i < $scope.messagesArray.length) {
                            //console.log("yup,less")
                        }

                        if (i < $scope.pageLimit && i < $scope.messagesArray.length) {//5
                            //console.log("HELLO")
                            ////console.log($scope.employees[i])
                            ////console.log($scope.pageLimit, i, $scope.employees.length)
                            if ($scope.messagesArray[i]) {
                                $scope.messagesArray[i].messageIndex = i
                                $scope.messageForPagination.push($scope.messagesArray[i])
                                //console.log(i)
                                //console.log("firstCondiation")
                                //console.log($scope.pageArray)

                            }



                        } else {
                            if (!$scope.usersLoaded) {

                                //console.log("else")
                                $scope.loadingUsers = false;
                                $scope.messagesPaginated.push($scope.messageForPagination)
                                //console.log($scope.messagesPaginated)
                                $scope.messageForPagination = [];
                                if ($scope.messagesArray[i] !== undefined) {
                                    $scope.messagesArray[i].messageIndex = i
                                    $scope.messageForPagination.push($scope.messagesArray[i])
                                }
                                $scope.pageLimit = $scope.pageLimit + 4;
                                ////console.log($scope.pageLimit, i, $scope.employees.length)

                                page++

                            }

                        }

                    }

                })

            }
        }
        $scope.changePageMessages = function () {
            $scope.messageIndex = null;
            if ($scope.page < $scope.messagesPaginated.length - 1) {
                $scope.page++
            } else {
                $scope.page = 0;
            }

        }


        $scope.audio                = new Audio("../audio/shinebrightclick.wav")
        $scope.shinebrighterror     = new Audio("../audio/shinebrighterror.wav");
        $scope.shinebrightloading   = new Audio('../audio/shinebrightloading.wav');
        $scope.shinebrightsuccess   = new Audio('../audio/shinebrightsuccess.wav');
        $scope.shinebrighttap       = new Audio('../audio/shinebrighttap.wav');

        $scope.checkUpData                  = {

        }
        $scope.sessionData                  = {
        }
        $scope.loadingMessages              = false;
        $scope.messageIndex                 = null
        $scope.inboxOpen                    = true;
        $scope.composeOpen                  = false;
        $scope.sendingMessage               = false
        $scope.messageSent                  = false;
        $scope.messageSubjectCannotBeEmpty  = false;
        $scope.messageBodyCannotBeEmpty     = false;
        $scope.markAsCompleteObject         = {}
        $scope.loadingChanges               = false;
        $scope.bookingsPageOpen             = false;
        $scope.usersArray                   = []
        $scope.userListOpen                 = true
        $scope.discoveryFullyAvailable8     = false;
        $scope.discoveryFullyAvailable9     = false;
        $scope.discoveryNotAvailable8       = false;
        $scope.discoveryNotAvailable9       = false;
        $scope.discoveryAlmostFull8         = false;
        $scope.sessionAlmostFull8           = false;
        $scope.sessionAlmostFull9           = false;
        $scope.discoveryAlmostFull9         = false;
        $scope.checkUpFullyAvailable        = false;

        $scope.discoveryPageOpen    = false;
        $scope.sessionPageOpen      = false;
        $scope.checkUpPageOpen      = true;
        $scope.checkUpAvailable10   = true;
        $scope.sessionAvailable10   = true;
        $scope.discoveryAvailable10 = true;
        $scope.checkUpAvailable11   = true;
        $scope.sessionAvailable11   = true;
        $scope.discoveryAvailable11 = true;
        $scope.checkUpAvailable12   = true;
        $scope.sessionAvailable12   = true;
        $scope.discoveryAvailable12 = true;
        $scope.checkUpAvailable1    = true;
        $scope.sessionAvailable1    = true;
        $scope.discoveryAvailable1  = true;
        $scope.checkUpAvailable2    = true;
        $scope.sessionAvailable2    = true;
        $scope.discoveryAvailable2  = true;
        $scope.checkUpAvailable3    = true;
        $scope.sessionAvailable3    = true;
        $scope.discoveryAvailable3  = true;

        $scope.loadingBooking       = false;
        $scope.loadingBooking1      = false;
        $scope.loadingBooking2      = false;
        $scope.loadingBooking3      = false;
        $scope.loadingBooking4      = false;
        $scope.loadingBooking5      = false;
        $scope.loadingBookingDeletion = false;
        $scope.loadingClientBookings= true;

        $timeout(function(){

            $scope.loadingClientBookings = false;

        },2000)

        $scope.infoPageOpen         = true;
        $scope.schedulePageOpen     = false;
        $scope.composeMessagePageOpen       = false;
        $scope.timesheetPageOpen    = false;
        $scope.messagePageOpen      = false;
        $scope.messageMenuSelected  = false;
        $scope.scheduledJobPageOpen = false;
        $scope.scheduleSDOrCiPageOpen = false;
        $scope.bookings             = []
        $scope.currentBooking       = 0;
        $scope.checkUp8Selected     = true;
        $scope.currentDate          = ""
        $scope.clientName           = ""
        $scope.clientEmail          = ""
        $scope.personalCalender     = {}
        $scope.slidein              = true;
        $scope.slideout             = false;
        $scope.heyLeah              = false;

        $scope.booked121            = false;
        $scope.booked122            = false;
        $scope.booked123            = false;
        $scope.booked124            = false;
        $scope.booked125            = false;
        $scope.booked126            = false;
        $scope.booked127            = false;
        $scope.booked128            = false;
        $scope.booked129            = false;
        $scope.booked1210           = false;
        $scope.booked1211           = false;
        $scope.booked1212           = false;
        $scope.booked1213           = false;
        $scope.booked1214           = false;
        $scope.booked1215           = false;
        $scope.booked1216           = false;
        $scope.booked1217           = false;
        $scope.booked1218           = false;
        $scope.booked1219           = false;
        $scope.booked1220           = false;
        $scope.booked1221           = false;
        $scope.booked1222           = false;
        $scope.booked1223           = false;
        $scope.booked1224           = false;
        $scope.booked1225           = false;
        $scope.booked1226           = false;
        $scope.booked1227           = false;
        $scope.booked1228           = false;
        $scope.booked1229           = false;
        $scope.booked1230           = false;
        $scope.booked1231           = false;
        $scope.booked1226           = false;

        $scope.discovery800AMNoRoom = false;
        $scope.discovery810AMNoRoom = false;
        $scope.discovery820AMNoRoom = false;
        $scope.discovery830AmNoRoom = false;
        $scope.discovery840AMNoRoom = false;
        $scope.discovery850AMNoRoom = false;
        $scope.discovery900AMNoRoom = false;
        $scope.discovery910AMNoRoom = false;
        $scope.discovery920AMNoRoom = false;
        $scope.discovery930AmNoRoom = false;
        $scope.discovery940AMNoRoom = false;
        $scope.discovery950AMNoRoom = false;

        $scope.session800AMNoRoom   = false;
        $scope.session810AMNoRoom   = false;
        $scope.session820AMNoRoom   = false;
        $scope.session830AmNoRoom   = false;
        $scope.session840AMNoRoom   = false;
        $scope.session850AMNoRoom   = false;
        $scope.session900AMNoRoom   = false;
        $scope.session910AMNoRoom   = false;
        $scope.session920AMNoRoom   = false;
        $scope.session930AmNoRoom   = false;
        $scope.session940AMNoRoom   = false;
        $scope.session950AMNoRoom   = false;

        $scope.checkUp800AMNoRoom   = false;
        $scope.checkUp810AMNoRoom   = false;
        $scope.checkUp820AMNoRoom   = false;
        $scope.checkUp830AmNoRoom   = false;
        $scope.checkUp840AMNoRoom   = false;
        $scope.checkUp850AMNoRoom   = false;
        $scope.checkUp900AMNoRoom   = false;
        $scope.checkUp910AMNoRoom   = false;
        $scope.checkUp920AMNoRoom   = false;
        $scope.checkUp930AmNoRoom   = false;
        $scope.checkUp940AMNoRoom   = false;
        $scope.checkUp950AMNoRoom   = false;

        $scope.discovery800AMSelected = false;
        $scope.discovery810AMSelected = false;
        $scope.discovery820AMSelected = false;
        $scope.discovery830AMSelected = false;
        $scope.discovery840AMSelected = false;
        $scope.discovery850AMSelected = false;
        $scope.discovery900AMSelected = false;
        $scope.discovery910AMSelected = false;
        $scope.discovery920AMSelected = false;
        $scope.discovery930AMSelected = false;
        $scope.discovery940AMSelected = false;
        $scope.discovery950AMSelected = false;

        $scope.discovery800AMIsBooked = false;
        $scope.discovery810AMIsBooked = false;
        $scope.discovery820AMIsBooked = false;
        $scope.discovery830AMIsBooked = false;
        $scope.discovery840AMIsBooked = false;
        $scope.discovery850AMIsBooked = false;
        $scope.discovery900AMIsBooked = false;
        $scope.discovery910AMIsBooked = false;
        $scope.discovery920AMIsBooked = false;
        $scope.discovery930AMIsBooked = false;
        $scope.discovery940AMIsBooked = false;
        $scope.discovery950AMIsBooked = false;

        $scope.session800AMSelected = false;
        $scope.session810AMSelected = false;
        $scope.session820AMSelected = false;
        $scope.session830AMSelected = false;
        $scope.session840AMSelected = false;
        $scope.session850AMSelected = false;
        $scope.session900AMSelected = false;
        $scope.session910AMSelected = false;
        $scope.session920AMSelected = false;
        $scope.session930AMSelected = false;
        $scope.session940AMSelected = false;
        $scope.session950AMSelected = false;

        $scope.session800AMIsBooked = false;
        $scope.session810AMIsBooked = false;
        $scope.session820AMIsBooked = false;
        $scope.session830AMIsBooked = false;
        $scope.session840AMIsBooked = false;
        $scope.session850AMIsBooked = false;
        $scope.session900AMIsBooked = false;
        $scope.session910AMIsBooked = false;
        $scope.session920AMIsBooked = false;
        $scope.session930AMIsBooked = false;
        $scope.session940AMIsBooked = false;
        $scope.session950AMIsBooked = false;

        $scope.checkUp800AMSelected = false;
        $scope.checkUp810AMSelected = false;
        $scope.checkUp820AMSelected = false;
        $scope.checkUp830AMSelected = false;
        $scope.checkUp840AMSelected = false;
        $scope.checkUp850AMSelected = false;
        $scope.checkUp900AMSelected = false;
        $scope.checkUp910AMSelected = false;
        $scope.checkUp920AMSelected = false;
        $scope.checkUp930AMSelected = false;
        $scope.checkUp940AMSelected = false;
        $scope.checkUp950AMSelected = false;

        $scope.checkUp800AMIsBooked = false;
        $scope.checkUp810AMIsBooked = false;
        $scope.checkUp820AMIsBooked = false;
        $scope.checkUp830AMIsBooked = false;
        $scope.checkUp840AMIsBooked = false;
        $scope.checkUp850AMIsBooked = false;
        $scope.checkUp900AMIsBooked = false;
        $scope.checkUp910AMIsBooked = false;
        $scope.checkUp920AMIsBooked = false;
        $scope.checkUp930AMIsBooked = false;
        $scope.checkUp940AMIsBooked = false;
        $scope.checkUp950AMIsBooked = false;

        $scope.discovery8Selected   = false;
        $scope.discovery8Selected2  = false;
        $scope.discovery8Selected3  = false;
        $scope.discovery8Selected4  = false;
        $scope.discovery8Selected5  = false;
        $scope.discovery8Selected6  = false;
        $scope.discovery8Selected7  = false;
        $scope.discovery8Selected8  = false;

        $scope.session8Selected     = false;
        $scope.session8Selected2    = false;
        $scope.session8Selected3    = false;
        $scope.session8Selected4    = false;
        $scope.session8Selected5    = false;
        $scope.session8Selected6    = false;
        $scope.session8Selected7    = false;
        $scope.session8Selected8    = false;

        $scope.checkUp9Selected2    = true;
        $scope.checkUp8Selected3    = true;
        $scope.checkUp8Selected4    = true;
        $scope.checkUp8Selected5    = true;
        $scope.checkUp8Selected6    = true;
        $scope.checkUp8Selected7    = true;
        $scope.checkUp8Selected8    = true;


        $scope.checkUpTitle80       = true;
        $scope.discoveryTitle80     = false;
        $scope.sessionTitle80       = false;
        $scope.checkUpTitle81       = true;
        $scope.checkUpTitle82       = true;
        $scope.checkUpTitle83       = true;
        $scope.checkUpTitle84       = true;
        $scope.checkUpTitle85       = true;
        $scope.checkUpTitle86       = true;
        $scope.checkUpTitle87       = true;
        $scope.checkUpTitle88       = true;
        $scope.checkUpTitle90       = false;
        $scope.checkUpTitle91       = true;
        $scope.checkUpTitle92       = true;
        $scope.checkUpTitle93       = true;
        $scope.checkUpTitle94       = true;
        $scope.checkUpTitle95       = true;
        $scope.checkUpTitle96       = true;
        $scope.checkUpTitle97       = true;
        $scope.checkUpTitle98       = true;
        $scope.checkUpTitle100      = false;
        $scope.checkUpTitle101      = true;
        $scope.checkUpTitle102      = true;
        $scope.checkUpTitle103      = true;
        $scope.checkUpTitle104      = true;
        $scope.checkUpTitle105      = true;
        $scope.checkUpTitle106      = true;
        $scope.checkUpTitle107      = true;
        $scope.checkUpTitle108      = true;
        $scope.checkUpTitle110      = false;
        $scope.checkUpTitle111      = true;
        $scope.checkUpTitle112      = true;
        $scope.checkUpTitle113      = true;
        $scope.checkUpTitle114      = true;
        $scope.checkUpTitle115      = true;
        $scope.checkUpTitle116      = true;
        $scope.checkUpTitle117      = true;
        $scope.checkUpTitle118      = true;
        $scope.checkUpTitle120      = false;
        $scope.checkUpTitle121      = true;
        $scope.checkUpTitle122      = true;
        $scope.checkUpTitle123      = true;
        $scope.checkUpTitle124      = true;
        $scope.checkUpTitle125      = true;
        $scope.checkUpTitle126      = true;
        $scope.checkUpTitle127      = true;
        $scope.checkUpTitle128      = true;
        $scope.checkUpTitle10       = true;
        $scope.checkUpTitle11       = true;
        $scope.checkUpTitle12       = true;
        $scope.checkUpTitle13       = true;
        $scope.checkUpTitle14       = true;
        $scope.checkUpTitle15       = true;
        $scope.checkUpTitle16       = true;
        $scope.checkUpTitle17       = true;
        $scope.checkUpTitle18       = true;
        $scope.checkUpTitle20       = true;
        $scope.checkUpTitle21       = true;
        $scope.checkUpTitle22       = true;
        $scope.checkUpTitle23       = true;
        $scope.checkUpTitle24       = true;
        $scope.checkUpTitle25       = true;
        $scope.checkUpTitle26       = true;
        $scope.checkUpTitle27       = true;
        $scope.checkUpTitle28       = true;
        $scope.checkUpTitle30       = true;
        $scope.checkUpTitle31       = true;
        $scope.checkUpTitle32       = true;
        $scope.checkUpTitle33       = true;
        $scope.checkUpTitle34       = true;
        $scope.checkUpTitle35       = true;
        $scope.checkUpTitle36       = true;
        $scope.checkUpTitle37       = true;
        $scope.checkUpTitle38       = true;

        $scope.discoveryTitle80     = false;
        $scope.discoveryTitle81     = false;
        $scope.discoveryTitle82     = false;
        $scope.discoveryTitle83     = false;
        $scope.discoverytTitle84    = false;
        $scope.discoveryTitle85     = false;
        $scope.discoverytTitle86    = false;
        $scope.discoveryTitle87     = false;
        $scope.discoveryTitle88     = false;
        $scope.sessionTitle81       = false;
        $scope.sessionTitle82       = false;
        $scope.sessionTitle83       = false;
        $scope.sessionTitle84       = false;
        $scope.sessionTitle85       = false;
        $scope.sessionTitle86       = false;
        $scope.sessionTitle87       = false;
        $scope.sessionTitle88       = false;
        $scope.sessionTitle90       = false;
        $scope.sessionTitle91       = false;
        $scope.sessionTitle92       = false;
        $scope.sessionTitle93       = false;
        $scope.sessionTitle94       = false;
        $scope.sessionTitle95       = false;
        $scope.sessionTitle96       = false;
        $scope.sessionTitle97       = false;
        $scope.sessionTitle100      = false;
        $scope.sessionTitle101      = false;
        $scope.sessionTitle102      = false;
        $scope.sessionTitle103      = false;
        $scope.sessionTitle104      = false;
        $scope.sessionTitle105      = false;
        $scope.sessionTitle106      = false;
        $scope.sessionTitle107      = false;
        $scope.sessionTitle110      = false;
        $scope.sessionTitle111      = false;
        $scope.sessionTitle112      = false;
        $scope.sessionTitle113      = false;
        $scope.sessionTitle114      = false;
        $scope.sessionTitle115      = false;
        $scope.sessionTitle116      = false;
        $scope.sessionTitle117      = false;
        $scope.sessionTitle120      = false;
        $scope.sessionTitle121      = false;
        $scope.sessionTitle122      = false;
        $scope.sessionTitle123      = false;
        $scope.sessionTitle124      = false;
        $scope.sessionTitle125      = false;
        $scope.sessionTitle126      = false;
        $scope.sessionTitle127      = false;
        $scope.sessionTitle10       = false;
        $scope.sessionTitle11       = false;
        $scope.sessionTitle12       = false;
        $scope.sessionTitle13       = false;
        $scope.sessionTitle14       = false;
        $scope.sessionTitle15       = false;
        $scope.sessionTitle16       = false;
        $scope.sessionTitle17       = false;
        $scope.sessionTitle20       = false;
        $scope.sessionTitle21       = false;
        $scope.sessionTitle22       = false;
        $scope.sessionTitle23       = false;
        $scope.sessionTitle24       = false;
        $scope.sessionTitle25       = false;
        $scope.sessionTitle26       = false;
        $scope.sessionTitle27       = false;
        $scope.sessionTitle30       = false;
        $scope.sessionTitle31       = false;
        $scope.sessionTitle32       = false;
        $scope.sessionTitle33       = false;
        $scope.sessionTitle34       = false;
        $scope.sessionTitle35       = false;
        $scope.sessionTitle36       = false;
        $scope.sessionTitle37       = false;

        $scope.bookeCheckup         = true;
        $scope.bookDiscovery8       = true
        $scope.bookDiscovery9       = true;
        $scope.bookDiscovery18      = true;
        $scope.bookDiscovery19      = true;
        $scope.bookDiscovery28      = true;
        $scope.bookDiscovery29      = true;
        $scope.bookDiscovery39      = true;
        $scope.bookDiscovery49      = true;
        $scope.bookDiscovery59      = true;
        $scope.bookDiscovery10      = true;
        $scope.bookDiscovery110     = true;
        $scope.bookDiscovery210     = true;
        $scope.bookDiscovery310     = true;
        $scope.bookDiscovery410     = true;
        $scope.bookDiscovery510     = true;
        $scope.bookDiscovery11      = true;
        $scope.bookDiscovery111     = true;
        $scope.bookDiscovery211     = true;
        $scope.bookDiscovery311     = true;
        $scope.bookDiscovery411     = true;
        $scope.bookDiscovery511     = true;
        $scope.bookDiscovery12      = true;
        $scope.bookDiscovery112     = true;
        $scope.bookDiscovery212     = true;
        $scope.bookDiscovery312     = true;
        $scope.bookDiscovery412     = true;
        $scope.bookDiscovery512     = true;
        $scope.bookDiscovery1       = true;
        $scope.bookDiscovery11      = true;
        $scope.bookDiscovery21      = true;
        $scope.bookDiscovery31      = true;
        $scope.bookDiscovery41      = true;
        $scope.bookDiscovery51      = true;
        $scope.bookDiscovery2       = true;
        $scope.bookDiscovery102     = true;
        $scope.bookDiscovery22      = true;
        $scope.bookDiscovery32      = true;
        $scope.bookDiscovery42      = true;
        $scope.bookDiscovery52      = true;
        $scope.bookDiscovery3       = true;
        $scope.bookDiscovery13      = true;
        $scope.bookDiscovery23      = true;
        $scope.bookDiscovery33      = true;
        $scope.bookDiscovery43      = true;
        $scope.bookDiscovery53      = true;
        $scope.bookDiscovery38      = true;
        $scope.bookDiscovery48      = true;
        $scope.bookDiscovery58      = true;

        $scope.bookSession8         = true
        $scope.bookSession9         = true;
        $scope.bookSession18        = true;
        $scope.bookSession19        = true;
        $scope.bookSession28        = true;
        $scope.bookSession29        = true;
        $scope.bookSession39        = true;
        $scope.bookSession49        = true;
        $scope.bookSession59        = true;
        $scope.bookSession10        = true;
        $scope.bookSession110       = true;
        $scope.bookSession210       = true;
        $scope.bookSession310       = true;
        $scope.bookSession410       = true;
        $scope.bookSession510       = true;
        $scope.bookSession11        = true;
        $scope.bookSession111       = true;
        $scope.bookSession211       = true;
        $scope.bookSession311       = true;
        $scope.bookSession411       = true;
        $scope.bookSession511       = true;
        $scope.bookSession12        = true;
        $scope.bookSession112       = true;
        $scope.bookSession212       = true;
        $scope.bookSession312       = true;
        $scope.bookSession412       = true;
        $scope.bookSession512       = true;
        $scope.bookSession1         = true;
        $scope.bookSession11        = true;
        $scope.bookSession21        = true;
        $scope.bookSession31        = true;
        $scope.bookSession41        = true;
        $scope.bookSession51        = true;
        $scope.bookSession2         = true;
        $scope.bookSession102       = true;
        $scope.bookSession22        = true;
        $scope.bookSession32        = true;
        $scope.bookSession42        = true;
        $scope.bookSession52        = true;
        $scope.bookSession3         = true;
        $scope.bookSession13        = true;
        $scope.bookSession23        = true;
        $scope.bookSession33        = true;
        $scope.bookSession43        = true;
        $scope.bookSession53        = true;
        $scope.bookSession38        = true;
        $scope.bookSession48        = true;
        $scope.bookSession58        = true;

        $scope.bookCheckUp8         = true
        $scope.bookCheckUp9         = true;
        $scope.bookCheckUp18        = true;
        $scope.bookCheckUp19        = true;
        $scope.bookCheckUp28        = true;
        $scope.bookCheckUp29        = true;
        $scope.bookCheckUp39        = true;
        $scope.bookCheckUp49        = true;
        $scope.bookCheckUp59        = true;
        $scope.bookCheckUp10        = true;
        $scope.bookCheckUp110       = true;
        $scope.bookCheckUp210       = true;
        $scope.bookCheckUp310       = true;
        $scope.bookCheckUp410       = true;
        $scope.bookCheckUp510       = true;
        $scope.bookCheckUp11        = true;
        $scope.bookCheckUp111       = true;
        $scope.bookCheckUp211       = true;
        $scope.bookCheckUp311       = true;
        $scope.bookCheckUp411       = true;
        $scope.bookCheckUp511       = true;
        $scope.bookCheckUp12        = true;
        $scope.bookCheckUp112       = true;
        $scope.bookCheckUp212       = true;
        $scope.bookCheckUp312       = true;
        $scope.bookCheckUp412       = true;
        $scope.bookCheckUp512       = true;
        $scope.bookCheckUp1         = true;
        $scope.bookCheckUp101       = true;
        $scope.bookCheckUp21        = true;
        $scope.bookCheckUp31        = true;
        $scope.bookCheckUp41        = true;
        $scope.bookCheckUp51        = true;
        $scope.bookCheckUp2         = true;
        $scope.bookCheckUp102       = true;
        $scope.bookCheckUp22        = true;
        $scope.bookCheckUp32        = true;
        $scope.bookCheckUp42        = true;
        $scope.bookCheckUp52        = true;
        $scope.bookCheckUp3         = true;
        $scope.bookCheckUp13        = true;
        $scope.bookCheckUp23        = true;
        $scope.bookCheckUp33        = true;
        $scope.bookCheckUp43        = true;
        $scope.bookCheckUp53        = true;
        $scope.bookCheckUp38        = true;
        $scope.bookCheckUp48        = true;
        $scope.bookCheckUp58        = true;

        $scope.hourAvailable8       = true;
        $scope.hourAvailable9       = true;
        $scope.hourAvailable10      = true;
        $scope.hourAvailable11      = true;
        $scope.hourAvailable12      = true;
        $scope.hourAvailable1       = true;
        $scope.hourAvailable2       = true;
        $scope.hourAvailable3       = true;

        $scope.appointmentTypeAvailable = true;

        $scope.appointmentType = "checkup";



        $scope.changeBookingLeft = function () {

            $scope.shinebrighttap.play()

            if ($scope.currentBooking !== 0) {

                $scope.currentBooking = $scope.currentBooking - 1

            } else {

                $scope.currentBooking = $scope.bookings.length - 1

            }

        }

        $scope.changeBookingRight = function () {

            $scope.shinebrighttap.play()

            User.getUser($scope.idFromLocalStorage).then(function (data) {

                $scope.currentUserBookingsArray     = data.data.user.bookings;
                console.log($scope.currentUserBookingsArray.length)
                $scope.currentBooking               = data.data.user.bookings.length - 1;

                if ($scope.currentBooking < $scope.bookings.length -1 ) {

                    $scope.currentBooking = $scope.currentBooking + 1;

                } else {

                    $scope.currentBooking = 0;

                }    
            
            })

        }

        $scope.openMessagePage = function () {

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            $scope.audio.play()

            if (!$scope.messagePageOpen) {

                $scope.schedulePageOpen = false;
                $scope.currentIndex = null;
                $scope.infoPageOpen = false;
                $scope.adminBookingsPageOpen = false;
                $scope.messagePageOpen = true;
                $scope.bookedJobsPageOpened = false;
                $scope.chartsPageOpen = false;
                $scope.historyPageOpenProfile = false;
                $scope.messagePageSelected = true;
                $scope.amountPending = 0;
                $scope.messagesLoading = true;
                $scope.usersForPagination = []
                $scope.usersPaginated = []
                $scope.messageForPagination = [];
                $scope.messagesPaginated = [];
                $scope.pageLimit = 4;
                $scope.pageLimitUsers = 4;


                User.getMessages($scope.idFromLocalStorage).then(function (data) {

                    $scope.messagesArray = data.data.messages;

                    for (var i = 0; i <= $scope.messagesArray.length; i++) {

                        var page = 0;

                        if (i < $scope.pageLimit) {

                        }
                        if (i < $scope.messagesArray.length) {

                        }

                        if (i < $scope.pageLimit && i < $scope.messagesArray.length) {

                            if ($scope.messagesArray[i]) {

                                $scope.messagesArray[i].messageIndex = i
                                $scope.messageForPagination.push($scope.messagesArray[i])

                            }

                        } else {

                            if (!$scope.usersLoaded) {

                                $scope.loadingUsers = false;
                                $scope.messagesPaginated.push($scope.messageForPagination)
                                $scope.messageForPagination = [];

                                if ($scope.messagesArray[i] !== undefined) {

                                    $scope.messagesArray[i].messageIndex = i
                                    $scope.messageForPagination.push($scope.messagesArray[i])

                                }

                                $scope.pageLimit = $scope.pageLimit + 4;
                                page++

                            }

                        }

                    }
                })


            } else {

                $scope.composeMessagePageOpen = false;

            }
        }

        $scope.markAsCompleted = function(currentbooking){ 

            $scope.shinebrightloading.play()

            if(currentbooking <= -1){

            }else{
                
                $scope.shinebrightloading.play()


                User.getUser($scope.idFromLocalStorage).then(function (data) {

                    $scope.bookingInfo.currentbooking   = data.data.user.bookings.length-1
                    $scope.bookingInfo.currentbooking   = currentbooking;
                    $scope.currentBooking               = currentbooking;
    
                    User.markBookingAsNotCompleted($scope.bookingInfo).then(function(data){
    
    
                        $scope.currentUserBookingsArray = data.data.user.bookings
    
                        $timeout(function(){
    
                            $scope.loadingBookingStatus = false;
    
                            $scope.shinebrightsuccess.play()
    
                        },1000)
        
                    })
    
                })


            }

            
           

        }

        $scope.deleteBooking = function(currentbooking){

            $scope.loadingBookingDeletion       = true;

            User.getUser($scope.idFromLocalStorage).then(function (data) {

            $scope.bookingInfo.currentbooking   = data.data.user.bookings.length-1
            console.log("bookinginfo")
            console.log($scope.bookingInfo)

            
            User.deleteBooking($scope.bookingInfo).then(function(data){

                console.log(data)

                $scope.currentUserBookingsArray = data.data.user.bookings
                $scope.currentBooking           = $scope.currentBooking - 1

                $timeout(function(){

                    $scope.loadingBookingDeletion = false;

                },1000)
    
            })

        })

        }

        $scope.markAsNotCompleted = function(currentbooking){


            $scope.loadingBookingStatus         = true;

            if(currentbooking <= -1){

            }else{

                $scope.shinebrightloading.play()


                User.getUser($scope.idFromLocalStorage).then(function (data) {

                    $scope.bookingInfo.currentbooking   = data.data.user.bookings.length-1
                    $scope.bookingInfo.currentbooking   = currentbooking;
                    $scope.currentBooking               = currentbooking;
    
                    User.markBookingAsNotCompleted($scope.bookingInfo).then(function(data){
    
    
                        $scope.currentUserBookingsArray = data.data.user.bookings
    
                        $timeout(function(){
    
                            $scope.loadingBookingStatus = false;
    
                            $scope.shinebrightsuccess.play()
    
                        },1000)
        
                    })
    
                })


            }

            
            
        }

        $scope.submitMessage2 = function () {

            if($scope.messageObject.subject == ""){

                $scope.messageSubjectCannotBeEmpty = true;

            }

            if($scope.messageObject.body == ""){

                $scope.messageBodyCannotBeEmpty     = true;

            }

            if($scope.messageObject.body    !== "" &&
               $scope.messageObject.subject !== ""){
                
                $scope.messageBodyCannotBeEmpty     = false;
                $scope.messageSubjectCannotBeEmpty  = false;
                $scope.sendingMessage               = true
                $scope.shinebrightloading.play()

                $timeout(function () {

                User.messageAdmin($scope.messageObject).then(function (data) {

                    $scope.sendingMessage = false
                    $scope.messageSent = true;
                    $scope.shinebrightsuccess.play()

                    $timeout(function () {

                        $scope.messageSent = false;
                        $scope.messageObject.subject = ""
                        $scope.messageObject.body = ""

                    }, 2500)

                })

                }, 2500)
            }

        }

        $scope.openScheduledJobPage = function (currentdate, id, datecondensed) {

            $scope.id = id
            $scope.dateCondensed = datecondensed

            if (!$scope.scheduledJobPageOpen) {

                $scope.scheduledJobPageOpen = true;
                $scope.currentDate = currentdate

                User.getDate(id).then(function (data) {

                    $scope.dateInfo = data.data.date

                    console.log("Date Eight", data.data.date['eight'].state)

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionAvailable8 = true;
                        $scope.discoveryAvailable8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $socpe.discoveryFull8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;


                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionAlmostFull8 = true;
                        $scope.discoveryAvailable8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionFull8 = false;;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;


                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAvailable8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAvaialble8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;
                        

                        console.log(820)

                    }


                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;


                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;


                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmsotFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpAvailable8 = false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;


                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.chjeckUpFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpFull8 = false;

                        console.log(820)

                    }


                    if (data.data.date['eight'].state[0]    == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sesionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAvailable8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0]    == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAvailable8 = false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAvailable8  = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAvailable8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAvailble8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable8 = false;
                        $scope.checkUpFull8 = false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAvaialable8 = false; 

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAvailable8 = false;
                        $scope.sessionAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpFull8 = false;
                        $scope.checkUpAlmostFull8 = false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sesionAvailable8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.checkUpFull8 =false;
                        $scope.checkUpAlmostFull8 = false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.checkUpAlmostFull8 = false;
                        $scope.checkUpFull8 = false;
                        

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAvailable= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionAlmostFull8 = true;
                        $scope.discoveryAvailable8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionAlmostFull8 = true;
                        $scope.discoveryAlvailable8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryFull8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)
                    }
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAvailable8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8 = true;
                        $scope.discoveryFull8 = true;
                        $scope.checkUpAlmostFull8 = true;
                        $scope.sessionAlmostFull8 = false;
                        $scope.sessionAvailable8 = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8 = false;
                        $scope.checkUpAlmostFull8= false;
                        $scope.checkUpFull8= false;

                        console.log(820)

                    }

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
        
        
                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;
        
        
                    console.log(820)
        
                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
    
                $scope.sessionFull8 = true;
                $scope.discoveryFull8 = true;
                $scope.checkUpAvailable8 = true;
                $scope.sessionAlmostFull8 = false;
                $scope.sessionAvailable8 = false;
                $scope.discoveryAlmostFull8 = false;
                $scope.discoveryAvailable8 = false;
                $scope.checkUpAvailable8 = false;
                $scope.checkUpFull8 = false;
    
    
                console.log(820)
    
            }
                
            if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


            $scope.sessionFull8 = true;
            $scope.discoveryFull8 = true;
            $scope.checkUpAvailable8 = true;
            $scope.sessionAlmostFull8 = false;
            $scope.sessionAvailable8 = false;
            $scope.discoveryAlmostFull8 = false;
            $scope.discoveryAvailable8 = false;
            $scope.checkUpAvailable8 = false;
            $scope.checkUpFull8 = false;


            console.log(820)

        }
        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


        $scope.sessionFull8 = true;
        $scope.discoveryFull8 = true;
        $scope.checkUpAvailable8 = true;
        $scope.sessionAlmostFull8 = false;
        $scope.sessionAvailable8 = false;
        $scope.discoveryAlmostFull8 = false;
        $scope.discoveryAvailable8 = false;
        $scope.checkUpAlmostFull8 = false;
        $scope.checkUpFull8 = false;


        console.log(820)

    }
           
        
                    console.log("Date Nine", data.data.date['nine'].state)
        

                    if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
        
        
                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
        
        
                    console.log(920)
        
                }
                       
                       
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
        
        
                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;
        
        
                    console.log(920)
        
                }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
        
        
                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;
        
        
                    console.log(920)
        
                }

                    console.log("Date Nine", data.data.date['nine'].state)

                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionAvailable9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $socpe.discoveryFull9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;


                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionAlmostFull9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionFull9 = false;;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;


                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvaialble9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    

                    console.log(920)

                }


                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;


                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;


                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmsotFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;


                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.chjeckUpFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpFull9 = false;

                    console.log(920)

                }


                if (data.data.date['nine'].state[0]    == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sesionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0]    == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAvailable9  = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvailable9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAvailble9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable9 = false;
                    $scope.checkUpFull9 = false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAvaialable9 = false; 

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAvailable9 = false;
                    $scope.sessionAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpFull9 = false;
                    $scope.checkUpAlmostFull9 = false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sesionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.checkUpFull9 =false;
                    $scope.checkUpAlmostFull9 = false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.checkUpAlmostFull9 = false;
                    $scope.checkUpFull9 = false;
                    

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAvailable= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryAlmostFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionAlmostFull9 = true;
                    $scope.discoveryAvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionAlmostFull9 = true;
                    $scope.discoveryAlvailable9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryFull9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)
                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAvailable9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                    $scope.sessionFull9 = true;
                    $scope.discoveryFull9 = true;
                    $scope.checkUpAlmostFull9 = true;
                    $scope.sessionAlmostFull9 = false;
                    $scope.sessionAvailable9 = false;
                    $scope.discoveryAlmostFull9 = false;
                    $scope.discoveryAvailable9 = false;
                    $scope.checkUpAlmostFull9= false;
                    $scope.checkUpFull9= false;

                    console.log(920)

                }



                })

            }
        }

        $scope.exitScheduledJobPage = function () {

            if ($scope.scheduledJobPageOpen) {

                $scope.scheduledJobPageOpen = false;
                $scope.shinebrighttap.play()

            }

        }

        $scope.openBookingPage = function (slot) {

            $scope.slot                     = slot;
            $scope.hour                     = slot;
            $scope.bookingPageOpen          = true;
            $scope.scheduledJobPageOpen     = false;
            $scope.scheduleSDOrCiPageOpen   = false;
            $scope.discovery800AMIsBooked   = false;
            $scope.discovery810AMIsBooked   = false;
            $scope.discovery820AMIsBooked   = false;
            $scope.discovery830AMIsBooked   = false;
            $scope.discovery840AMIsBooked   = false;
            $scope.discovery850AMIsBooked   = false;
            $scope.session800AMIsBooked     = false;
            $scope.session810AMIsBooked     = false;
            $scope.session820AMIsBooked     = false;
            $scope.session830AMIsBooked     = false;
            $scope.session840AMIsBooked     = false;
            $scope.session850AMIsBooked     = false;
            $scope.checkUp800AMIsBooked     = false;
            $scope.checkUp810AMIsBooked     = false;
            $scope.checkUp820AMIsBooked     = false;
            $scope.checkUp830AMIsBooked     = false;
            $scope.checkUp840AMIsBooked     = false;
            $scope.checkUp850AMIsBooked     = false;
            $scope.discovery900AMIsBooked   = false;
            $scope.discovery910AMIsBooked   = false;
            $scope.discovery920AMIsBooked   = false;
            $scope.discovery930AMIsBooked   = false;
            $scope.discovery940AMIsBooked   = false;
            $scope.discovery950AMIsBooked   = false;
            $scope.session900AMIsBooked     = false;
            $scope.session910AMIsBooked     = false;
            $scope.session920AMIsBooked     = false;
            $scope.session930AMIsBooked     = false;
            $scope.session940AMIsBooked     = false;
            $scope.session950AMIsBooked     = false;
            $scope.checkUp900AMIsBooked     = false;
            $scope.checkUp910AMIsBooked     = false;
            $scope.checkUp920AMIsBooked     = false;
            $scope.checkUp930AMIsBooked     = false;
            $scope.checkUp940AMIsBooked     = false;
            $scope.checkUp950AMIsBooked     = false;
            $scope.globalDateInformation    = {};

            console.log("Check Up Page Open", $scope.checkUpPageOpen)
            console.log("Discovery Page Open", $scope.discoveryPageOpen)
            console.log("Session Page Open", $scope.sessionPageOpen)
            console.log("Appointment Type", $scope.appointmentType)

            User.getDate($scope.id).then(function (data) {

                console.log("Date Data For Open Booking Page...")
                console.log(data)
                console.log(data.data.date[$scope.hour].state)
                $scope.globalDateInformation = data.data.date;
                console.log("Appointment Type", $scope.appointmentType)

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

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery9 = false;
                            //$scope.bookDiscovery19  = false;
                            //$scope.bookDiscovery29  = false;

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

                if ($scope.appointmentType == "checkup") {


                    if ($scope.hour == "eight") {

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
                    if ($scope.hour == "nine") {

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

                }

                if ($scope.appointmentType == "session") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession8 = false;
                            $scope.bookSession18 = false;
                            $scope.bookSession28 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {


                            $scope.bookSession18 = false;
                            $scope.bookSession28 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession58 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession28 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession58 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession38 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession58 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession48 = false;
                            $scope.bookSession58 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;
                            $scope.bookSession18 = false;
                            console.log("Messages")

                        }
                    }

                    if ($scope.hour == "nine") {

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

        }

        $scope.exitBookingPage = function(){

            $scope.bookingPageOpen      = false;
            $scope.scheduledJobPageOpen = true;

            User.getDate($scope.id).then(function (data) {

                $scope.dateInfo = data.data.date

                console.log("Date Eight", data.data.date['eight'].state)

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionAvailable8 = true;
                    $scope.discoveryAvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $socpe.discoveryFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;


                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionAlmostFull8 = true;
                    $scope.discoveryAvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionFull8 = false;;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;


                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAvaialble8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;
                    

                    console.log(820)

                }


                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;


                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;


                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmsotFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpAvailable8 = false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;


                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.chjeckUpFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpFull8 = false;

                    console.log(820)

                }


                if (data.data.date['eight'].state[0]    == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sesionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvailable8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0]    == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvailable8 = false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAvailable8  = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvailable8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAvailble8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable8 = false;
                    $scope.checkUpFull8 = false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAvaialable8 = false; 

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAvailable8 = false;
                    $scope.sessionAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpFull8 = false;
                    $scope.checkUpAlmostFull8 = false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sesionAvailable8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpFull8 =false;
                    $scope.checkUpAlmostFull8 = false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.checkUpAlmostFull8 = false;
                    $scope.checkUpFull8 = false;
                    

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAvailable= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryAlmostFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionAlmostFull8 = true;
                    $scope.discoveryAvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionAlmostFull8 = true;
                    $scope.discoveryAlvailable8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryFull8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)
                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAvailable8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                    && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {


                    $scope.sessionFull8 = true;
                    $scope.discoveryFull8 = true;
                    $scope.checkUpAlmostFull8 = true;
                    $scope.sessionAlmostFull8 = false;
                    $scope.sessionAvailable8 = false;
                    $scope.discoveryAlmostFull8 = false;
                    $scope.discoveryAvailable8 = false;
                    $scope.checkUpAlmostFull8= false;
                    $scope.checkUpFull8= false;

                    console.log(820)

                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
    
                $scope.sessionFull8 = true;
                $scope.discoveryFull8 = true;
                $scope.checkUpAlmostFull8 = true;
                $scope.sessionAlmostFull8 = false;
                $scope.sessionAvailable8 = false;
                $scope.discoveryAlmostFull8 = false;
                $scope.discoveryAvailable8 = false;
                $scope.checkUpAvailable8 = false;
                $scope.checkUpFull8 = false;
    
    
                console.log(820)
    
            }
            if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {


            $scope.sessionFull8 = true;
            $scope.discoveryFull8 = true;
            $scope.checkUpAvailable8 = true;
            $scope.sessionAlmostFull8 = false;
            $scope.sessionAvailable8 = false;
            $scope.discoveryAlmostFull8 = false;
            $scope.discoveryAvailable8 = false;
            $scope.checkUpAvailable8 = false;
            $scope.checkUpFull8 = false;


            console.log(820)

        }
            
        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


        $scope.sessionFull8 = true;
        $scope.discoveryFull8 = true;
        $scope.checkUpAvailable8 = true;
        $scope.sessionAlmostFull8 = false;
        $scope.sessionAvailable8 = false;
        $scope.discoveryAlmostFull8 = false;
        $scope.discoveryAvailable8 = false;
        $scope.checkUpAvailable8 = false;
        $scope.checkUpFull8 = false;


        console.log(820)

    }
    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


    $scope.sessionFull8 = true;
    $scope.discoveryFull8 = true;
    $scope.checkUpAvailable8 = true;
    $scope.sessionAlmostFull8 = false;
    $scope.sessionAvailable8 = false;
    $scope.discoveryAlmostFull8 = false;
    $scope.discoveryAvailable8 = false;
    $scope.checkUpAlmostFull8 = false;
    $scope.checkUpFull8 = false;


    console.log(820)

}
       
    
                console.log("Date Nine", data.data.date['nine'].state)
    

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
    
                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;
    
    
                console.log(920)
    
            }
                   
                   
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
    
                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;
    
    
                console.log(920)
    
            }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
    
                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;
    
    
                console.log(920)
    
            }

                console.log("Date Nine", data.data.date['nine'].state)

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionAvailable9 = true;
                $scope.discoveryAvailable9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $socpe.discoveryFull9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;


                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
            && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionAlmostFull9 = true;
                $scope.discoveryAvailable9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionFull9 = false;;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
            && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
            && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
            && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;


                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAvailable9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryFull9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAvaialble9 = false;
                $scope.discoveryFull9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;
                

                console.log(920)

            }


            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;


                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;


                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmsotFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpAvailable9 = false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;
                

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;


                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.chjeckUpFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.checkUpFull9 = false;

                console.log(920)

            }


            if (data.data.date['nine'].state[0]    == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sesionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.checkUpAvailable9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0]    == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.checkUpAvailable9 = false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAvailable9  = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.checkUpAvailable9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAvailble9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable9 = false;
                $scope.checkUpFull9 = false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.checkUpFull9 = false;
                $scope.checkUpAvaialable9 = false; 

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAvailable9 = false;
                $scope.sessionAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpFull9 = false;
                $scope.checkUpAlmostFull9 = false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sesionAvailable9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.checkUpFull9 =false;
                $scope.checkUpAlmostFull9 = false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.checkUpAlmostFull9 = false;
                $scope.checkUpFull9 = false;
                

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAvailable= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryAlmostFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionAlmostFull9 = true;
                $scope.discoveryAvailable9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionAlmostFull9 = true;
                $scope.discoveryAlvailable9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryFull9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }
            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)
            }
            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAvailable9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }

            if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {


                $scope.sessionFull9 = true;
                $scope.discoveryFull9 = true;
                $scope.checkUpAlmostFull9 = true;
                $scope.sessionAlmostFull9 = false;
                $scope.sessionAvailable9 = false;
                $scope.discoveryAlmostFull9 = false;
                $scope.discoveryAvailable9 = false;
                $scope.checkUpAlmostFull9= false;
                $scope.checkUpFull9= false;

                console.log(920)

            }



            })
            $scope.shinebrighttap.play()

        }

        $scope.openMessagePageToCompose = function () {

            $('html, body').animate({ scrollTop: 0 }, 'fast');

            if (!$scope.messagePageOpen) {

                $scope.schedulePageOpen         = false;
                $scope.currentIndex             = null;
                $scope.infoPageOpen             = false;
                $scope.adminBookingsPageOpen    = false;
                $scope.messagePageOpen          = true;
                $scope.bookedJobsPageOpened     = false;
                $scope.chartsPageOpen           = false;
                $scope.historyPageOpenProfile   = false;
                $scope.messagePageSelected      = true;
                $scope.amountPending            = 0;
                $scope.messagesLoading          = true;
                $scope.usersForPagination       = []
                $scope.usersPaginated           = []
                $scope.messageForPagination     = [];
                $scope.messagesPaginated        = [];
                $scope.pageLimit                = 4;
                $scope.pageLimitUsers           = 4;

                User.getMessages($scope.idFromLocalStorage).then(function (data) {

                    $scope.messagesArray = data.data.messages;

                    for (var i = 0; i <= $scope.messagesArray.length; i++) {

                        var page = 0;

                        if (i < $scope.pageLimit) {

                        }

                        if (i < $scope.messagesArray.length) {

                        }

                        if (i < $scope.pageLimit && i < $scope.messagesArray.length) {

                            if ($scope.messagesArray[i]) {

                                $scope.messagesArray[i].messageIndex = i
                                $scope.messageForPagination.push($scope.messagesArray[i])

                            }

                        } else {

                            if (!$scope.usersLoaded) {

                                $scope.loadingUsers             = false;
                                $scope.composeMessagePageOpen   = true;
                                $scope.messagesPaginated.push($scope.messageForPagination)
                                $scope.messageForPagination     = [];

                                if ($scope.messagesArray[i] !== undefined) {

                                    $scope.messagesArray[i].messageIndex = i
                                    $scope.messageForPagination.push($scope.messagesArray[i])

                                }

                                $scope.pageLimit = $scope.pageLimit + 4;
                                page++

                            }

                        }

                    }
                })

            } else {

                $scope.composeMessagePageOpen = false;

            }

        }

        $scope.openSchedulePage = function () {

            $scope.schedulePageOpen             = true;
            $scope.infoPageOpen                 = false;
            $scope.messagePageOpen              = false;
            $scope.messageSubjectCannotBeEmpty  = false;
            $scope.messageBodyCannotBeEmpty     = false;
            $scope.bookingsPageOpen             = false;


            $scope.audio.play()

            /*

            if ($scope.personalCalender[$scope.month][1]) {

                $scope.booked121 = true;

            }
            if ($scope.personalCalender[$scope.month][2]) {

                $scope.booked122 = true;

            }
            if ($scope.personalCalender[$scope.month][3]) {

                $scope.booked123 = true;

            }
            if ($scope.personalCalender[$scope.month][4]) {

                $scope.booked124 = true;

            }
            if ($scope.personalCalender[$scope.month][5]) {

                $scope.booked125 = true;

            }
            if ($scope.personalCalender[$scope.month][6]) {

                $scope.booked126 = true;

            }
            if ($scope.personalCalender[$scope.month][7]) {

                $scope.booked127 = true;

            }
            if ($scope.personalCalender[$scope.month][8]) {

                $scope.booked128 = true;

            }
            if ($scope.personalCalender[$scope.month][9]) {

                $scope.booked129 = true;

            }
            if ($scope.personalCalender[$scope.month][10]) {

                $scope.booked1210 = true;

            }
            if ($scope.personalCalender[$scope.month][11]) {

                $scope.booked1211 = true;

            }
            if ($scope.personalCalender[$scope.month][12]) {

                $scope.booked1212 = true;

            }
            if ($scope.personalCalender[$scope.month][13]) {

                $scope.booked1213 = true;

            }
            if ($scope.personalCalender[$scope.month][14]) {

                $scope.booked1214 = true;

            }
            if ($scope.personalCalender[$scope.month][15]) {

                $scope.booked1215 = true;

            }
            if ($scope.personalCalender[$scope.month][16]) {

                $scope.booked1216 = true;

            }
            if ($scope.personalCalender[$scope.month][17]) {

                $scope.booked1217 = true;

            }
            if ($scope.personalCalender[$scope.month][18]) {

                $scope.booked1218 = true;

            }
            if ($scope.personalCalender[$scope.month][19]) {

                $scope.booked1219 = true;

            }
            if ($scope.personalCalender[$scope.month][20]) {

                $scope.booked1220 = true;

            }
            if ($scope.personalCalender[$scope.month][21]) {

                $scope.booked1221 = true;

            }
            if ($scope.personalCalender[$scope.month][22]) {

                $scope.booked1222 = true;

            }
            if ($scope.personalCalender[$scope.month][23]) {

                $scope.booked1223 = true;

            }
            if ($scope.personalCalender[$scope.month][24]) {

                $scope.booked1224 = true;

            }
            if ($scope.personalCalender[$scope.month][25]) {

                $scope.booked1225 = true;

            }
            if ($scope.personalCalender[$scope.month][26]) {

                $scope.booked1226 = true;

            }
            if ($scope.personalCalender[$scope.month][27]) {

                $scope.booked1227 = true;

            }
            if ($scope.personalCalender[$scope.month][28]) {

                $scope.booked1228 = true;

            }
            if ($scope.personalCalender[$scope.month][29]) {

                $scope.booked1229 = true;

            }
            if ($scope.personalCalender[$scope.month][30]) {

                $scope.booked1230 = true;

            }
            if ($scope.personalCalender[$scope.month][31]) {

                $scope.booked1231 = true;

            }

            */
            $scope.infoPageOpen = false;
            $scope.timesheetPageOpen = false;
            $scope.messagePageOpen = false;


        }

        $scope.openInfoPage = function () {


            $scope.infoPageOpen                 = true;
            $scope.schedulePageOpen             = false;
            $scope.timesheetPageOpen            = false;
            $scope.messagePageOpen              = false;
            $scope.messageBodyCannotBeEmpty     = false;
            $scope.messageSubjectCannotBeEmpty  = false;
            $scope.adminBookingsPageOpen        = false;
            $scope.heyLeah                      = false;
            $scope.bookingsPageOpen             = false;
            $scope.adminBookingsPageOpen        = false;
            $scope.loadingAmountPending         = true;
            $scope.loadingClientBookings        = true;
            
            $scope.audio.play()
           
            User.getUser($scope.idFromLocalStorage).then(function (data) {

                $scope.clientName               = data.data.user.name
                $scope.clientEmail              = data.data.user.email
                $scope.clientPhone              = data.data.user.phonenumber
                $scope.personalCalender         = data.data.user.calender
                $scope.bookings                 = data.data.user.bookings
                $scope.currentUserBookingsArray = data.data.user.bookings
                $scope.messageArray             = data.data.user.messages
                $scope.allBookingsArray         = []
                $scope.currentBooking           = data.data.user.bookings.length - 1
                $scope.userType                 = data.data.user.userclass

                $timeout(function(){
                
                    $scope.loadingClientBookings = false;
        
                },2000)
                        if (data.data.user.calender[$scope.month][1]) {
                            $scope.booked121 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][2]) {
                            $scope.booked122 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][3]) {
                            $scope.booked123 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][4]) {
                            $scope.booked124 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][5]) {
                            $scope.booked125 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][6]) {
                            $scope.booked126 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][7]) {
                            $scope.booked127 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][8]) {
                            $scope.booked128 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][9]) {
                            $scope.booked129 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][10]) {
                            $scope.booked1210 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][11]) {
                            $scope.booked1211 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][12]) {
                            $scope.booked1212 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][13]) {
                            $scope.booked1213 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][14]) {
                            $scope.booked1214 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][15]) {
                            $scope.booked1215 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][16]) {
                            $scope.booked1216 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][17]) {
                            $scope.booked1217 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][18]) {
                            $scope.booked1218 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][19]) {
                            $scope.booked1219 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][20]) {
                            $scope.booked1220 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][21]) {
                            $scope.booked1221 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][22]) {
                            $scope.booked1222 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][23]) {
                            $scope.booked1223 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][24]) {
                            $scope.booked1224 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][25]) {
                            $scope.booked1225 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][26]) {
                            $scope.booked1226 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][27]) {
                            $scope.booked1227 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][28]) {
                            $scope.booked1228 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][29]) {
                            $scope.booked1229 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][30]) {
                            $scope.booked1230 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender[$scope.month][31]) {
                            $scope.booked1231 = true;
                            //console.log("hero")
                        }
      
            })

        }

        $scope.submitDiscovery = function (hour) {

            console.log("$SCOPE.DISCOVERYDATA", $scope.discoveryData)

            $scope.shinebrightloading.play();

            if ($scope.discoveryData.time == "8:00am" || $scope.discoveryData.time == "9:00am" ||
                $scope.discoveryData.time == "10:00am" || $scope.discoveryData.time == "11:00am" ||
                $scope.discoveryData.time == "12:00pm" || $scope.discoveryData.time == "1:00pm" ||
                $scope.discoveryData.time == "2:00pm" || $scope.discoveryData.time == "3:00pm") {


                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2;
                $scope.dateInfo[2] = 2;
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id;

                $scope.loadingBooking = true;
                console.log("Proper Loading?")


                console.log("$SCOPE.DATEDATA", $scope.dateData)

                User.getDate($scope.id).then(function (data) {

                    console.log("GET DATE DATA", data)
                    data.data.date[hour].state[0] = 2
                    data.data.date[hour].state[1] = 2
                    data.data.date[hour].state[2] = 2
                    $scope.dateData.dateInfo = data.data.date[hour].state
                    console.log("dateData", $scope.dateData)

                    User.updateDate($scope.dateData).then(function (data) {

                        console.log("UPDATE DATE DATA", data)

                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery8AMSelected = false;
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery9AMSelected = false;


                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[0] === 2) {

                                $scope.bookDiscovery8 = false;
                                $scope.bookDiscovery9 = false;

                                $timeout(function () {

                                    $scope.bookDiscovery18 = false;
                                    $scope.bookDiscovery19 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery28 = false;
                                        $scope.bookDiscovery29 = false;

                                        $timeout(function () {

                                            $scope.loadingBooking = false;
                                            $scope.shinebrightsuccess.play()

                                        }, 500)

                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                    })

                })

            }

            if ($scope.discoveryData.time == "8:10am" || $scope.discoveryData.time == "9:10am" ||
                $scope.discoveryData.time == "10:10am" || $scope.discoveryData.time == "11:10am" ||
                $scope.discoveryData.time == "12:10pm" || $scope.discoveryData.time == "1:10pm" ||
                $scope.discoveryData.time == "2:10pm" || $scope.discoveryData.time == "3:10pm") {

                $scope.dateInfo[1] = 2;
                $scope.dateInfo[2] = 2
                $scope.dateInfo[3] = 2
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id
                $scope.bookDiscovery = false;
                $scope.loadingBooking1 = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[1] = 2
                    data.data.date[hour].state[2] = 2
                    data.data.date[hour].state[3] = 2

                    $scope.dateData.dateInfo = data.data.date[hour].state

                    if (data.data.date[hour].state[4] === 2) {

                        $scope.discovery810AMNoRoom = true;
                        $scope.shinebrighterror.play()
                        console.log("NO ROOM TO BOOOK", hour)

                    } else {

                        User.updateDate($scope.dateData).then(function (data) {

                            $scope.dateDataForUser.date = $scope.currentDate;

                            $timeout(function () {

                                if (data.data.date[hour].state[1] === 2) {

                                    $scope.bookDiscovery8 = false;
                                    $scope.bookDiscovery9 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery18 = false;
                                        $scope.bookDiscovery19 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery28 = false;
                                            $scope.bookDiscovery29 = false;

                                            $timeout(function () {

                                                $scope.bookDiscovery38 = false;
                                                $scope.bookDiscovery39 = false;

                                                $timeout(function () {

                                                    $scope.loadingBooking1 = false;
                                                    $scope.shinebrightsuccess.play()

                                                }, 500)

                                            }, 500)

                                        }, 500)

                                    }, 500)


                                }

                            }, 1000)

                            if ($scope.discoveryData.time == "8:10am") {

                                $scope.dateDataForUser.time = "8:10am - 8:40am"

                            }
                            if ($scope.discoveryData.time == "9:10am") {

                                $scope.dateDataForUser.time = "9:10am - 9:40am"

                            }
                            if ($scope.discoveryData.time == "10:10am") {

                                $scope.dateDataForUser.time = "10:10am - 10:40am"

                            }
                            if ($scope.discoveryData.time == "11:10am") {

                                $scope.dateDataForUser.time = "11:10am - 11:40am"

                            }
                            if ($scope.discoveryData.time == "12:10am") {

                                $scope.dateDataForUser.time = "12:10am - 12:40am"

                            }
                            if ($scope.discoveryData.time == "1:00pm") {

                                $scope.dateDataForUser.time = "1:00pm - 1:40pm"

                            }
                            if ($scope.discoveryData.time == "2:00pm") {

                                $scope.dateDataForUser.time = "2:00pm - 2:40pm"

                            }
                            if ($scope.discoveryData.time == "3:00pm") {

                                $scope.dateDataForUser.time = "3:00pm - 3:40pm"

                            }

                        })

                    }

                })

            }
            if ($scope.discoveryData.time == "8:20am" || $scope.discoveryData.time == "9:20am" ||
                $scope.discoveryData.time == "10:20am" || $scope.discoveryData.time == "11:20am" ||
                $scope.discoveryData.time == "12:20pm" || $scope.discoveryData.time == "1:20pm" ||
                $scope.discoveryData.time == "2:20pm" || $scope.discoveryData.time == "3:20pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour = hour;
                console.log("HOUR", hour)
                $scope.dateData.id = $scope.id

                $scope.bookDiscovery = false;
                $scope.loadingBooking2 = true;

                User.getDate($scope.id).then(function (data) {

                    if (data.data.date[hour].state[3] === 2) {

                        $scope.discovery820AMNoRoom = true;
                        $scope.shinebrighterror.play()
                        console.log("NO ROOM TO BOOOK", hour)


                    } else {

                        data.data.date[hour].state[2] = 2
                        data.data.date[hour].state[3] = 2
                        data.data.date[hour].state[4] = 2

                        $scope.dateData.dateInfo = data.data.date[hour].state

                        User.updateDate($scope.dateData).then(function (data) {

                            $scope.dateDataForUser.date = $scope.currentDate;

                            $timeout(function () {

                                if (data.data.date[hour].state[2] === 2) {

                                    $scope.bookDiscovery8 = false;
                                    $scope.bookDiscovery9 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery18 = false;
                                        $scope.bookDiscovery19 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery28 = false;
                                            $scope.bookDiscovery29 = false;

                                            $timeout(function () {

                                                $scope.bookDiscovery38 = false;
                                                $scope.bookDiscovery39 = false;

                                                $timeout(function () {

                                                    $scope.bookDiscovery48 = false;
                                                    $scope.bookDiscovery49 = false;

                                                    $timeout(function () {

                                                        $scope.loadingBooking2 = false;
                                                        $scope.shinebrightsuccess.play()

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        }, 500)

                                    }, 500)


                                }

                            }, 1000)

                        })

                    }

                })

            }
            if ($scope.discoveryData.time == "8:30am" || $scope.discoveryData.time == "9:30am" ||
                $scope.discoveryData.time == "10:30am" || $scope.discoveryData.time == "11:30am" ||
                $scope.discoveryData.time == "12:30pm" || $scope.discoveryData.time == "1:30pm" ||
                $scope.discoveryData.time == "2:30pm" || $scope.discoveryData.time == "3:30pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                $scope.bookDiscovery = false;
                $scope.loadingBooking3 = true;

                User.getDate($scope.id).then(function (data) {


                    data.data.date[hour].state[3] = 2
                    data.data.date[hour].state[4] = 2
                    data.data.date[hour].state[5] = 2
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {


                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[3] === 2) {

                                $scope.bookDiscovery18 = false;
                                $scope.bookDiscovery19 = false;

                                $timeout(function () {

                                    $scope.bookDiscovery28 = false;
                                    $scope.bookDiscovery29 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery38 = false;
                                        $scope.bookDiscovery39 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery48 = false;
                                            $scope.bookDiscovery49 = false;

                                            $timeout(function () {

                                                $scope.bookDiscovery58 = false;
                                                $scope.bookDiscovery59 = false;

                                                $timeout(function () {

                                                    $scope.loadingBooking3 = false;
                                                    $scope.shinebrightsuccess.play()

                                                }, 500)

                                            }, 500)

                                        }, 500)

                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                    })
                })
            }
            if ($scope.discoveryData.time == "8:40am" || $scope.discoveryData.time == "9:40am" ||
                $scope.discoveryData.time == "10:40am" || $scope.discoveryData.time == "11:40am" ||
                $scope.discoveryData.time == "12:40pm" || $scope.discoveryData.time == "1:40pm" ||
                $scope.discoveryData.time == "2:40pm" || $scope.discoveryData.time == "3:40pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2;
                $scope.dateInfo[2] = 2;

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                $scope.bookDiscovery = false;
                $scope.loadingBooking4 = true;

                User.getDate($scope.id).then(function (data) {

                    console.log("DATE DATA", data)
                    data.data.date[hour].state[4] = 2
                    data.data.date[hour].state[5] = 2

                    if (hour == 'eight' && data.data.date['nine'].state[0] === 0) {

                        $scope.hourPlusOne = 'nine'
                        data.data.date[$scope.hourPlusOne].state[0] = 2

                        $scope.dateData.dateInfo = data.data.date[hour].state
                        $scope.dateData.nexthour = $scope.hourPlusOne
                        $scope.dateData.dateInfoNextHour = data.data.date[$scope.hourPlusOne].state

                        User.updateDateNextHour($scope.dateData).then(function (data) {

                            $scope.dateDataForUser.date = $scope.currentDate;

                            $timeout(function () {

                                if (data.data.date[hour].state[4] === 2) {

                                    $scope.bookDiscovery18 = false;
                                    $scope.bookDiscovery19 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery28 = false;
                                        $scope.bookDiscovery29 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery38 = false;
                                            $scope.bookDiscovery39 = false;

                                            $timeout(function () {

                                                $scope.bookDiscovery48 = false;
                                                $scope.bookDiscovery49 = false;

                                                $timeout(function () {

                                                    $scope.bookDiscovery58 = false;
                                                    $scope.bookDiscovery59 = false;

                                                    $timeout(function () {

                                                        $scope.loadingBooking4 = false;
                                                        $scope.shinebrightsuccess.play()

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        }, 500)

                                    }, 500)

                                }

                            }, 1000)

                        })
                    }

                    if (hour == 'nine' && data.data.date['ten'].state[0] === 0) {

                        $scope.hourPlusOne = 'ten'
                        data.data.date[$scope.hourPlusOne].state[0] = 2

                        $scope.dateData.dateInfo = data.data.date[hour].state
                        $scope.dateData.nexthour = $scope.hourPlusOne
                        $scope.dateData.dateInfoNextHour = data.data.date[$scope.hourPlusOne].state

                        User.updateDateNextHour($scope.dateData).then(function (data) {

                            $scope.dateDataForUser.date = $scope.currentDate;

                            $timeout(function () {

                                if (data.data.date[hour].state[4] === 2) {

                                    $scope.bookDiscovery29 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery39 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery49 = false;

                                            $timeout(function () {

                                                $scope.bookDiscovery59 = false;

                                                $timeout(function () {

                                                    $scope.loadingBooking4 = false;
                                                    $scope.shinebrightsuccess.play()

                                                }, 500)


                                            }, 500)

                                        }, 500)

                                    }, 500)

                                }

                            }, 1000)

                        })
                    }


                })


            }
            if ($scope.discoveryData.time == "8:50am" || $scope.discoveryData.time == "9:50am" ||
                $scope.discoveryData.time == "10:50am" || $scope.discoveryData.time == "11:50am" ||
                $scope.discoveryData.time == "12:50pm" || $scope.discoveryData.time == "1:50pm" ||
                $scope.discoveryData.time == "2:50pm" || $scope.discoveryData.time == "3:50pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                $scope.bookDiscovery = false;
                $scope.loadingBooking5 = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[5] = 2

                    if (hour == 'eight' && data.data.date['nine'].state[0] === 0) {

                        $scope.hourPlusOne = 'ten'
                        data.data.date[$scope.hourPlusOne].state[0] = 2
                        data.data.date[$scope.hourPlusOne].state[1] = 2

                        $scope.dateData.dateInfo = data.data.date[hour].state
                        $scope.dateData.nexthour = $scope.hourPlusOne
                        $scope.dateData.dateInfoNextHour = data.data.date[$scope.hourPlusOne].state

                        User.updateDateNextHour($scope.dateData).then(function (data) {

                            $scope.dateDataForUser.date = $scope.currentDate;

                            $timeout(function () {

                                if (data.data.date[hour].state[5] === 2) {

                                    $scope.bookDiscovery38 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery48 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery58 = false;

                                            $timeout(function () {

                                                $scope.loadingBooking5 = false;
                                                $scope.shinebrightsuccess.play()

                                            }, 500)


                                        }, 500)

                                    }, 500)

                                }

                            }, 1000)

                        })
                    }
                    if (hour == 'nine' && data.data.date['ten'].state[0] === 0) {

                        $scope.hourPlusOne = 'ten'
                        data.data.date[$scope.hourPlusOne].state[0] = 2

                        $scope.dateData.dateInfo = data.data.date[hour].state
                        $scope.dateData.nexthour = $scope.hourPlusOne
                        $scope.dateData.dateInfoNextHour = data.data.date[$scope.hourPlusOne].state

                        User.updateDateNextHour($scope.dateData).then(function (data) {

                            $scope.dateDataForUser.date = $scope.currentDate;

                            $timeout(function () {

                                if (data.data.date[hour].state[4] === 2) {

                                    $scope.bookDiscovery39 = false;

                                    $timeout(function () {

                                        $scope.bookDiscovery49 = false;

                                        $timeout(function () {

                                            $scope.bookDiscovery59 = false;

                                            $timeout(function () {

                                                $scope.loadingBooking5 = false;
                                                $scope.shinebrightsuccess.play()

                                            }, 500)


                                        }, 500)

                                    }, 500)

                                }

                            }, 1000)

                        })
                    }

                })

            }

        }

        $scope.submitCheckUp = function (hour) {

            console.log("$SCOPE.DISCOVERYDATA", $scope.checkUpData)

            $scope.shinebrightloading.play();

            if ($scope.checkUpData.time == "8:00am" || $scope.checkUpData.time == "9:00am" ||
                $scope.checkUpData.time == "10:00am" || $scope.checkUpData.time == "11:00am" ||
                $scope.checkUpData.time == "12:00pm" || $scope.checkUpData.time == "1:00pm" ||
                $scope.checkUpData.time == "2:00pm" || $scope.checkUpData.time == "3:00pm") {

                $scope.dateData.hour    = hour;
                $scope.dateData.id      = $scope.id;

                $scope.loadingBooking   = true;


                console.log("$SCOPE.DATEDATA", $scope.dateData)

                User.getDate($scope.id).then(function (data) {

                    console.log("GET DATE DATA", data)

                    data.data.date[hour].state[0] = 2;
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        console.log("UPDATE DATE DATA", data)

                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.checkUp8AMSelected   = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.checkUp9AMSelected   = false;

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[0] === 2) {


                                $timeout(function () {

                                    $scope.bookCheckUp8 = false;
                                    $scope.bookCheckUp9 = false;

                                    $timeout(function () {

                                        $scope.loadingBooking = false;
                                        $scope.shinebrightsuccess.play()


                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                    })

                })

            }

            if ($scope.checkUpData.time == "8:10am" || $scope.checkUpData.time == "9:10am" ||
                $scope.checkUpData.time == "10:10am" || $scope.checkUpData.time == "11:10am" ||
                $scope.checkUpData.time == "12:10pm" || $scope.checkUpData.time == "1:10pm" ||
                $scope.checkUpData.time == "2:10pm" || $scope.checkUpData.time == "3:10pm") {

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id
                $scope.bookCheckUp = false;
                $scope.loadingBooking1 = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[1] = 2

                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[1] === 2) {


                                $timeout(function () {

                                    $scope.bookCheckUp18 = false;
                                    $scope.bookCheckUp19 = false;


                                    $timeout(function () {

                                        $scope.loadingBooking = false;
                                        $scope.shinebrightsuccess.play()


                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.checkUpData.time == "8:10am") {

                            $scope.dateDataForUser.time = "8:10am - 8:20am"

                        }
                        if ($scope.checkUpData.time == "9:10am") {

                            $scope.dateDataForUser.time = "9:10am - 9:420am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Check-Up!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;

                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            console.log("DATA")
                            console.log(data)

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })

                })

            }
            if ($scope.checkUpData.time == "8:20am" || $scope.checkUpData.time == "9:20am" ||
                $scope.checkUpData.time == "10:20am" || $scope.checkUpData.time == "11:20am" ||
                $scope.checkUpData.time == "12:20pm" || $scope.checkUpData.time == "1:20pm" ||
                $scope.checkUpData.time == "2:20pm" || $scope.checkUpData.time == "3:20pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour = hour;
                console.log("HOUR", hour)
                $scope.dateData.id = $scope.id

                $scope.bookCheckUp = false;
                $scope.loadingBooking2 = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[2] = 2
                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[2] === 2) {


                                $timeout(function () {

                                    $scope.bookCheckUp28 = false;
                                    $scope.bookCheckUp29 = false;


                                    $timeout(function () {

                                        $scope.loadingBooking = false;
                                        $scope.shinebrightsuccess.play()


                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.checkUpData.time == "8:20am") {

                            $scope.dateDataForUser.time = "8:20am - 8:30am"

                        }

                        if ($scope.checkUpData.time == "9:20am") {

                            $scope.dateDataForUser.time = "9:20am - 9:30am"

                        }

                        $scope.dateDataForUser.appointmentType = "Check-Up!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                        console.log("Date Data For User")
                        console.log($scope.dateDataForUser)

                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            console.log("DATA")
                            console.log(data)

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })

                })

            }
            if ($scope.checkUpData.time == "8:30am" || $scope.checkUpData.time == "9:30am" ||
                $scope.checkUpData.time == "10:30am" || $scope.checkUpData.time == "11:30am" ||
                $scope.checkUpData.time == "12:30pm" || $scope.checkUpData.time == "1:30pm" ||
                $scope.checkUpData.time == "2:30pm" || $scope.checkUpData.time == "3:30pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                $scope.bookCheckUp = false;
                $scope.loadingBooking3 = true;

                User.getDate($scope.id).then(function (data) {


                    data.data.date[hour].state[3] = 2

                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {


                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[3] === 2) {


                                $timeout(function () {

                                    $scope.bookCheckUp38 = false;
                                    $scope.bookCheckUp39 = false;


                                    $timeout(function () {

                                        $scope.loadingBooking3 = false;
                                        $scope.shinebrightsuccess.play()


                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                    })

                    if ($scope.checkUpData.time == "8:30am") {

                        $scope.dateDataForUser.time = "8:30am - 8:40am"

                    }
                    if ($scope.checkUpData.time == "9:30am") {

                        $scope.dateDataForUser.time = "9:30am - 9:40am"

                    }
                    $scope.dateDataForUser.appointmentType = "Check-Up!"
                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                    console.log("Date Data For User")
                    console.log($scope.dateDataForUser)

                    User.addBooking($scope.dateDataForUser).then(function (data) {

                        console.log("DATA")
                        console.log(data)

                        if (data.data.user.calender["88"][1]) {

                            $scope.booked121 = true;

                        }
                        if (data.data.user.calender["88"][2]) {

                            $scope.booked122 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][3]) {

                            $scope.booked123 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][4]) {

                            $scope.booked124 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][5]) {

                            $scope.booked125 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][6]) {

                            $scope.booked126 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][7]) {

                            $scope.booked127 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][8]) {

                            $scope.booked128 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][9]) {

                            $scope.booked129 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][10]) {

                            $scope.booked1210 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][11]) {

                            $scope.booked1211 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][12]) {

                            $scope.booked1212 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][13]) {

                            $scope.booked1213 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][14]) {

                            $scope.booked1214 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][15]) {

                            $scope.booked1215 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][16]) {

                            $scope.booked1216 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][17]) {

                            $scope.booked1217 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][18]) {

                            $scope.booked1218 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][19]) {

                            $scope.booked1219 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][20]) {

                            $scope.booked1220 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][21]) {

                            $scope.booked1221 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][22]) {

                            $scope.booked1222 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][23]) {

                            $scope.booked1223 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][24]) {

                            $scope.booked1224 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][25]) {

                            $scope.booked1225 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][26]) {

                            $scope.booked1226 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][27]) {

                            $scope.booked1227 = true;
                            console.log("hero")
                        }
                        if (data.data.user.calender["88"][28]) {

                            $scope.booked1228 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][29]) {

                            $scope.booked1229 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][30]) {

                            $scope.booked1230 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][31]) {

                            $scope.booked1231 = true;
                            //console.log("hero")
                        }

                    })

                })
            }
            if ($scope.checkUpData.time == "8:40am" || $scope.checkUpData.time == "9:40am" ||
                $scope.checkUpData.time == "10:40am" || $scope.checkUpData.time == "11:40am" ||
                $scope.checkUpData.time == "12:40pm" || $scope.checkUpData.time == "1:40pm" ||
                $scope.checkUpData.time == "2:40pm" || $scope.checkUpData.time == "3:40pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2;
                $scope.dateInfo[2] = 2;

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                $scope.bookCheckUp = false;
                $scope.loadingBooking4 = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[4] = 2

                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {


                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[4] === 2) {


                                $timeout(function () {

                                    $scope.bookCheckUp48 = false;
                                    $scope.bookCheckUp49 = false;


                                    $timeout(function () {

                                        $scope.loadingBooking4 = false;
                                        $scope.shinebrightsuccess.play()


                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                    })

                    if ($scope.checkUpData.time == "8:40am") {

                        $scope.dateDataForUser.time = "8:40am - 8:50am"

                    }
                    if ($scope.checkUpData.time == "9:40am") {

                        $scope.dateDataForUser.time = "9:40am - 9:50am"

                    }
                                           $scope.dateDataForUser.appointmentType = "Check-Up!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                        console.log("Date Data For User")
                        console.log($scope.dateDataForUser)

                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            console.log("DATA")
                            console.log(data)

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                })

            }
            if ($scope.checkUpData.time == "8:50am" || $scope.checkUpData.time == "9:50am" ||
                $scope.checkUpData.time == "10:50am" || $scope.checkUpData.time == "11:50am" ||
                $scope.checkUpData.time == "12:50pm" || $scope.checkUpData.time == "1:50pm" ||
                $scope.checkUpData.time == "2:50pm" || $scope.checkUpData.time == "3:50pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id

                $scope.bookCheckUp = false;
                $scope.loadingBooking5 = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[5] = 2

                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[5] === 2) {

                                $scope.bookCheckUp59 = false;
                                $scope.bookCheckUp58 = false;


                                $timeout(function () {

                                    $scope.loadingBooking5 = false;
                                    $scope.shinebrightsuccess.play()

                                }, 500)

                            }

                        }, 1000)

                    })

                    if ($scope.checkUpData.time == "8:50am") {

                        $scope.dateDataForUser.time = "8:50am - 9:00am"

                    }
                    if ($scope.checkUpData.time == "9:50am") {

                        $scope.dateDataForUser.time = "9:50am - 10:00am"

                    }
                    
                    $scope.dateDataForUser.appointmentType = "Check-Up!"
                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                    console.log("Date Data For User")
                    console.log($scope.dateDataForUser)

                    User.addBooking($scope.dateDataForUser).then(function (data) {

                        console.log("DATA")
                        console.log(data)

                        if (data.data.user.calender["88"][1]) {

                            $scope.booked121 = true;

                        }
                        if (data.data.user.calender["88"][2]) {

                            $scope.booked122 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][3]) {

                            $scope.booked123 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][4]) {

                            $scope.booked124 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][5]) {

                            $scope.booked125 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][6]) {

                            $scope.booked126 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][7]) {

                            $scope.booked127 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][8]) {

                            $scope.booked128 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][9]) {

                            $scope.booked129 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][10]) {

                            $scope.booked1210 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][11]) {

                            $scope.booked1211 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][12]) {

                            $scope.booked1212 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][13]) {

                            $scope.booked1213 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][14]) {

                            $scope.booked1214 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][15]) {

                            $scope.booked1215 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][16]) {

                            $scope.booked1216 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][17]) {

                            $scope.booked1217 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][18]) {

                            $scope.booked1218 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][19]) {

                            $scope.booked1219 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][20]) {

                            $scope.booked1220 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][21]) {

                            $scope.booked1221 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][22]) {

                            $scope.booked1222 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][23]) {

                            $scope.booked1223 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][24]) {

                            $scope.booked1224 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][25]) {

                            $scope.booked1225 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][26]) {

                            $scope.booked1226 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][27]) {

                            $scope.booked1227 = true;
                            console.log("hero")
                        }
                        if (data.data.user.calender["88"][28]) {

                            $scope.booked1228 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][29]) {

                            $scope.booked1229 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][30]) {

                            $scope.booked1230 = true;
                            //console.log("hero")
                        }
                        if (data.data.user.calender["88"][31]) {

                            $scope.booked1231 = true;
                            //console.log("hero")
                        }

                    })

                })
            }

        }

        $scope.submitSession = function (hour) {

            $scope.shinebrightloading.play();

            if ($scope.sessionData.time == "8:00am" || $scope.sessionData.time == "9:00am" ||
                $scope.sessionData.time == "10:00am" || $scope.sessionData.time == "11:00am" ||
                $scope.sessionData.time == "12:00pm" || $scope.sessionData.time == "1:00pm" ||
                $scope.sessionData.time == "2:00pm" || $scope.sessionData.time == "3:00pm") {


                $scope.dateInfo[0]      = 2;
                $scope.dateInfo[1]      = 2;
                $scope.dateInfo[2]      = 2;
                $scope.dateInfo[3]      = 2;
                $scope.dateInfo[4]      = 2;
                $scope.dateData.hour    = hour;
                $scope.dateData.id      = $scope.id;

                $scope.loadingBooking   = true;

                User.getDate($scope.id).then(function (data) {


                    data.data.date[hour].state[0]   = 2;
                    data.data.date[hour].state[1]   = 2;
                    data.data.date[hour].state[2]   = 2;
                    data.data.date[hour].state[3]   = 2;
                    data.data.date[hour].state[4]   = 2;

                    $scope.dateData.dateInfo        = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        console.log("UPDATE DATE DATA", data)

                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.session8AMSelected   = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.session9AMSelected   = false;

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[0] === 2) {


                                $timeout(function () {

                                    $scope.bookSession8 = false;
                                    $scope.bookSession9 = false;

                                    $timeout(function () {

                                        $scope.bookSession18 = false;
                                        $scope.bookSession19 = false;

                                        $timeout(function () {

                                            $scope.bookSession28 = false;
                                            $scope.bookSession29 = false;

                                            $timeout(function () {

                                                $scope.bookSession38 = false;
                                                $scope.bookSession39 = false;

                                                $timeout(function () {

                                                    $scope.bookSession48 = false;
                                                    $scope.bookSession49 = false;

                                                    $timeout(function () {

                                                        $scope.loadingBooking = false;
                                                        $scope.shinebrightsuccess.play()

                                                    }, 500)

                                                }, 500)

                                            }, 500)


                                        }, 500)

                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.sessionData.time == "8:00am") {

                            $scope.dateDataForUser.time = "8:00am - 8:50am"

                        }

                        if ($scope.sessionData.time == "9:00am") {

                            $scope.dateDataForUser.time = "9:00am - 9:50am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Session!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                        console.log("Date Data For User")
                        console.log($scope.dateDataForUser)
                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            console.log("DATA")
                            console.log(data)

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })

                })

            }

            if ($scope.sessionData.time == "8:10am" || $scope.sessionData.time == "9:10am" ||
                $scope.sessionData.time == "10:10am" || $scope.sessionData.time == "11:10am" ||
                $scope.sessionData.time == "12:10pm" || $scope.sessionData.time == "1:10pm" ||
                $scope.sessionData.time == "2:10pm" || $scope.sessionData.time == "3:10pm") {

                $scope.dateInfo[1] = 2;
                $scope.dateInfo[2] = 2
                $scope.dateInfo[3] = 2
                $scope.dateData.hour = hour;
                $scope.dateData.id = $scope.id
                $scope.bookSession = false;
                $scope.loadingBooking1 = true;
                console.log("HERE")

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[1] = 2
                    data.data.date[hour].state[2] = 2
                    data.data.date[hour].state[3] = 2
                    data.data.date[hour].state[4] = 2
                    data.data.date[hour].state[5] = 2


                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[1] === 2) {

                                $scope.bookSession18 = false;
                                $scope.bookSession19 = false;

                                $timeout(function () {

                                    $scope.bookSession28 = false;
                                    $scope.bookSession29 = false;

                                    $timeout(function () {

                                        $scope.bookSession38 = false
                                        $scope.bookSession39 = false;

                                        $timeout(function () {

                                            $scope.bookSession48 = false;
                                            $scope.bookSession49 = false;

                                            $timeout(function () {

                                                $scope.bookSession58 = false;
                                                $scope.bookSession59 = false;

                                                $timeout(function () {

                                                    $scope.loadingBooking1 = false;
                                                    $scope.shinebrightsuccess.play()

                                                }, 500)

                                            }, 500)

                                        }, 500)

                                    }, 500)

                                }, 500)


                            }

                        }, 1000)

                        if ($scope.sessionData.time == "8:00am") {

                            $scope.dateDataForUser.time = "8:00am - 9:00am"

                        }
                        if ($scope.sessionData.time == "9:00am") {

                            $scope.dateDataForUser.time = "9:00am - 10:00am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Session!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;

                        User.addBooking($scope.dateDataForUser).then(function (data) {


                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })

                })

            }
            if ($scope.sessionData.time == "8:20am" || $scope.sessionData.time == "9:20am" ||
                $scope.sessionData.time == "10:20am" || $scope.sessionData.time == "11:20am" ||
                $scope.sessionData.time == "12:20pm" || $scope.sessionData.time == "1:20pm" ||
                $scope.sessionData.time == "2:20pm" || $scope.sessionData.time == "3:20pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour    = hour;
                $scope.dateData.id      = $scope.id

                $scope.bookSession      = false;
                $scope.loadingBooking2  = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[1] = 2
                    data.data.date[hour].state[2] = 2
                    data.data.date[hour].state[3] = 2
                    data.data.date[hour].state[4] = 2
                    data.data.date[hour].state[5] = 2


                    $scope.dateData.dateInfo = data.data.date[hour].state



                    User.updateDate($scope.dateData).then(function (data) {

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[1] === 2) {

                                $scope.bookSession28 = false;
                                $scope.bookSession29 = false;

                                $timeout(function () {

                                    $scope.bookSession38 = false;
                                    $scope.bookSession39 = false;

                                    $timeout(function () {

                                        $scope.bookSession48 = false;
                                        $scope.bookSession49 = false;

                                        $timeout(function () {

                                            $scope.bookSession58 = false;
                                            $scope.bookSession59 = false;

                                            $timeout(function () {

                                                $scope.loadingBooking1 = false;
                                                $scope.shinebrightsuccess.play()

                                            }, 500)


                                        }, 500)

                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.sessionData.time == "8:20am") {

                            $scope.dateDataForUser.time = "8:20am - 9:10am"

                        }
                        if ($scope.sessionData.time == "9:20am") {

                            $scope.dateDataForUser.time = "9:20am - 10:10am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Session!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;

                        User.addBooking($scope.dateDataForUser).then(function (data) {


                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })


                })

            }
            if ($scope.sessionData.time == "8:30am" || $scope.sessionData.time == "9:30am" ||
                $scope.sessionData.time == "10:30am" || $scope.sessionData.time == "11:30am" ||
                $scope.sessionData.time == "12:30pm" || $scope.sessionData.time == "1:30pm" ||
                $scope.sessionData.time == "2:30pm" || $scope.sessionData.time == "3:30pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour    = hour;
                $scope.dateData.id      = $scope.id

                $scope.bookSession      = false;
                $scope.loadingBooking3  = true;

                User.getDate($scope.id).then(function (data) {


                    data.data.date[hour].state[2] = 2
                    data.data.date[hour].state[3] = 2
                    data.data.date[hour].state[4] = 2
                    data.data.date[hour].state[5] = 2


                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {


                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[2] === 2) {

                                $scope.bookSession39 = false;

                                $timeout(function () {

                                    $scope.bookSession49 = false;

                                    $timeout(function () {

                                        $scope.bookSession59 = false;

                                        $timeout(function () {

                                            $scope.loadingBooking3 = false;
                                            $scope.shinebrightsuccess.play()

                                        }, 500)

                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.sessionData.time == "8:30am") {

                            $scope.dateDataForUser.time = "8:30am - 8:20am"

                        }
                        if ($scope.sessionData.time == "9:30am") {

                            $scope.dateDataForUser.time = "9:30am - 10:20am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Session!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;

                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })
                })
            }
            if ($scope.sessionData.time == "8:40am" || $scope.sessionData.time == "9:40am" ||
                $scope.sessionData.time == "10:40am" || $scope.sessionData.time == "11:40am" ||
                $scope.sessionData.time == "12:40pm" || $scope.sessionData.time == "1:40pm" ||
                $scope.sessionData.time == "2:40pm" || $scope.sessionData.time == "3:40pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2;
                $scope.dateInfo[2] = 2;

                $scope.dateData.hour    = hour;
                $scope.dateData.id      = $scope.id

                $scope.bookSession      = false;
                $scope.loadingBooking4  = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[4] = 2
                    data.data.date[hour].state[5] = 2

                    $scope.dateData.dateInfo = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {


                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[4] === 2) {

                                $scope.bookSession49 = false;

                                $timeout(function () {

                                    $scope.bookSession59 = false;

                                    $timeout(function () {

                                        $scope.loadingBooking4 = false;
                                        $scope.shinebrightsuccess.play()

                                    }, 500)

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.sessionData.time == "8:40am") {

                            $scope.dateDataForUser.time = "8:40am - 9:30am"

                        }
                        if ($scope.sessionData.time == "9:40am") {

                            $scope.dateDataForUser.time = "9:40am - 10:30am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Session!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;

                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })
                })


            }
            if ($scope.sessionData.time == "8:50am" || $scope.sessionData.time == "9:50am" ||
                $scope.sessionData.time == "10:50am" || $scope.sessionData.time == "11:50am" ||
                $scope.sessionData.time == "12:50pm" || $scope.sessionData.time == "1:50pm" ||
                $scope.sessionData.time == "2:50pm" || $scope.sessionData.time == "3:50pm") {

                $scope.dateInfo[0] = 2;
                $scope.dateInfo[1] = 2
                $scope.dateInfo[2] = 2

                $scope.dateData.hour    = hour;
                $scope.dateData.id      = $scope.id

                $scope.bookSession      = false;
                $scope.loadingBooking5  = true;

                User.getDate($scope.id).then(function (data) {

                    data.data.date[hour].state[5]   = 2

                    $scope.dateData.dateInfo        = data.data.date[hour].state

                    User.updateDate($scope.dateData).then(function (data) {

                        $scope.dateDataForUser.date = $scope.currentDate;

                        $timeout(function () {

                            if (data.data.date[hour].state[5] === 2) {

                                $scope.bookSession59 = false;

                                $timeout(function () {

                                    $scope.loadingBooking5 = false;
                                    $scope.shinebrightsuccess.play()

                                }, 500)

                            }

                        }, 1000)

                        if ($scope.sessionData.time == "8:30am") {

                            $scope.dateDataForUser.time = "8:30am - 9:30am"

                        }
                        if ($scope.sessionData.time == "9:50am") {

                            $scope.dateDataForUser.time = "9:50am - 10:30am"

                        }
                        
                        $scope.dateDataForUser.appointmentType = "Session!"
                        $scope.dateDataForUser.id = $scope.idFromLocalStorage;

                        User.addBooking($scope.dateDataForUser).then(function (data) {

                            if (data.data.user.calender["88"][1]) {

                                $scope.booked121 = true;

                            }
                            if (data.data.user.calender["88"][2]) {

                                $scope.booked122 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][3]) {

                                $scope.booked123 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][4]) {

                                $scope.booked124 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][5]) {

                                $scope.booked125 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][6]) {

                                $scope.booked126 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][7]) {

                                $scope.booked127 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][8]) {

                                $scope.booked128 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][9]) {

                                $scope.booked129 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][10]) {

                                $scope.booked1210 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][11]) {

                                $scope.booked1211 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][12]) {

                                $scope.booked1212 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][13]) {

                                $scope.booked1213 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][14]) {

                                $scope.booked1214 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][15]) {

                                $scope.booked1215 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][16]) {

                                $scope.booked1216 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][17]) {

                                $scope.booked1217 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][18]) {

                                $scope.booked1218 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][19]) {

                                $scope.booked1219 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][20]) {

                                $scope.booked1220 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][21]) {

                                $scope.booked1221 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][22]) {

                                $scope.booked1222 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][23]) {

                                $scope.booked1223 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][24]) {

                                $scope.booked1224 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][25]) {

                                $scope.booked1225 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][26]) {

                                $scope.booked1226 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][27]) {

                                $scope.booked1227 = true;
                                console.log("hero")
                            }
                            if (data.data.user.calender["88"][28]) {

                                $scope.booked1228 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][29]) {

                                $scope.booked1229 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][30]) {

                                $scope.booked1230 = true;
                                //console.log("hero")
                            }
                            if (data.data.user.calender["88"][31]) {

                                $scope.booked1231 = true;
                                //console.log("hero")
                            }

                        })

                    })

                })

            }

        }

        $scope.selectTime = function (time, booked) {

            console.log("Global Date Information")
            console.log($scope.globalDateInformation)
            console.log("Current Hour")
            console.log($scope.hour)
            console.log("Time", time)

            $scope.discovery800AMIsBooked = false;
            $scope.discovery810AMIsBooked = false;
            $scope.discovery820AMIsBooked = false;
            $scope.discovery830AMIsBooked = false;
            $scope.discovery840AMIsBooked = false;
            $scope.discovery850AMIsBooked = false;
            $scope.session800AMIsBooked = false;
            $scope.session810AMIsBooked = false;
            $scope.session820AMIsBooked = false;
            $scope.session830AMIsBooked = false;
            $scope.session840AMIsBooked = false;
            $scope.session850AMIsBooked = false;
            $scope.checkUp800AMIsBooked = false;
            $scope.checkUp810AMIsBooked = false;
            $scope.checkUp820AMIsBooked = false;
            $scope.checkUp830AMIsBooked = false;
            $scope.checkUp840AMIsBooked = false;
            $scope.checkUp850AMIsBooked = false;
            $scope.discovery900AMIsBooked = false;
            $scope.discovery910AMIsBooked = false;
            $scope.discovery920AMIsBooked = false;
            $scope.discovery930AMIsBooked = false;
            $scope.discovery940AMIsBooked = false;
            $scope.discovery950AMIsBooked = false;
            $scope.session900AMIsBooked = false;
            $scope.session910AMIsBooked = false;
            $scope.session920AMIsBooked = false;
            $scope.session930AMIsBooked = false;
            $scope.session940AMIsBooked = false;
            $scope.session950AMIsBooked = false;
            $scope.checkUp900AMIsBooked = false;
            $scope.checkUp910AMIsBooked = false;
            $scope.checkUp920AMIsBooked = false;
            $scope.checkUp930AMIsBooked = false;
            $scope.checkUp940AMIsBooked = false;
            $scope.checkUp950AMIsBooked = false;


            if (time == "8:10") {

                if (!booked) {

                    $scope.discovery810AMSelected = true;
                    $scope.discovery820AMSelected = false;
                    $scope.discovery830AMSelected = false;
                    $scope.discovery840AMSelected = false;
                    $scope.discovery850AMSelected = false;
                    $scope.discovery800AMSelected = false;
                    $scope.session800AMSelected = false;
                    $scope.session810AMSelected = true;
                    $scope.session820AMSelected = false;
                    $scope.session830AMSelected = false;
                    $scope.session840AMSelected = false;
                    $scope.session850AMSelected = false;
                    $scope.checkUp800AMSelected = false;
                    $scope.checkUp810AMSelected = true;
                    $scope.checkUp820AMSelected = false;
                    $scope.checkUp830AMSelected = false;
                    $scope.checkUp840AMSelected = false;
                    $scope.checkUp850AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "8:10am"
                    console.log("Discovery Data", $scope.discoveryData)
                    $scope.sessionData.time = "8:10am"
                    $scope.checkUpData.time = "8:10am"



                } else {

                    $scope.discovery810AMIsBooked = true;
                    $scope.session810AMIsBooked = true;
                    $scope.checkUp810AMIsBooked = true;

                }

            }
            if (time == "8:20") {

                if (!booked) {

                    $scope.discovery810AMSelected = false;
                    $scope.discovery820AMSelected = true;
                    $scope.discovery830AMSelected = false;
                    $scope.discovery840AMSelected = false;
                    $scope.discovery850AMSelected = false;
                    $scope.discovery800AMSelected = false;
                    $scope.session800AMSelected = false;
                    $scope.session810AMSelected = false;
                    $scope.session820AMSelected = true;
                    $scope.session830AMSelected = false;
                    $scope.session840AMSelected = false;
                    $scope.session850AMSelected = false;
                    $scope.checkUp800AMSelected = false;
                    $scope.checkUp810AMSelected = false;
                    $scope.checkUp820AMSelected = true;
                    $scope.checkUp830AMSelected = false;
                    $scope.checkUp840AMSelected = false;
                    $scope.checkUp850AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "8:20am"
                    $scope.sessionData.time = "8:20am"
                    $scope.checkUpData.time = "8:20am"




                } else {

                    $scope.discovery820AMIsBooked = true;
                    $scope.session820AMIsBooked = true;
                    $scope.checkUp820AMIsBooked = true;

                }

            }
            if (time == "8:30") {

                if (!booked) {

                    $scope.discovery810AMSelected = false;
                    $scope.discovery820AMSelected = false;
                    $scope.discovery830AMSelected = true;
                    $scope.discovery840AMSelected = false;
                    $scope.discovery850AMSelected = false;
                    $scope.discovery800AMSelected = false;
                    $scope.session800AMSelected = false;
                    $scope.session810AMSelected = false;
                    $scope.session820AMSelected = false;
                    $scope.session830AMSelected = true;
                    $scope.session840AMSelected = false;
                    $scope.session850AMSelected = false;
                    $scope.checkUp800AMSelected = false;
                    $scope.checkUp810AMSelected = false;
                    $scope.checkUp820AMSelected = false;
                    $scope.checkUp830AMSelected = true;
                    $scope.checkUp840AMSelected = false;
                    $scope.checkUp850AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "8:30am"
                    $scope.sessionData.time = "8:30am"
                    $scope.checkUpData.time = "8:30am"

                } else {

                    $scope.discovery830AMIsBooked = true;
                    $scope.session830AMIsBooked = true;
                    $scope.checkUp830AMIsBooked = true;

                }

            }
            if (time == "8:40") {

                if (!booked) {

                    $scope.discovery810AMSelected = false;
                    $scope.discovery820AMSelected = false;
                    $scope.discovery830AMSelected = false;
                    $scope.discovery840AMSelected = true;
                    $scope.discovery850AMSelected = false;
                    $scope.discovery800AMSelected = false;
                    $scope.session800AMSelected = false;
                    $scope.session810AMSelected = false;
                    $scope.session820AMSelected = false;
                    $scope.session830AMSelected = false;
                    $scope.session840AMSelected = true;
                    $scope.session850AMSelected = false;
                    $scope.checkUp800AMSelected = false;
                    $scope.checkUp810AMSelected = false;
                    $scope.checkUp820AMSelected = false;
                    $scope.checkUp830AMSelected = false;
                    $scope.checkUp840AMSelected = true;
                    $scope.checkUp850AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "8:40am"
                    $scope.sessionData.time = "8:40am"
                    $scope.checkUpData.time = "8:40am"




                } else {

                    $scope.discovery840AMIsBooked = true;
                    $scope.session840AMIsBooked = true;
                    $scope.checkUp840AMIsBooked = true;

                }

            }
            if (time == "8:50") {

                if (!booked) {

                    $scope.discovery810AMSelected = false;
                    $scope.discovery820AMSelected = false;
                    $scope.discovery830AMSelected = false;
                    $scope.discovery840AMSelected = false;
                    $scope.discovery850AMSelected = true;
                    $scope.discovery800AMSelected = false;
                    $scope.session800AMSelected = false;
                    $scope.session810AMSelected = false;
                    $scope.session820AMSelected = false;
                    $scope.session830AMSelected = false;
                    $scope.session840AMSelected = false;
                    $scope.session850AMSelected = true;
                    $scope.checkUp800AMSelected = false;
                    $scope.checkUp810AMSelected = false;
                    $scope.checkUp820AMSelected = false;
                    $scope.checkUp830AMSelected = false;
                    $scope.checkUp840AMSelected = false;
                    $scope.checkUp850AMSelected = true;
                    $scope.audio.play();
                    $scope.discoveryData.time = "8:50am"
                    $scope.sessionData.time = "8:50am"
                    $scope.checkUpData.time = "8:50am"



                } else {

                    $scope.discovery850AMIsBooked = true;
                    $scope.session850AMIsBooked = true;
                    $scope.checkUp850AMIsBooked = true;

                }

            }
            if (time == "8:00") {

                if (!booked) {

                    $scope.discovery810AMSelected = false;
                    $scope.discovery820AMSelected = false;
                    $scope.discovery830AMSelected = false;
                    $scope.discovery840AMSelected = false;
                    $scope.discovery850AMSelected = false;
                    $scope.discovery800AMSelected = true;
                    $scope.session800AMSelected = true;
                    $scope.session810AMSelected = false;
                    $scope.session820AMSelected = false;
                    $scope.session830AMSelected = false;
                    $scope.session840AMSelected = false;
                    $scope.session850AMSelected = false;
                    $scope.checkUp800AMSelected = true;
                    $scope.checkUp810AMSelected = false;
                    $scope.checkUp820AMSelected = false;
                    $scope.checkUp830AMSelected = false;
                    $scope.checkUp840AMSelected = false;
                    $scope.checkUp850AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "8:00am"
                    $scope.sessionData.time = "8:00am"
                    $scope.checkUpData.time = "8:00am"



                } else {

                    $scope.discovery800AMIsBooked = true;
                    $scope.session800AMIsBooked = true;
                    $scope.checkUp800AMIsBooked = true;

                }

            }

            if (time == "9:10") {

                if (!booked) {

                    $scope.discovery910AMSelected = true;
                    $scope.discovery920AMSelected = false;
                    $scope.discovery930AMSelected = false;
                    $scope.discovery940AMSelected = false;
                    $scope.discovery950AMSelected = false;
                    $scope.discovery900AMSelected = false;
                    $scope.session900AMSelected = false;
                    $scope.session910AMSelected = true;
                    $scope.session920AMSelected = false;
                    $scope.session930AMSelected = false;
                    $scope.session940AMSelected = false;
                    $scope.session950AMSelected = false;
                    $scope.checkUp900AMSelected = false;
                    $scope.checkUp910AMSelected = true;
                    $scope.checkUp920AMSelected = false;
                    $scope.checkUp930AMSelected = false;
                    $scope.checkUp940AMSelected = false;
                    $scope.checkUp950AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "9:10am"
                    $scope.sessionData.time = "9:10am"
                    $scope.checkUpData.time = "9:10am"



                } else {

                    $scope.discovery910AMIsBooked = true;
                    $scope.session910AMIsBooked = true;
                    $scope.checkUp910AMIsBooked = true;

                }

            }
            if (time == "9:20") {

                if (!booked) {

                    $scope.discovery910AMSelected = false;
                    $scope.discovery920AMSelected = true;
                    $scope.discovery930AMSelected = false;
                    $scope.discovery940AMSelected = false;
                    $scope.discovery950AMSelected = false;
                    $scope.discovery900AMSelected = false;
                    $scope.session900AMSelected = false;
                    $scope.session910AMSelected = false;
                    $scope.session920AMSelected = true;
                    $scope.session930AMSelected = false;
                    $scope.session940AMSelected = false;
                    $scope.session950AMSelected = false;
                    $scope.checkUp900AMSelected = false;
                    $scope.checkUp910AMSelected = false;
                    $scope.checkUp920AMSelected = true;
                    $scope.checkUp930AMSelected = false;
                    $scope.checkUp940AMSelected = false;
                    $scope.checkUp950AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "9:20am"
                    $scope.sessionData.time = "9:20am"
                    $scope.checkUpData.time = "9:20am"



                } else {

                    $scope.discovery920AMIsBooked = true;
                    $scope.session920AMIsBooked = true;
                    $scope.checkUp920AMIsBooked = true;

                }

            }
            if (time == "9:30") {

                if (!booked) {

                    $scope.discovery910AMSelected = false;
                    $scope.discovery920AMSelected = false;
                    $scope.discovery930AMSelected = true;
                    $scope.discovery940AMSelected = false;
                    $scope.discovery950AMSelected = false;
                    $scope.discovery900AMSelected = false;
                    $scope.session900AMSelected = false;
                    $scope.session910AMSelected = false;
                    $scope.session920AMSelected = false;
                    $scope.session930AMSelected = true;
                    $scope.session940AMSelected = false;
                    $scope.session950AMSelected = false;
                    $scope.checkUp900AMSelected = false;
                    $scope.checkUp910AMSelected = false;
                    $scope.checkUp920AMSelected = false;
                    $scope.checkUp930AMSelected = true;
                    $scope.checkUp940AMSelected = false;
                    $scope.checkUp950AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "9:30am"
                    $scope.sessionData.time = "9:30am"
                    $scope.checkUpData.time = "9:30am"


                } else {

                    $scope.discovery930AMIsBooked = true;
                    $scope.session930AMIsBooked = true;
                    $scope.checkUp930AMIsBooked = true;

                }

            }
            if (time == "9:40") {

                if (!booked) {

                    $scope.discovery910AMSelected = false;
                    $scope.discovery920AMSelected = false;
                    $scope.discovery930AMSelected = false;
                    $scope.discovery940AMSelected = true;
                    $scope.discovery950AMSelected = false;
                    $scope.discovery900AMSelected = false;
                    $scope.session900AMSelected = false;
                    $scope.session910AMSelected = false;
                    $scope.session920AMSelected = false;
                    $scope.session930AMSelected = false;
                    $scope.session940AMSelected = true;
                    $scope.session950AMSelected = false;
                    $scope.checkUp900AMSelected = false;
                    $scope.checkUp910AMSelected = false;
                    $scope.checkUp920AMSelected = false;
                    $scope.checkUp930AMSelected = false;
                    $scope.checkUp940AMSelected = true;
                    $scope.checkUp950AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "9:40am"
                    $scope.sessionData.time = "9:40am"
                    $scope.checkUpData.time = "9:40am"


                } else {

                    $scope.discovery940AMIsBooked = true;
                    $scope.session940AMIsBooked = true;
                    $scope.checkUp940AMIsBooked = true;

                }

            }
            if (time == "9:50") {

                if (!booked) {

                    $scope.discovery910AMSelected = false;
                    $scope.discovery920AMSelected = false;
                    $scope.discovery930AMSelected = false;
                    $scope.discovery940AMSelected = false;
                    $scope.discovery950AMSelected = true;
                    $scope.discovery900AMSelected = false;
                    $scope.session900AMSelected = false;
                    $scope.session910AMSelected = false;
                    $scope.session920AMSelected = false;
                    $scope.session930AMSelected = false;
                    $scope.session940AMSelected = false;
                    $scope.session950AMSelected = true;
                    $scope.checkUp900AMSelected = false;
                    $scope.checkUp910AMSelected = false;
                    $scope.checkUp920AMSelected = false;
                    $scope.checkUp930AMSelected = false;
                    $scope.checkUp940AMSelected = false;
                    $scope.checkUp950AMSelected = true;
                    $scope.audio.play();
                    $scope.discoveryData.time = "9:50am"
                    $scope.sessionData.time = "9:50am"
                    $scope.checkUpData.time = "9:50am"


                } else {

                    $scope.discovery950AMIsBooked = true;
                    $scope.session950AMIsBooked = true;
                    $scope.checkUp950AMIsBooked = true;

                }

            }
            if (time == "9:00") {

                if (!booked) {

                    $scope.discovery910AMSelected = false;
                    $scope.discovery920AMSelected = false;
                    $scope.discovery930AMSelected = false;
                    $scope.discovery940AMSelected = false;
                    $scope.discovery950AMSelected = false;
                    $scope.discovery900AMSelected = true;
                    $scope.session900AMSelected = true;
                    $scope.session910AMSelected = false;
                    $scope.session920AMSelected = false;
                    $scope.session930AMSelected = false;
                    $scope.session940AMSelected = false;
                    $scope.session950AMSelected = false;
                    $scope.checkUp900AMSelected = true;
                    $scope.checkUp910AMSelected = false;
                    $scope.checkUp920AMSelected = false;
                    $scope.checkUp930AMSelected = false;
                    $scope.checkUp940AMSelected = false;
                    $scope.checkUp950AMSelected = false;
                    $scope.audio.play();
                    $scope.discoveryData.time = "9:00am"
                    $scope.sessionData.time = "9:00am"
                    $scope.checkUpData.time = "9:00am"


                } else {

                    $scope.discovery900AMIsBooked = true;
                    $scope.session900AMIsBooked = true;
                    $scope.checkUp900AMIsBooked = true;

                }

            }


        }

        $scope.selectAppointmentType = function (type, column, color) {

            $scope.appointmentType = type;
            console.log("Type", type)
            console.log("Appointment Type", $scope.appointmentType)

            if (color == 'green' || color == 'yellow') {

                $scope.appointmentTypeAvailable = true;

            } else {

                $scope.appointmentTypeAvailable = false;

            }

            if (type == 'checkup') {

                $scope.sessionPageOpen = false;
                $scope.discoveryPageOpen = false;
                $scope.checkUpPageOpen = true;
                $scope.checkUpTitle9 = true;

                console.log("Check Up Page Open", $scope.checkUpPageOpen)
                console.log("Discovery Page Open", $scope.discoveryPageOpen)
                console.log("Session Page Open", $scope.sessionPageOpen)

                if (column == '1') {

                    if (!$scope.checkUp8Selected) {

                        $scope.discovery8Selected = false;
                        $scope.session8Selected = false;
                        $scope.checkUp8Selected = true;
                        $scope.sessionTitle80 = false;
                        $scope.discoveryTitle80 = false;
                        $scope.checkUpTitle80 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '2') {

                    if (!$scope.checkUp9Selected2) {

                        $scope.discovery9Selected2 = false;
                        $scope.session9Selected2 = false;
                        $scope.checkUp9Selected2 = true;
                        $scope.sessionTitle91 = false;
                        $scope.discoveryTitle91 = false;
                        $scope.checkUpTitle91 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '3') {

                    if (!$scope.checkUp10Selected3) {

                        $scope.discovery10Selected3 = false;
                        $scope.session10Selected3 = false;
                        $scope.checkUp10Selected3 = true;
                        $scope.checkUpTitle102 = true;
                        $scope.discoveryTitle102 = false;
                        $scope.sessionTitle102 = false;
                        $scope.audio.play()

                    }

                }

                if (column == '4') {

                    if (!$scope.checkUp11Selected4) {

                        $scope.discovery11Selected4 = false;
                        $scope.session11Selected4 = false;
                        $scope.checkUp11Selected4 = true;
                        $scope.checkUpTitle113 = true;
                        $scope.discoveryTitle113 = false;
                        $scope.sessionTitle113 = false;

                        $scope.audio.play()

                    }

                }

                if (column == '5') {

                    if (!$scope.checkUp12Selected5) {

                        $scope.discovery12Selected5 = false;
                        $scope.session12Selected5 = false;
                        $scope.checkUp12Selected5 = true;
                        $scope.sessionTitle124 = false;
                        $scope.discoveryTitle124 = false;
                        $scope.checkUpTitle124 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '6') {

                    if (!$scope.checkUp1Selected6) {

                        $scope.discovery1Selected6 = false;
                        $scope.session1Selected6 = false;
                        $scope.checkUp1Selected6 = true;
                        $scope.sessionTitle15 = false;
                        $scope.discoveryTitle15 = false;
                        $scope.checkUpTitle15 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '7') {

                    if (!$scope.checkUp2Selected7) {

                        $scope.discovery2Selected7 = false;
                        $scope.session2Selected7 = false;
                        $scope.checkUp2Selected7 = true;
                        $scope.sessionTitle26 = false;
                        $scope.discoveryTitle26 = false;
                        $scope.checkUpTitle26 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '8') {

                    if (!$scope.checkUp3Selected8) {

                        $scope.discovery3Selected8 = false;
                        $scope.session3Selected8 = false;
                        $scope.checkUp3Selected8 = true;
                        $scope.sessionTitle37 = false;
                        $scope.discoveryTitle37 = false;
                        $scope.checkUpTitle37 = true;
                        $scope.audio.play()

                    }

                }

            }

            if (type == 'discovery') {

                $scope.sessionPageOpen = false;
                $scope.checkUpPageOpen = false;
                $scope.discoveryPageOpen = true;


                if (column == '1') {

                    if (!$scope.discovery8Selected) {

                        $scope.checkUp8Selected = false;
                        $scope.session8Selected = false;
                        $scope.discovery8Selected = true
                        $scope.sessionTitle80 = false;
                        $scope.checkUpTitle80 = false;
                        $scope.discoveryTitle80 = true;

                        $scope.audio.play()

                    }

                }

                if (column == '2') {

                    if (!$scope.discovery9Selected2) {

                        $scope.checkUp9Selected2 = false;
                        $scope.session9Selected2 = false;
                        $scope.discovery9Selected2 = true;
                        $scope.sessionTitle91 = false;
                        $scope.checkUpTitle91 = false;
                        $scope.discoveryTitle91 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '3') {

                    if (!$scope.discovery10Selected3) {

                        $scope.checkUp10Selected3 = false;
                        $scope.session10Selected3 = false;
                        $scope.discovery10Selected3 = true;
                        $scope.sessionTitle102 = false;
                        $scope.checkUpTitle102 = false;
                        $scope.discoveryTitle102 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '4') {

                    if (!$scope.discovery11Selected4) {

                        $scope.checkUp11Selected4 = false;
                        $scope.session11Selected4 = false;
                        $scope.discovery11Selected4 = true;
                        $scope.sessionTitle113 = false;
                        $scope.checkUpTitle113 = false;
                        $scope.discoveryTitle113 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '5') {

                    if (!$scope.discovery12Selected5) {

                        $scope.checkUp12Selected5 = false;
                        $scope.session12Selected5 = false;
                        $scope.discovery12Selected5 = true;
                        $scope.sessionTitle124 = false;
                        $scope.checkUpTitle124 = false;
                        $scope.discoveryTitle124 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '6') {

                    if (!$scope.discovery1Selected6) {

                        $scope.checkUp1Selected6 = false;
                        $scope.session1Selected6 = false;
                        $scope.discovery1Selected6 = true;
                        $scope.sessionTitle15 = false;
                        $scope.checkUpTitle15 = false;
                        $scope.discoveryTitle15 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '7') {

                    if (!$scope.discovery2Selected7) {

                        $scope.checkUp2Selected7 = false;
                        $scope.session2Selected7 = false;
                        $scope.discovery2Selected7 = true;
                        $scope.sessionTitle26 = false;
                        $scope.checkUpTitle26 = false;
                        $scope.discoveryTitle26 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '8') {

                    if (!$scope.discovery3Selected8) {

                        $scope.checkUp3Selected8 = false;
                        $scope.session3Selected8 = false;
                        $scope.discovery3Selected8 = true;
                        $scope.checkUpTitle37 = false;
                        $scope.sessionTitle37 = false;
                        $scope.discoveryTitle37 = true;
                        $scope.audio.play()

                    }

                }




            }

            if (type == 'session') {

                $scope.discoveryPageOpen = false;
                $scope.checkUpPageOpen = false;
                $scope.sessionPageOpen = true;

                if (column == '1') {

                    if (!$scope.session8Selected) {

                        $scope.checkUp8Selected = false;
                        $scope.discovery8Selected = false;
                        $scope.session8Selected = true
                        $scope.checkUpTitle80 = false;
                        $scope.discoveryTitle80 = false;
                        $scope.sessionTitle80 = true;
                        $scope.audio.play()

                    }

                }

                if (column == '2') {

                    if (!$scope.session9Selected2) {

                        $scope.checkUp9Selected2 = false;
                        $scope.discovery9Selected2 = false;
                        $scope.session9Selected2 = true;
                        $scope.sessionTitle91 = true;
                        $scope.discoveryTitle91 = false;
                        $scope.checkUpTitle91 = false;
                        $scope.audio.play()

                    }

                }

                if (column == '3') {

                    if (!$scope.session10Selected3) {

                        $scope.checkUp10Selected3 = false;
                        $scope.discovery10Selected3 = false;
                        $scope.session10Selected3 = true;
                        $scope.checkUpTitle102 = false;
                        $scope.discoveryTitle102 = false;
                        $scope.sessionTitle102 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '4') {

                    if (!$scope.session11Selected4) {

                        $scope.checkUp11Selected4 = false;
                        $scope.discovery11Selected4 = false;
                        $scope.session11Selected4 = true;
                        $scope.discoveryTitle113 = false;
                        $scope.checkUpTitle113 = false;
                        $scope.sessionTitle113 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '5') {

                    if (!$scope.session12Selected5) {

                        $scope.checkUp12Selected5 = false;
                        $scope.discovery12Selected5 = false;
                        $scope.session12Selected5 = true;
                        $scope.discoveryTitle124 = false;
                        $scope.checkUpTitle124 = false;
                        $scope.sessionTitle124 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '6') {

                    if (!$scope.session1Selected6) {

                        $scope.checkUp1Selected6 = false;
                        $scope.discovery1Selected6 = false;
                        $scope.session1Selected6 = true;
                        $scope.discoveryTitle15 = false;
                        $scope.checkUpTitle15 = false;
                        $scope.sessionTitle15 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '7') {

                    if (!$scope.session2Selected7) {

                        $scope.checkUp2Selected7 = false;
                        $scope.discovery2Selected7 = false;
                        $scope.session2Selected7 = true;
                        $scope.discoveryTitle26 = false;
                        $scope.checkUpTitle26 = false;
                        $scope.sessionTitle26 = true;
                        $scope.audio.play()

                    }

                }
                if (column == '8') {

                    if (!$scope.session3Selected8) {

                        $scope.checkUp3Selected8 = false;
                        $scope.discovery3Selected8 = false;
                        $scope.session3Selected8 = true;
                        $scope.discoveryTitle37 = false;
                        $scope.checkUpTitle37 = false;
                        $scope.sessionTitle37 = true;
                        $scope.audio.play()

                    }

                }




            }

        }

        $scope.openModal = function () {

            $('#modal1').modal('open');
            
        }

    })

}())