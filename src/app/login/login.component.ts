import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {GitHubService} from '../git-hub.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 sign_in;
 
  constructor(private form:FormBuilder, private git : GitHubService, private activatedRoute : ActivatedRoute, private route: Router ) {
   
    this.sign_in = this.form.group({Username:''});
    
  }
  onSubmit(username){
    
    
   this.git.login(username.Username);
   this.route.navigate(['/']);
  
  }
  ngOnInit() {
  }

}