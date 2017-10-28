angular.module('notebookApp',[]).controller('notebookCtrl', function($scope,$rootScope){

    $scope.bookList = ['a','b','c'];

    $scope.user = {
        name:'Jasper',
        pwd:'123'
    }
    
});