angular.module('myApp').controller('test123', function ($scope, ngDialog, $http) {
    $http({
        method: "GET",
        url: "https://cthouhf5db.execute-api.us-east-1.amazonaws.com/dev/api/v1/featureflags"
    }).then(function mySucces(response) {
        $scope.rowCollection = response.data;
        angular.forEach($scope.rowCollection, function (item) {

        })
    });
    $scope.t = "Hello";
    $scope.trigModal = function (row) {
        if (angular.isUndefined(row)) {
            ngDialog.open({
                template: 'templates/create-ff.html',
                className: 'ngdialog-theme-default'
            });
        } else {
            $scope.row = row;
            console.log($scope.row);
            ngDialog.open({
                template: 'templates/edit-ff.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
        }
    }

    $scope.checkModel = function (feature) {
        console.log(feature);
        $http({
            method: "POST",
            url: "https://cthouhf5db.execute-api.us-east-1.amazonaws.com/dev/api/v1/featureflags",
            data: feature
        }).then(function mySucces(response) {
            ngDialog.close();
            console.log("POST request was successfulyl completed")
        });
    }
});