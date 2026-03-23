(function () {
    'use strict';

    angular.module('courseApp')
        .filter('courseOrder', function () {
            return function (courses) {
                if (!courses) {
                    return courses;
                }
                return courses.slice().sort(function (a, b) {
                    var nameA = (a.name || '').toLowerCase();
                    var nameB = (b.name || '').toLowerCase();
                    return nameA.localeCompare(nameB);
                });
            };
        });

})();