import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitHubService} from '../git-hub.service';
@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {
  repo;
  constructor(private git: GitHubService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
       
    this.git.getRepositoriesDetails(params.get("name")).subscribe((data)=> this.repo = data);
  });
  }

}