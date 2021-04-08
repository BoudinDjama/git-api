import { Component, OnInit } from '@angular/core';
import {GitHubService} from '../git-hub.service';
import {Router} from '@angular/router';
import{ HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {
  info;
  constructor(private git: GitHubService, private http:HttpClient, private route:Router) { }

  ngOnInit() {
    this.git.getAccountInfo().subscribe((data)=> {this.info =data, this.info = data}, (err)=> {this.route.navigate(['/login']), console.log("try again : " + err.message)});
  }

}