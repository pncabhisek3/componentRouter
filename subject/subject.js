var subjectModule = angular.module("subjectModule", []);
subjectModule.component("subjectComponent", {
    bindings: {},
    templateUrl: "./subject/subject.html",
    controller: function subjectController($scope, $compile) {
        this.$postLink = function() {
            console.log("subject on render..");
        };
    },
});