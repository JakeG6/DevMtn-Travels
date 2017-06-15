angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){
$scope.test="testing";
$scope.packageList= mainSrv.packageInfo;
// console.log('$scope.packageList', $scope.packageList)
console.log($stateParams.country)
$scope.packageList = mainSrv.getPackageInfo($stateParams.country)
});


//use $stateParams to call a function on the service that will only give
//you the package data you Washington
