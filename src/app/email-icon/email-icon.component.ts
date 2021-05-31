import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email-icon',
  templateUrl: './email-icon.component.html',
  styleUrls: ['./email-icon.component.css']
})
export class EmailIconComponent{
  isClicked: boolean = false;
  display(){
    this.isClicked = !this.isClicked;
  }

}
