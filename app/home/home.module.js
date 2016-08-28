(function () {
    'use strict';

    angular.module('home', ['common']);

    angular
        .module('home')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.home', {
                url: '^/home',
                views: {
                    'shellNavView@shell': {
                        template: '<nav-private></nav-private>'
                    },
                    'shellSideView@shell': {
                        template: '<sidenav></sidenav>'
                    },
                    'shellContentView@shell': {
                        template: '<dashboard></dashboard>',
                       
                    }
                }
            })
                .state('shell.home.dashboard', {
                    url: '/dashboard',
                    views: {
                        'shellContentView@shell.home.dashboard': {
                            template: '<dashboard></dashboard>'
                        }
                    }
                });


            /* Add New States Above */

        });

})();
