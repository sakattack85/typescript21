"use strict";
exports.__esModule = true;
exports.CourseAssigmentRepository = void 0;
var CourseAssigmentRepository = /** @class */ (function () {
    function CourseAssigmentRepository() {
    }
    CourseAssigmentRepository.prototype.assignCourse = function (student, course) {
        student.courses.push(course);
    };
    return CourseAssigmentRepository;
}());
exports.CourseAssigmentRepository = CourseAssigmentRepository;
