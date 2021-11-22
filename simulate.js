"use strict";
exports.__esModule = true;
var course_1 = require("./course");
var infStudent_1 = require("./infStudent");
var bsStudent_1 = require("./bsStudent");
var businessStudentRepository_1 = require("./businessStudentRepository");
var InformaticsStudentRepository_1 = require("./InformaticsStudentRepository");
var CourseAssigmentRepository_1 = require("./CourseAssigmentRepository");
var Simulate = /** @class */ (function () {
    function Simulate(infrepository, bsrepository, car) {
        var stu1 = new infStudent_1.InfStudent(1, 'iosif', 'Viktoratos', "ytruwert1");
        var stu2 = new bsStudent_1.BsStudent(2, 'iosif1', 'Viktoratos1', 'sdsdkljkl');
        var stu3 = new infStudent_1.InfStudent(3, 'iosif2', 'Viktoratos2', "122ssdds");
        var course1 = new course_1.Course(1, "math");
        var course2 = new course_1.Course(70, 'cs206');
        var course3 = new course_1.Course(2, 'cs306');
        car.assignCourse(stu1, course1);
        car.assignCourse(stu1, course2);
        car.assignCourse(stu1, course3);
        car.assignCourse(stu2, course1);
        car.assignCourse(stu3, course2);
        car.assignCourse(stu1, course3);
        bsrepository.addStudent(stu2);
        bsrepository.editStudent(stu2);
        for (var _i = 0, _a = businessStudentRepository_1.BusinessStudentRepository.bsstudents; _i < _a.length; _i++) {
            var bsstudent = _a[_i];
            for (var property in bsstudent) {
                console.log(bsstudent[property]);
            }
        }
        infrepository.addStudent(stu1);
        infrepository.editStudent(stu1);
        infrepository.deleteStudent(stu1);
        infrepository.addStudent(stu1);
        infrepository.addStudent(stu3);
        for (var _b = 0, _c = InformaticsStudentRepository_1.InformaticsStudentRepository.infstudents; _b < _c.length; _b++) {
            var infstudent = _c[_b];
            for (var property in infstudent) {
                console.log(infstudent[property]);
            }
        }
    }
    return Simulate;
}());
var simulate = new Simulate(new InformaticsStudentRepository_1.InformaticsStudentRepository(), new businessStudentRepository_1.BusinessStudentRepository(), new CourseAssigmentRepository_1.CourseAssigmentRepository());
