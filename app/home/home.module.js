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
                    // 'shellSideView@shell': {
                    //     template: '<sidenav></sidenav>'
                    // },
                    'shellContentView@shell': {
                        template: '<div></div>',
                       
                    }
                }
            })
                .state('shell.home.dashboard', {
                    url: '/dashboard',
                    views: {
                        'shellContentView@shell': {
                            template: '<dashboard></dashboard>'
                        }
                    }
                })
                 .state('shell.home.request', {
                    url: '/request',
                    views: {
                        'shellContentView@shell': {
                            template: '<request></request>'
                        }
                    }
                });


            /* Add New States Above */

        });

})();
