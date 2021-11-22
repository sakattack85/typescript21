"use strict";
exports.__esModule = true;
exports.BusinessStudentRepository = void 0;
var BusinessStudentRepository = /** @class */ (function () {
    function BusinessStudentRepository() {
    }
    BusinessStudentRepository.prototype.getStudents = function () {
        return BusinessStudentRepository.bsstudents;
    };
    BusinessStudentRepository.prototype.addStudent = function (student) {
        BusinessStudentRepository.bsstudents.push(student);
    };
    BusinessStudentRepository.prototype.editStudent = function (student) {
        student.firstname = "edited name";
    };
    BusinessStudentRepository.prototype.deleteStudent = function (student) {
        BusinessStudentRepository.bsstudents = BusinessStudentRepository.bsstudents.filter(function (el) {
            return el !== student;
        });
    };
    BusinessStudentRepository.bsstudents = [];
    return BusinessStudentRepository;
}());
exports.BusinessStudentRepository = BusinessStudentRepository;
