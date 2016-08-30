(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * LocalDataService Object/function
     */
    function LocalDataService(dataService, $log) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            data: null
        };

        /**
         * init() - Private function
         */
        function _init() {
            // add logic here...
            dataService.get('url', { data: '' })
                .then(function (res) {
                    _model.data = res;
                },
                function failure(err) {
                    _model.data = {
                        user: 'medical_clinic',
                        patients: [
                            {name: 'a'},
                            {name: 'b'}
                        ]
                    };
                    $log.error(err);
                });
        }

        _init();

        /****************** PUBLIC *******************/
        var service = {
            doSomething: _doSomething,
            get data() {
                return _model.data;
            },
            set data(val) {
                _model.data = val;
            }
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('common')
        .factory('localDataService', LocalDataService);

})();
