var appRouteModule = angular.module("appRouteModule", [
    "appRoot",
    "studentModule",
    "subjectModule",
    "errorModule",
    "ui.router",
]);
var paths = [
    { name: "app", url: "/", component: "appComponent" },
    { name: "error", url: "/error", component: "errorComponent" },
    { name: "student", url: "/student", component: "studentComponent" },
    { name: "subject", url: "/subject", component: "subjectComponent" },
];
appRouteModule.config(($stateProvider, $urlServiceProvider) => {
    console.log("$urlServiceProvider.rules:: ", $urlServiceProvider.rules);
    $urlServiceProvider.rules.otherwise({ state: 'app' });
    paths.forEach((path) => $stateProvider.state(path));
});
appRouteModule.component("appRouteComponent", {
    templateUrl: "./appRoute/appRoute.html",
    bindings: {},
    controller: function appController($scope, $compile) {
        this.$postLink = function() {
            console.log("appRoute Module render function called..");
        };
    },
});