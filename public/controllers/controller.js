var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/contactList')

    person1 = {
    	name: 'Olli',
    	points: '2',
    	won: '2',
    	lost: '0'
    };

    person2 = {
    	name: 'Timo',
    	points: '0',
    	won: '0',
    	lost: '2'
    };

    person3 = {
    	name: 'Sami',
    	points: '0',
    	won: '0',
    	lost: '0'
    };

    var contactList = [person1, person2, person3];
    $scope.contactList = contactList;

}]);