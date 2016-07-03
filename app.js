var app = angular.module('flapperNews',['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
            });
        $urlRouterProvider.otherwise('home');
    }
]);
app.factory("posts",[function () {
    var o ={
        posts:[]
    };
    return o;
}])
app.controller('MainCtrl',[
    '$scope',
    'posts',function ($scope,posts) {
        $scope.posts= [
            {title: 'post 1', upvotes: 5,url: ''},
            {title: 'post 2', upvotes: 2,url: ''},
            {title: 'post 3', upvotes: 15,url: ''},
            {title: 'post 4', upvotes: 9,url: ''},
            {title: 'post 5', upvotes: 4,url: ''}
        ];
        $scope.addPost = function () {
            if(!$scope.title || $scope.title===''){
                return;
            }
            $scope.posts.push({title:$scope.title,upvotes: 0,url:$scope.url});
            $scope.title='';
            $scope.url='';
        };
        $scope.incrementPosts = function (post) {
            post.upvotes += 1;
        };
        $scope.posts = posts.posts;
    }
]);

