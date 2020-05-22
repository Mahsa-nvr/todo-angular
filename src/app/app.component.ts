import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl : '/templates/app.component.html',
  
})
export class AppComponent  {

 datas: any[] = [
  {
    title:"meet mr.jack of all trads",
    checked: false,
    status: false,
    show: false,
    dueTime: ''
   },
   {
    title:"being at my best mood",
    checked: false,
    status: false,
    show: false,
    dueTime: ''
   },
   {
    title:"thinking about cosmos absurdity",
    checked: false,
    status: false,
    show: false,
    dueTime: ''},
 ];


 inputNew : string;
 checkedd : boolean = false;
 deadTime : string;
 editInput : string;
 topNot : string  
 top : number = -100;

 constructor(){
this.topNot = `${this.top}px`
 }

 ngOnInit(){
   this.inputNew = '';
   this.deadTime = '';
 
setInterval(()=>{
  let currentTime : any = new Date().toTimeString().split(" ")[0];
  let str1 =   currentTime.split(":")[0] * 3600 + currentTime.split(":")[1] * 60 + currentTime.split(":")[2];
 
  this.datas.map((el)=> {
    let endTime = el.dueTime;
    let str2 = endTime.split(":")[0] * 3600 + endTime.split(":")[1] * 60 + endTime.split(":")[2];
    
    if(str1 === str2){
     return (
       el.show = true
     )
    }else {return null}
  })
} , 1000)

 }
 



addData() : void {
  var deadTime = this.deadTime;
  if(deadTime.split(":").length !== 3) {  
    let arr = deadTime.split(":")
    arr.push('00')
    let str3 = arr.join(':')
    this.deadTime = str3;    
}

 if(this.inputNew.trim().length === 0 || this.deadTime.length === 0 ) {
   alert('please enter your task and deadTime')
 }
 else {
  this.datas.push({
    title : this.inputNew,
    checked: false,
    status: false,
    show: false,
    dueTime: this.deadTime,
    
  })
  console.log(this.datas)
  this.inputNew='';
  this.deadTime='';
}

}



 removeData(data : any){
  this.datas.splice(this.datas.indexOf(data),1)
 }

 checkedData(data : any){
   data.checked = true
   setTimeout(() => {
   data.status = true ;
   }, 2000)

 }

 editData(data: any){
  var result = prompt("Enter a value");
  if(result.length !== 0 ){
    data.title= result
  }else {
    alert ('please enter charactors')
  } 
}
}

