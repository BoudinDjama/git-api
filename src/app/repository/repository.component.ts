import { Component, OnInit } from '@angular/core';
import  {GitHubService} from '../git-hub.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos;
  constructor(private git : GitHubService) { }

  ngOnInit() {
    this.git.getRepositories().subscribe((data)=>{this.repos = data});
  }
public searchTerm: string; 

}