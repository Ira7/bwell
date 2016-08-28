(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * Request Object/function
     */
    function Request () {

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
            replace: true,
            scope: {

            },
            templateUrl: 'home/request/request.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('home')
        .directive('request', Request );

})();
