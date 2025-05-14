import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})

export class MainScreenComponent implements OnInit {

  textInput1:any = "";
  outputText:any = ""
  bolded:any = "";

  constructor(elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log()
  }

  selectBold(styleType){
    
    var highlighted = window.getSelection().toString();

    console.log("bolded : ", this.bolded)

    if(styleType == "bold") {
      this.bolded = highlighted.bold();
      
    }

    if(styleType == "italic") {
      this.bolded = highlighted.italics();
    }

    if(styleType == "line") {
      this.bolded = highlighted.strike();
    }

    console.log("bolded : ", this.bolded)
    this.outputText = this.textInput1.replace(highlighted, this.bolded);
    
  }

  resetText(){

    var highlighted = window.getSelection().toString();
    var bolded = highlighted.normalize();
    this.outputText = this.textInput1.replace(highlighted, bolded);

  }
  
}