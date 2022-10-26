import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(

    private router: Router

  ) { }

  ngOnInit(){

    if(environment.validation == false){

      this.router.navigate(['']);

    }

    window.scroll(0, 0)

  }

}
