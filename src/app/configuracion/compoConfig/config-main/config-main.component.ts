import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-main',
  templateUrl: './config-main.component.html',
  styleUrls: ['./config-main.component.css']
})
export class ConfigMainComponent implements OnInit {

  id : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
