import { Component , Input , OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-mon-premier',
  templateUrl: 'mon-premier.component.html',
  styleUrls: ['mon-premier.component.css']
})


export class MonPremierComponent implements OnInit {

  @Input() titl: string ;

  constructor() {
  }

  ngOnInit() {


  }

  onsubmit(form: NgForm) {
    console.log( form.value) ;
  }
}

