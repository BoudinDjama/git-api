import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable()
export class GitHubService {
  
  constructor(private http:HttpClient) { }
  user= "BoudinDjama";

  login(user){
    this.user = user;
  }
  getAccountInfo(){
    return this.http.get('https://api.github.com/users/'+this.user);
   }
   
   getRepositories(){
     return this.http.get('https://api.github.com/users/'+this.user+'/repos');
   }

   getRepositoriesDetails(name){
   return this.http.get("https://api.github.com/repos/"+this.user+"/"+name);
   }

}