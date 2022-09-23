import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,ValidatorFn, Validators,AbstractControl,ValidationErrors } from '@angular/forms'
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    phone_no: '',
    email:'',
    nrc:''

  };
  userForm!: FormGroup;
  currentUsers: User[] = [];
  formSubmitted: boolean = false;
  constructor(private service:UserService,private fb:FormBuilder) { }

  ngOnInit(): void {

    const data = {
     username : this.user.username,
     phone_no : this.user.phone_no,
    email : this.user.email,
    nrc : this.user.nrc,
    };

    this.service.createUser(data)
      .subscribe(
        response => {
          console.log(response);
          this.formSubmitted = true;
        });

    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("[A-Z].*$"),]],
      phone_no: ['', [Validators.required, Validators.pattern("[0-9]+$"), Validators.minLength(7), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      nrc: ['', [Validators.required]]

    })
  }



}
