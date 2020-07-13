var appRoot = angular.module("appRoot", []);
appRoot.component("appComponent", {
    templateUrl: "./appRoot/appRoot.html",
    bindings: {},
    controller: function appController($scope, $compile) {
        this.$postLink = function() {
            console.log("app Module render function called..");
        };
    },
});