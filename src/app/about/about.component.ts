import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(

    private router: Router

  ) {}

  ngOnInit(){

    if(environment.validation == false){

      this.router.navigate(['']);

    }

    window.scroll(0, 0)

  }


}
