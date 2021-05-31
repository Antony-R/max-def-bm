import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.css']
})
export class FormulaTableComponent {

  inMM:any = 0;

  isCalc1bClicked: boolean = false;
  isCalc1dClicked: boolean = false;

  isCalc2bClicked: boolean = false;
  isCalc2dClicked: boolean = false;

  isCalc3bClicked: boolean = false;
  isCalc3dClicked: boolean = false;

  isCalc4bClicked: boolean = false;
  isCalc4dClicked: boolean = false;

  isCalc5bClicked: boolean = false;
  isCalc5dClicked: boolean = false;

  dm1Val_M?: number;
  dl1Val_L?: number;
  dei1Val_EI?: number;
  bm1Val_M?: number;
  ans1d: any;
  ans1b: any;

  dw2Val_W?:number;
  dl2Val_L?:number;
  dei2Val_EI?:number;
  bw2Val_W?:number;
  bl2Val_L?:number;
  ans2d: any;
  ans2b: any;

  dw3Val_w?:number;
  dl3Val_L?:number;
  dei3Val_EI?:number;
  bw3Val_w?:number;
  bl3Val_L?:number;
  ans3d: any;
  ans3b: any;

  dw4Val_W?:number;
  dl4Val_L?:number;
  dei4Val_EI?:number;
  bw4Val_W?:number;
  bl4Val_L?:number;
  ans4d: any;
  ans4b: any;

  dw5Val_w?:number;
  dl5Val_L?:number;
  dei5Val_EI?:number;
  bw5Val_w?:number;
  bl5Val_L?:number;
  ans5d: any;
  ans5b: any;


  calc1d(){
    this.isCalc1dClicked = !this.isCalc1dClicked;
    let M = this.dm1Val_M!;
    let L = this.dl1Val_L!;
    let EI = this.dei1Val_EI!;
    this.ans1d = (M * L ** 2 / (2 * EI)).toExponential() + ' or ' + (M * L ** 2 / (2 * EI)).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc1b(){
    this.isCalc1bClicked = !this.isCalc1bClicked;
    this.ans1b = this.bm1Val_M?.toExponential() + ' or ' + this.bm1Val_M?.toExponential().replace(/e\+?/, ' x 10^');
  }

  calc2d(){
    this.isCalc2dClicked = !this.isCalc2dClicked;
    let W = this.dw2Val_W!;
    let L = this.dl2Val_L!;
    let EI = this.dei2Val_EI!;
    this.ans2d = (W * L ** 3 / (3 * EI)).toExponential() + ' or ' + (W * L ** 3 / (3 * EI)).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc2b(){
    this.isCalc2bClicked = !this.isCalc2bClicked;
    let W = this.bw2Val_W!;
    let L = this.bl2Val_L!;
    this.ans2b = (W * L).toExponential() + ' or ' + (W * L).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc3d(){
    this.isCalc3dClicked = !this.isCalc3dClicked;
    let w = this.dw3Val_w!;
    let L = this.dl3Val_L!;
    let EI = this.dei3Val_EI!;
    this.ans3d = (w * L ** 4 / (8 * EI)).toExponential() + ' or ' + (w * L ** 4 / (8 * EI)).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc3b(){
    this.isCalc3bClicked = !this.isCalc3bClicked;
    let w = this.bw3Val_w!;
    let L = this.bl3Val_L!;
    this.ans3b = ((w * (L ** 2)) / 2).toExponential() + ' or ' + ((w * (L ** 2)) / 2).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc4d(){
    this.isCalc4dClicked = !this.isCalc4dClicked;
    let W = this.dw4Val_W!;
    let L = this.dl4Val_L!;
    let EI = this.dei4Val_EI!;
    this.ans4d = (W * L ** 3 / (48 * EI)).toExponential() + ' or ' + (W * L ** 3 / (48 * EI)).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc4b(){
    this.isCalc4bClicked = !this.isCalc4bClicked;
    let W = this.bw4Val_W!;
    let L = this.bl4Val_L!;
    this.ans4b = ((W * L) / 4).toExponential() + ' or ' + ((W * L) / 4).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc5d(){
    this.isCalc5dClicked = !this.isCalc5dClicked;
    let w = this.dw5Val_w!;
    let L = this.dl5Val_L!;
    let EI = this.dei5Val_EI!;
    this.ans5d = (5 * w * L ** 4 / (384 * EI)).toExponential() + ' or ' + (5 * w * L ** 4 / (384 * EI)).toExponential().replace(/e\+?/, ' x 10^');
  }

  calc5b(){
    this.isCalc5bClicked = !this.isCalc5bClicked;
    let w = this.bw5Val_w!;
    let L = this.bl5Val_L!;
    this.ans5b = ((w * (L ** 2)) / 8).toExponential() + ' or ' + ((w * (L ** 2)) / 8).toExponential().replace(/e\+?/, ' x 10^');
  }

}
