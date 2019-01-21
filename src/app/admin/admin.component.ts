import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  name: String;

  constructor() {
    this.name = "Nimal";
   }

  ngOnInit() {
    alert("Logged in as admin!")
  }

}
