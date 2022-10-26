import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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
