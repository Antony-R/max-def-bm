import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    typeWriter();
  }

}

var i = 0;
function typeWriter(){
  var txt = 'Max. Deflection and Bending Moment';
  var speed = 50;
  if (i < txt.length) {
    document.getElementById("text")!.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
