import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';

  DataInput:String;
  aCount = 0;
  bCount = 0;
  cCount = 0;
  dCount = 0;
  eCount = 0;
  fCount = 0;
  gCount = 0;
  hCount = 0;
  iCount = 0;
  jCount = 0;
  kCount = 0;
  lCount = 0;
  mCount = 0;
  nCount = 0;
  oCount = 0;
  pCount = 0;
  qCount = 0;
  rCount = 0;
  sCount = 0;
  tCount = 0;
  uCount = 0;
  vCount = 0;
  wCount = 0;
  xCount = 0;
  yCount = 0;
  zCount = 0;

  counter(){
    this.aCount = 0;
    this.bCount = 0;
    this.cCount = 0;
    this.dCount = 0;
    this.eCount = 0;
    this.fCount	= 0;
    this.gCount	= 0;
    this.hCount	= 0;
    this.iCount	= 0;
    this.jCount	= 0;
    this.kCount	= 0;
    this.lCount	= 0;
    this.mCount	= 0;
    this.nCount	= 0;
    this.oCount	= 0;
    this.pCount	= 0;
    this.qCount	= 0;
    this.rCount	= 0;
    this.sCount	= 0;
    this.tCount	= 0;
    this.uCount	= 0;
    this.vCount	= 0;
    this.wCount	= 0;
    this.xCount	= 0;
    this.yCount	= 0;
    this.zCount	= 0;
    for(var i = 0; i <= this.DataInput.length; i++){
      if(this.DataInput.charAt(i) == "a"){
        this.aCount += 1;
      }else if(this.DataInput.charAt(i) == "b"){
        this.bCount += 1;
      }else if(this.DataInput.charAt(i) == "c"){
        this.cCount += 1;
      }else if(this.DataInput.charAt(i) == "d"){
        this.dCount += 1;
      }else if(this.DataInput.charAt(i) == "e"){
        this.eCount	+= 1;
      }else if(this.DataInput.charAt(i) == "f"){
        this.fCount	+= 1;
      }else if(this.DataInput.charAt(i) == "g"){
        this.gCount	+= 1;
      }else if(this.DataInput.charAt(i) == "h"){
        this.hCount	+= 1;
      }else if(this.DataInput.charAt(i) == "i"){
        this.iCount	+= 1;
      }else if(this.DataInput.charAt(i) == "j"){
        this.jCount	+= 1;
      }else if(this.DataInput.charAt(i) == "k"){
        this.kCount	+= 1;
      }else if(this.DataInput.charAt(i) == "l"){
        this.lCount	+= 1;
      }else if(this.DataInput.charAt(i) == "m"){
        this.mCount	+= 1;
      }else if(this.DataInput.charAt(i) == "n"){
        this.nCount	+= 1;
      }else if(this.DataInput.charAt(i) == "o"){
        this.oCount	+= 1;
      }else if(this.DataInput.charAt(i) == "p"){
        this.pCount	+= 1;
      }else if(this.DataInput.charAt(i) == "q"){
        this.qCount	+= 1;
      }else if(this.DataInput.charAt(i) == "r"){
        this.rCount	+= 1;
      }else if(this.DataInput.charAt(i) == "s"){
        this.sCount	+= 1;
      }else if(this.DataInput.charAt(i) == "t"){
        this.tCount	+= 1;
      }else if(this.DataInput.charAt(i) == "u"){
        this.uCount	+= 1;
      }else if(this.DataInput.charAt(i) == "v"){
        this.vCount	+= 1;
      }else if(this.DataInput.charAt(i) == "w"){
        this.wCount	+= 1;
      }else if(this.DataInput.charAt(i) == "x"){
        this.xCount	+= 1;
      }else if(this.DataInput.charAt(i) == "y"){
        this.yCount	+= 1;
      }else if(this.DataInput.charAt(i) == "z"){
        this.zCount	+= 1;
      }else{
      }
    }
  }

  firstNum;
  secondNum;
  thirdNum;
  fourthNum;
  fifthNum;
  average:String;
  sum = 0;
  highestNum;
  lowestNum;
  calculate(){
    var first = parseInt(this.firstNum);
    var second = parseInt(this.secondNum);
    var third = parseInt(this.thirdNum);
    var fourth = parseInt(this.fourthNum);
    var fifth = parseInt(this.fifthNum);

    this.sum = (first + second + third + fourth + fifth) / 5;
    this.average = this.sum.toString();
  }

  highest(){
    var first = parseInt(this.firstNum);
    var second = parseInt(this.secondNum);
    var third = parseInt(this.thirdNum);
    var fourth = parseInt(this.fourthNum);
    var fifth = parseInt(this.fifthNum);

    if((first > second) && (first > third) && (first > fourth) && (first > fifth))
    {
      this.highestNum = first;
    }else if((second > third) && (second > fourth) && (second > fifth)){
      this.highestNum = second;
    }else if((third > fourth) && (third > fifth)){
      this.highestNum = third;
    }else if(fourth > fifth){
      this.highestNum = fourth;
    }else{
      this.highestNum = fifth;
    }

    if((first < second) && (first < third) && (first < fourth) && (first < fifth))
    {
      this.lowestNum = first;
    }else if((second < third) && (second < fourth) && (second < fifth)){
      this.lowestNum = second;
    }else if((third < fourth) && (third < fifth)){
      this.lowestNum = third;
    }else if(fourth < fifth){
      this.lowestNum = fourth;
    }else{
      this.lowestNum = fifth;
    }
  }
}
