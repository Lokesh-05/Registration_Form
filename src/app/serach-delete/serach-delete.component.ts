import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {
  users:any;
  email: string="";
  
  
  constructor(private service:UserRegistrationService) { }


public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data: any)=>this.users=data);
}

public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data: any)=>this.users=data);
 }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data: any)=>this.users=data);
  }

}
