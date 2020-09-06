
angular.module('userServices', []).config(function () {



})
    .factory('User', function ($http) {

        userFactory = {};

        userFactory.messageAdmin = function (messageObject) {
            return $http.post("/api/users/messageadmin", messageObject)
        }
        userFactory.getCurrentUser = function (id) {
            return $http.put('/api/users/getcurrentuser/' + id)
        }
        userFactory.addIntake = function (intake) {
            return $http.post('/api/users/addintake', intake)
        }
        userFactory.markAsComplete = function (object) {
            return $http.post('/api/users/markascomplete', object)
        }
        userFactory.markAsInComplete = function (object) {
            return $http.post('/api/users/markasincomplete', object)
        }
        userFactory.addWellnessIntake = function (intake) {
            return $http.post('/api/users/addwellnessintake', intake)
        }
        userFactory.addBooking = function (dateInfo) {
            return $http.post("/api/users/addbooking", dateInfo)
        }
        userFactory.deleteBooking = function (bookingData) {
            return $http.post('/api/users/deletebooking', bookingData)
        }
        userFactory.markBookingAsCompleted = function (bookingInfo) {
            return $http.post('/api/users/markbookingascompleted', bookingInfo)
        }
        userFactory.markBookingAsNotCompleted = function (bookingInfo) {
            return $http.post('/api/users/markbookingasnotcompleted', bookingInfo)
        }
        userFactory.changeMessageToRead = function (id, index) {
            return $http.put('/api/users/changemessagetoread/' + id + "/" + index)
        }
        userFactory.changeMessageToUnRead = function (id, index) {
            return $http.put('/api/users/changemessagetounread/' + id + "/" + index)
        }
        userFactory.createDate = function (dateInfo) {
            return $http.post('/api/months/createdate', dateInfo)
        }
        userFactory.getDate = function (id) {
            return $http.put('/api/months/getdate/' + id)
        }
        userFactory.updateDate = function (info) {
            return $http.post('/api/months/updatedate', info)
        }
        userFactory.updateDateNextHour = function (info) {
            return $http.post('/api/months/updatedatenexthour', info)
        }
        userFactory.create = function (regData) {
            return $http.post('/api/users', regData);
        }
        userFactory.getUsers = function () {
            return $http.get('/api/users')
        }
        userFactory.clearDatabase = function (fillerdata) {
            return $http.post('/api/users/cleardatabase', fillerdata)
        }
        userFactory.getAdmin = function () {
            return $http.get('/api/users/getadmin')
        }
        userFactory.sendPassword = function (resetData) {
            return $http.post('/api/users/resetpassword', resetData);
        }
        userFactory.findByToken = function (token) {
            return $http.put('/api/users/findbytoken/' + token)
        }
        userFactory.savePassword = function (regData) {
            return $http.post('/api/users/savepassword/', regData);
        }
        userFactory.sendMessage = function (messageDetails) {
            return $http.post('/api/users/sendmessage', messageDetails)
        }
        userFactory.getUser = function (userId) {
            return $http.put('/api/users/' + userId);
        }
        userFactory.getMessages = function (id) {
            return $http.put('/api/users/getmessages/' + id)
        }
        userFactory.removeMessage = function (name, index) {
            return $http.put('/api/users/removemessage/' + name + "/" + index)
        }
      
        return userFactory
        
    })