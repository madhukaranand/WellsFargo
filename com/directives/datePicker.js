/// <reference path="../../angular.js" />
/// <reference path="../app.js" />

app.directive("datePicker",
function () {
    return {
        compile: function (tElement, tAttrs, transclude) {

            return function (scope, iElement, iAttrs, controller) {
                iElement.datepicker({
                	autoclose: true,
                	calendarWeeks: true,
                	format: "mm-dd-yyyy",
                	endDate: '-1d',
                });
            }
            
        }
    };
});