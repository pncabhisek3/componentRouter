var errorModule = angular.module("errorModule", []);
appRoot.component("errorComponent", {
    templateUrl: "./error/error.html",
    bindings: {},
    controller: function appController($scope, $compile) {
        this.$postLink = function() {
            console.log("error Module render function called..");
        };
    },
});