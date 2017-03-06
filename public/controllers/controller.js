var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var vm = this;

vm.contactList = '';

$http.get('/contactList').then(function successCallback(res){
    console.log(res);
    vm.contactList = res.data;
})


   /* var person1 = {
    	name: 'Olli',
    	points: '2',
    	won: '2',
    	lost: '0'
    };

    var person2 = {
    	name: 'Timo',
    	points: '0',
    	won: '0',
    	lost: '2'
    };

    var person3 = {
    	name: 'Sami',
    	points: '0',
    	won: '0',
    	lost: '0'
    };

    vm.contactList = [person1, person2, person3];*/

$scope.addContact = function () {
    /*parseInt(
        $('toInt').each(function(){
            $(this).value;
        })
    );*/
    console.log ($scope.contact);
    $http.post('/contactList', $scope.contact);
};


}]);