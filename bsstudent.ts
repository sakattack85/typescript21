import { Student } from "./student";

export class BsStudent extends Student{
 bsdepartmentid:string;
  constructor(id:number, firstname:string, lastname:string,bsdepartmentid:string){
    super(id,firstname,lastname)
   this.bsdepartmentid=bsdepartmentid;
  }

}
