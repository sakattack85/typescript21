import { Student } from "./Student";
import {InfStudent} from "./infStudent";
import {StudentRepositoryInterface} from "./StudentRepositoryInterface"
export class InformaticsStudentRepository implements StudentRepositoryInterface {
  
    
    static infstudents:InfStudent[]=[]

    getStudents(): InfStudent[] {
        return InformaticsStudentRepository.infstudents;
    }
    addStudent(student: InfStudent): void {
        InformaticsStudentRepository.infstudents.push(student)   
     }
    editStudent(student: InfStudent): void {
 
       
            student.firstname ="edited name again";
    }
    deleteStudent(student1: Student): void {

        InformaticsStudentRepository.infstudents=  InformaticsStudentRepository.infstudents.filter( (el)=>{
                return el!==student1
            } )
   
    }


}