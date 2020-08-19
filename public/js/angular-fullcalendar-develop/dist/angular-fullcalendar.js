/*!
 * angular-fullcalendar
 * https://github.com/JavyMB/angular-fullcalendar#readme
 * Version: 1.0.1 - 2017-10-06T14:28:29.825Z
 * License: ISC
 */


(function () { 
'use strict';
angular.module('angular-fullcalendar',[])
    .value('CALENDAR_DEFAULTS',{
        locale:'en'
    })
    .directive('fc',['CALENDAR_DEFAULTS',fcDirectiveFn]);

function fcDirectiveFn(CALENDAR_DEFAULTS) {
    return {
        restrict : 'A',
        scope : {
            eventSource : '=ngModel',options : '=fcOptions'
        },
        link:function (scope, elm) {
            var calendar;
            init();
            scope.$watch('eventSource', watchDirective,true);
            scope.$watch('options',watchDirective,true);
            scope.$on('$destroy', function () { destroy();});
            function init() {
                if (!calendar) {
                    calendar = $(elm).html('');
                }
                calendar.fullCalendar(getOptions(scope.options));
            }
            function destroy() {
              if(calendar && calendar.fullCalendar){
                  calendar.fullCalendar('destroy');
              }
            }
            function getOptions(options) {
                return angular.extend(CALENDAR_DEFAULTS,{
                    events:scope.eventSource
                },options);
            }
            function watchDirective(newOptions,oldOptions) {
                if (newOptions !== oldOptions) {
                    destroy();
                    init();
                } else if ((newOptions && angular.isUndefined(calendar))) {
                    init();
                }
            }
        }
    };

}

}());