import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['angular','mongodb', 'nodejs', 'express']
  userModel = new User()

  topicValue=false;

  constructor(private service:EnrollmentService) {}
  validateTopic(value:any){
    if(value=='default'){
      this.topicValue=true
    }
    else{
      this.topicValue=false
    }
  }
  onSubmit(){
    console.log(this.userModel)
    this.service.enroll(this.userModel).subscribe(
      data=>console.log('success',data),
      error=>console.log('error',error)
    )
  }
}

