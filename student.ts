import { Course } from "./course";

export abstract class Student{
  id:number;
  firstname:string;
  lastname:string;
  courses:Course[]=[];
  constructor(id:number,firstname:string,lastname:string){
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
  }


}
