angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
$scope.test="testing";
$scope.travelInfo = mainSrv.travelInfo;


});
