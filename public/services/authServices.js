
angular.module('authServices', []).config(function () {


})
    .factory('Auth', function ($http, AuthToken, $q) {

        authFactory = {};

        authFactory.login = function (loginData) {

            return $http.post('/api/authenticate', loginData).then(function (data) {

                AuthToken.setToken(data.data.token, data.data.timelefttoken, data.data.name);
                return data;

            })

        }

        authFactory.logout = function () {

            AuthToken.setToken();

            return $http.post('api/user/cleardatabase')

        };

        authFactory.isLoggedIn = function () {

            if (AuthToken.getToken().token) {

                return true;

            } else {

                return false;

            }

        };

        authFactory.getUser = function () {

            if (AuthToken.getToken()) {

                return $http.post('/api/me', AuthToken.getToken());

            } else {

                $q.reject({ message: 'User has no token' })

            }

        };

        return authFactory

    })

    .factory('AuthToken', function ($window) {

        var authTokenFactory = {};

        authTokenFactory.setToken = function (token, timelefttoken, name) {

            if (token || timelefttoken) {

                $window.localStorage.setItem('token', token);
                $window.localStorage.setItem('timelefttoken', timelefttoken)
                $window.localStorage.setItem('name', name)

            } else {

                $window.localStorage.removeItem('token');
                $window.localStorage.removeItem('timelefttoken');
                $window.localStorage.removeItem('name')

            }


        };
        authTokenFactory.getToken = function () {
            var token = { token: $window.localStorage.getItem('token') };
            return token;
        };
        return authTokenFactory;
    });