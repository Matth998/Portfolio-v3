import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Error404Component } from './error404/error404.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'home', component: FeedComponent},

  {path: 'error-404', component: Error404Component},

  {path: 'about-me', component: AboutComponent},

  {path: 'skills', component: SkillsComponent},

  {path: 'projects', component: ProjectsComponent},

  {path: 'contacts', component: ContactsComponent},

  {path: '**', redirectTo: 'error-404', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
