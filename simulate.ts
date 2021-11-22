import { Course } from "./course";
import {InfStudent} from "./infStudent";
import { Student } from "./student";
import {BsStudent} from "./bsStudent";
import {BusinessStudentRepository} from "./businessStudentRepository";
import { InformaticsStudentRepository } from "./InformaticsStudentRepository";
import { StudentRepositoryInterface } from "./StudentRepositoryInterface";
import { CourseAssigmentRepository } from "./CourseAssigmentRepository";

class Simulate{
  constructor(infrepository:StudentRepositoryInterface, bsrepository: StudentRepositoryInterface, car:CourseAssigmentRepository){
    let stu1:InfStudent=new InfStudent(1,'iosif','Viktoratos',"ytruwert1");
    let stu2:BsStudent=new BsStudent(2,'iosif1','Viktoratos1','sdsdkljkl');
    let stu3:InfStudent=new InfStudent(3,'iosif2','Viktoratos2',"122ssdds");

let course1:Course=new Course(1, "math")
let course2:Course=new Course(70, 'cs206')
let course3:Course=new Course(2, 'cs306')

car.assignCourse(stu1,course1)
car.assignCourse(stu1,course2)
car.assignCourse(stu1,course3)
car.assignCourse(stu2,course1)
car.assignCourse(stu3,course2)
car.assignCourse(stu1,course3)


bsrepository.addStudent(stu2);
bsrepository.editStudent(stu2)
for(let bsstudent of BusinessStudentRepository.bsstudents){
  for(let property in bsstudent){
console.log(bsstudent[property]);
  }
  }


  infrepository.addStudent(stu1);
  infrepository.editStudent(stu1)
  infrepository.deleteStudent(stu1)
  infrepository.addStudent(stu1);
  infrepository.addStudent(stu3);

  for(let infstudent of InformaticsStudentRepository.infstudents){
    for(let property in infstudent){
  console.log(infstudent[property]);
    }
    }
  }



}





let simulate:Simulate=new Simulate(new InformaticsStudentRepository(), new BusinessStudentRepository(), new CourseAssigmentRepository())
