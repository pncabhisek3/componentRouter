var studentModule = angular.module("studentModule", []);
studentModule.component("studentComponent", {
    bindings: {},
    templateUrl: "./student/student.html",
    controller: function studentController($state, $compile) {
        this.$postLink = function() {
            console.log("Student render student...");
        }
    }
});