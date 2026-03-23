(function () {
    angular
        .module('courseApp')
        .service('AuthService', AuthService);

    function AuthService() {
        var isAuthenticated = false;

        this.logIn = function (username, password) {
            if (username === 'admin' && password === 'admin') {
                isAuthenticated = true;
                return true;
            }
            return false;
        };
        this.logout = function () {
            isAuthenticated = false;
        };

        this.isLoggedIn = function () {
            return isAuthenticated;
        };


    }
})();