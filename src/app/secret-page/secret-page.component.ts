import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.css']
})
export class SecretPageComponent implements OnInit {
  private password= "admin";

  constructor( private route: Router) {
   }
  unlock(){
    var textarea = document.getElementById("unclock").value;
    
    if(textarea == this.password){
      this.route.navigate(['/geo-location']);
      var i;
    }
    
    else{
    var textarea = document.getElementById("unclock");
textarea.classList.add("is-invalid");
    console.log("please try again");
    }
    
  }
  ngOnInit() {
  }

}