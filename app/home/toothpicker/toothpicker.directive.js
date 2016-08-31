(function () {
    'use strict';


    function Toothpicker($log) {

        // $fileLogger.debug("[DayViewDirective] load()");

        var directive = {
            restrict: 'EA',
            scope: {

            },
            templateUrl: 'home/toothpicker/toothpicker.directive.html',
            controller: ToothpickerController,
            controllerAs: 'vm',
            bindToController: true
        };

        function ToothpickerController($log, localDataService) {

            $log = $log.getInstance('ToothpickerController', true);
            $log.debug("load()");


            var vm = this;
            vm.name = "ToothpickerController";

            vm.model = {
                adultTeeth: {
                    teethUp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    teethDown:
                    [
                        {
                            id: 0,
                            name: "1",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "2",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "3",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "4",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "5",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "6",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "7",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "8",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "9",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "10",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "11",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "12",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "13",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "14",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "15",
                            selectedTooth: false
                        },
                        {
                            id: 0,
                            name: "16",
                            selectedTooth: false
                        }
                    ]

                },
                childTeeth: {
                    teethUp: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: [], 15: [], 16: [] },
                    teethDown: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: [], 15: [], 16: [] },
                }
            }

            vm.treatmentType = {
                '1': "סתימה",
                '2': "עקירה",
                '3': "טיפול שורש"
            }





            function _selectTeeth(tooth) {
                $log.debug("selectTeeth");
                tooth.selectedTooth = !tooth.selectedTooth;
            }


            /***************** PUBLIC ******************/
            // vm.model = _model;
            vm.selectTeeth = _selectTeeth;
            localDataService.init().then(function () {
                vm.data = localDataService.getData();
            }, function failure() {
                vm.data = localDataService.getData();
            });

        }

        return directive;
    }

    /* ANGULAR */
    angular
        .module('home')
        .directive('toothpicker', Toothpicker);

})();
