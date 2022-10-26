import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(){

    window.scroll(0, 0)

  }

  clicou(){

    environment.validation = true;

  }

}
