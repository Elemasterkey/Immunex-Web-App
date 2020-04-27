
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpserverService } from '../httpserver.service';

@Component({
  selector: 'authscreen',
  templateUrl: './auths.component.html',
  styleUrls: ['./screen.css', './laptop.css', './tablet.css', './phone.css']
})
export class AuthsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpserverService

    ) { }
    public IMMUNEX_card = "Sign In"
    public login_message = "";
    public create_message ="";
    public i_create_message = "";
    public login_show = true;
    public create_show = false;
    public f_create_show = false;

    // login form 
    public  loginForm = this.fb.group({
      email: ['', [ Validators.required] ],
      password: ['', [ Validators.required ] ]
    });

    // create acc form
    public  create_accForm = this.fb.group({
      full_name : ['', [ Validators.required]],
      email : ['', [ Validators.required] ],
      phone : ['', []],
      dob : ['', [ Validators.required]],
      contry : ['', [ Validators.required]],
      password : ['', [ Validators.required ] ],
      con_password : ['', [ Validators.required ] ]
    });

    // create facility acc form
    public  i_createForm = this.fb.group({
      f_name : ['', [ Validators.required]],
      email : ['', [ Validators.required, Validators.email] ],
      f_id : ['', [ ]],
      phone : ['', [ Validators.required, ]],
      contry : ['', [ Validators.required]],
      password : ['', [ Validators.required ] ],
      con_password : ['', [ Validators.required ] ]
    });

  ngOnInit() {
    
  }


  login(){
  this.http.loguserin(this.loginForm.value).subscribe(data => this.loginAction(data) );
  }

  create(){
  this.http.createaccin(this.create_accForm.value).subscribe(data => this.createAction(data) );
  }
  
  fac_create(){
  this.http.createFacAcc(this.create_accForm.value).subscribe(data => this.createFacAction(data) );
  }
 


  c_user_acc(){
    this.login_show = false;
    this.IMMUNEX_card = "Sign Up";
    this.create_show = true;
    this.f_create_show = false
  }
  log(){
    this.login_show = true;
    this.IMMUNEX_card = "Sign In";
    this.create_show = false;
    this.f_create_show = false
  }
  c_fac_acc(){
    this.login_show = false;
    this.IMMUNEX_card = "Sign Up";
    this.create_show = false;
    this.f_create_show = true;
  }


     
  loginAction(data){
    // after attempting login
  }

  createAction(data){
  //  after creation attempt
  }

  createFacAction(data){
  //  after fac acc creation attempt
  }


  reset_password(){
    // reset password event
  }




}
