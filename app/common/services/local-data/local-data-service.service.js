(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * LocalDataService Object/function
     */
    function LocalDataService(dataService, $log, $q) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            data: null
        };

        /**
         * init() - Private function
         */
        function _init() {
            var deferred = $q.defer();
            //mock data
            var mockData = {
                user: 'medical_clinic',
                patients: [
                    { name: 'a' },
                    { name: 'b' }
                ]
            };
            dataService.get('url', { data: '' })
                .then(function (res) {
                    //_model.data = res;
                    _model.data = mockData;
                    deferred.resolve(_model.data);
                },
                function failure(err) {
                    _model.data = mockData;
                    $log.error(err);
                    deferred.reject(_model.data);
                });
                return deferred.promise;
        }

        _init();

        /****************** PUBLIC *******************/
        var service = {
            init: _init,
            getData() {
                return _model.data;
            },
            setData(val) {
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
