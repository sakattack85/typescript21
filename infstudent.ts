import { Student } from "./student";

export class InfStudent extends Student{
 infdepartmentid:string;
  constructor(id:number, firstname:string, lastname:string,infdepartmentid:string){
    super(id,firstname,lastname)
   this.infdepartmentid=infdepartmentid;
  }

}
