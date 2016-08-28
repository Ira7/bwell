(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * Dashboard Object/function
     */
    function Dashboard () {

        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'home/dashboard/dashboard.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('home')
        .directive('dashboard', Dashboard );

})();
