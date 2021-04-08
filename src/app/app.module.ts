import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRippleModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { GitHubService } from './git-hub.service';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { VisitorsService } from './visitors.service';

@NgModule({
  
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatRippleModule,NgbCollapseModule, Ng2SearchPipeModule,RouterModule.forRoot([
    {path:'', component: GitHubComponent},  
    {path:'login', component : LoginComponent},
    {path:'repositories', component : RepositoryComponent},
    {path:'repositories/:name', component : RepositoryDetailComponent},
    {path:'secret' , component:SecretPageComponent},
    {path: 'geo-location' , component:GeoLocationComponent}  
    
    ]) ],
  declarations: [ AppComponent, HelloComponent, GitHubComponent, RepositoryComponent, RepositoryDetailComponent, LoginComponent, NavBarComponent, SecretPageComponent, GeoLocationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GitHubService, VisitorsService],
  
})
export class AppModule { }
