var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'smart-table', 'ngDialog']);
app.controller('test123', function ($scope, ngDialog, $http) {
            $http({
                method: "GET",
                url: "https://cthouhf5db.execute-api.us-east-1.amazonaws.com/dev/api/v1/featureflags"
            }).then(function mySucces(response) {
                $scope.rowCollection = response.data;
                angular.forEach($scope.rowCollection, function (item) {
                    
                })
            });
                $scope.trigModal = function () {
                    ngDialog.open({
                        template: 'templates/create-ff.html',
                        className: 'ngdialog-theme-default'
                    });
                }
                
                $scope.checkModel = function (feature) {
                    console.log("Came here");
                    console.log(feature);
                }
            });