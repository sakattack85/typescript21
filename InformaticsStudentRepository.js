"use strict";
exports.__esModule = true;
exports.InformaticsStudentRepository = void 0;
var InformaticsStudentRepository = /** @class */ (function () {
    function InformaticsStudentRepository() {
    }
    InformaticsStudentRepository.prototype.getStudents = function () {
        return InformaticsStudentRepository.infstudents;
    };
    InformaticsStudentRepository.prototype.addStudent = function (student) {
        InformaticsStudentRepository.infstudents.push(student);
    };
    InformaticsStudentRepository.prototype.editStudent = function (student) {
        student.firstname = "edited name again";
    };
    InformaticsStudentRepository.prototype.deleteStudent = function (student1) {
        InformaticsStudentRepository.infstudents = InformaticsStudentRepository.infstudents.filter(function (el) {
            return el !== student1;
        });
    };
    InformaticsStudentRepository.infstudents = [];
    return InformaticsStudentRepository;
}());
exports.InformaticsStudentRepository = InformaticsStudentRepository;
