import { Course } from "./course";
import { Student } from "./Student";
import {StudentRepositoryInterface} from "./StudentRepositoryInterface"
export class CourseAssigmentRepository {
    assignCourse(student:Student,course:Course){
        student.courses.push(course);
    }


}