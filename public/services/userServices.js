console.log("testing")
angular.module('userServices', []).config(function () {

    console.log("UserService")

})
    .factory('User', function ($http) {

        userFactory = {};
        userFactory.messageAdmin = function (messageObject) {
            return $http.post("/api/users/messageadmin", messageObject)


        }
        userFactory.getCurrentUser = function(id){
            return $http.put('/api/users/getcurrentuser/'+id)
        }
        userFactory.addIntake = function(intake){
            return $http.post('/api/users/addintake',intake)
        }
        userFactory.markAsComplete = function(object){
            return $http.post('/api/users/markascomplete',object)
        }
        userFactory.markAsInComplete = function(object){
            return $http.post('/api/users/markasincomplete',object)
        }
        userFactory.addWellnessIntake = function(intake){
            return $http.post('/api/users/addwellnessintake',intake)
        }
        userFactory.addBooking = function (dateInfo) {
            return $http.post("/api/users/addbooking", dateInfo)
        }
        userFactory.markBookingAsCompleted = function(bookingInfo){

            return $http.post('/api/users/markbookingascompleted',bookingInfo)

        }
        userFactory.markBookingAsNotCompleted = function(bookingInfo){

            return $http.post('/api/users/markbookingasnotcompleted',bookingInfo)

        }
        userFactory.changeMessageToRead = function (id, index) {
            return $http.put('/api/users/changemessagetoread/' + id + "/" + index)
        }
        userFactory.changeMessageToUnRead = function (id, index) {
            return $http.put('/api/users/changemessagetounread/' + id + "/" + index)
        }
        //User.create(regData)
        userFactory.createDate = function (dateInfo) {
            return $http.post('/api/months/createdate', dateInfo)
        }
        userFactory.getDate = function (id) {
            return $http.put('/api/months/getdate/' + id)
        }
        userFactory.updateDate = function (info) {
            console.log(info)
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
        userFactory.deleteBooking = function(bookingData) {

            return $http.post('/api/users/deletebooking', bookingData)
            
        }
        userFactory.getAdmin = function () {
            return $http.get('/api/users/getadmin')
        }
        //User.sendPassword(resetData);
        userFactory.sendPassword = function (resetData) {

            return $http.post('/api/users/resetpassword', resetData);

        }
        userFactory.findByToken = function (token) {
            return $http.put('/api/users/findbytoken/' + token)
        }
        userFactory.savePassword = function (regData) {

            return $http.post('/api/users/savepassword/', regData);

        }
        userFactory.editPayRate = function (newinfo) {
            return $http.post('/api/users/editpayrate', newinfo)
        }
        userFactory.editPhoneNumber = function (newinfo) {
            return $http.post('/api/users/editphonenumber', newinfo)
        }
        userFactory.editEmail = function (newinfo) {
            return $http.post('/api/users/editemail/', newinfo)
        }
        userFactory.sendSms = function (userDetails) {
            return $http.post('/api/users/sendsms', userDetails)
        }
        userFactory.sendMessage = function (messageDetails) {
            return $http.post('/api/users/sendmessage', messageDetails)
        }
        userFactory.addHoursToBookedJob = function (jobData) {
            return $http.post('/api/users/addhourstobookedjob', jobData)
        }
        userFactory.changePayPeriodHistoryEntryToPaid = function (payperiodDetails) {
            return $http.post('/api/users/changepayperiodhistoryentrytopaid', payperiodDetails)
        }
        userFactory.changePayPeriodHistoryEntryToUnPaid = function (payperiodDetails) {
            return $http.post('/api/users/changepayperiodhistoryentrytounpaid', payperiodDetails)
        }


        userFactory.generatePdf = function () {
            return $http.get('/api/generatepdf')
        }
        userFactory.instaSearch = function (input) {
            console.log(input)
            return $http.put('/api/users/' + input)
        }

        userFactory.updatePayPeriod = function (payperiod, username) {
            console.log("Hello from userservice")
            return $http.put('/api/users/updatepayperiod/' + payperiod + '/' + username)

        }
        userFactory.getUser = function (userId) {
            console.log("Hello from userservice")
            return $http.put('/api/users/' + userId);
        }
        userFactory.changeAvailability = function (userid, month, date, boolean) {

            return $http.put('/api/users/' + userid + '/' + month + '/' + date + '/' + boolean);

        }
        userFactory.getMessages = function (id) {

            return $http.put('/api/users/getmessages/' + id)
        }

        userFactory.removeMessage = function (name, index) {
            return $http.put('/api/users/removemessage/' + name + "/" + index)
        }
        userFactory.addBookedJob = function (jobObject) {
            console.log(jobObject)
            return $http.post('/api/bookjob', jobObject);

        }
        userFactory.setToBooked = function (userid, date, boolean) {
            //console.log(jobObject)
            return $http.put('/api/users/' + userid + "/" + date + "/" + boolean);


        }
        return userFactory
    })