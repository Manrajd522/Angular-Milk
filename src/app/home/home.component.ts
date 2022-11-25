import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  

    title = 'milk';
    input1 = "";
    input01 = "";
    input2  = 0;
    input3 = 0;
    result = 0;
    input4 = "";
    input04 =0;
    input5 = 0;
    result1 = 0;
    result2 = 0;
    input6 =0;
    input7 = 0;
    input="";
    fat1 ="";
    amount1 = "";
    userId : string[]= [];
    Quantity :string[] =[];
    fat : string[] = [];
    amount : string[] =[];
    
    seller() {
      this.result = this.input2 *7* this.input3;
      this.input6 = this.input6 + this.input2;
      this.result2 = this.input6 - this.input7;
      this.userId.push(this.input1);

      this.input= this.input2.toString();
      this.Quantity.push(this.input);

      this.fat1= this.input3.toString();
      this.fat.push(this.fat1);

      this.amount1= this.result.toString();
      this.amount.push(this.amount1);
      
    }
    
    clear(){
      
      this.input1 = "";
      this.input2 = 0;
      this.input3 = 0;
      this.result = 0;
      this.input4= "";
      this.input5 = 0;
       this.result1= 0;
    }
    buyer(){
      this.result1 = this.input5 * 50;
      this.input7 = this.input7 + this.input5;
      this.result2 = this.input6 - this.input7;
     

    }

    

  constructor() { }

  ngOnInit(): void {
  }

}
