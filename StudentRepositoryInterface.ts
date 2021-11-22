import {Student} from "./Student";
export interface StudentRepositoryInterface{
    getStudents():Student[];
    addStudent(student:Student): void;
    editStudent(student:Student): void;
    deleteStudent(student:Student): void;
}