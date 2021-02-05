import { Component, OnInit } from '@angular/core';

import {Item} from '../models/item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent implements OnInit {
  
  ishighligh = false;
  constructor() { }

  ngOnInit(): void {
  }

}
