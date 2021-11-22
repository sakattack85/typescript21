import { Student } from "./Student";
import {BsStudent} from "./BsStudent";
import {StudentRepositoryInterface} from "./StudentRepositoryInterface"
export class BusinessStudentRepository implements StudentRepositoryInterface {
    static bsstudents:BsStudent[]=[]

    getStudents(): Student[] {
        return BusinessStudentRepository.bsstudents;
    }
    addStudent(student: BsStudent): void {
        BusinessStudentRepository.bsstudents.push(student)   
     }
    editStudent(student: BsStudent): void {
      
            student.firstname ="edited name";
    }
    deleteStudent(student: Student): void {
        BusinessStudentRepository.bsstudents=  BusinessStudentRepository.bsstudents.filter( (el)=>{
            return el!==student
        } )

    }


}