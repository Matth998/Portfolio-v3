import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Mail } from '../Model/Mail';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  mail: Mail = new Mail();

  constructor(

    private router: Router

  ) { }

  ngOnInit(){

    if(environment.validation == false){

      this.router.navigate(['']);

    }

    window.scroll(0, 0)

  }

  send() {

    alert("Você será redimencionado para a conta do gmail.")

  }

}
