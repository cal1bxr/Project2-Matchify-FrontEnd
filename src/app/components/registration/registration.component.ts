import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() description!: string;
  useremail: string = "";

  constructor(private registrationService: RegistrationService, private user: User, private userService: UserService) { }

  ngOnInit(): void {
     this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email})
  }

  login(fName: any, lName: any, des: any){
    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.body.email
    console.log(this.useremail);
    this.user = {
      firstName: fName.value,
      lastName: lName.value,
      email: this.useremail,
      description: des.value,
      artist1: undefined,
      artist2: undefined,
      artist3: undefined,
      artist4: undefined,
      artist5: undefined,
      artist6: undefined
    }
    this.registrationService.postRegistration(this.user);
  })
    console.log(this.user);
    this.registrationService.postRegistration(this.user);
  }


  

}
