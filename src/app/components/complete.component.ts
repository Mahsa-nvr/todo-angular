import {Component,Input} from '@angular/core';
// import {Data} from './../models/data';

@Component({
    selector : 'complete',
    templateUrl : '/templates/complete.component.html',
    
})

export class CompleteComponent{
  @Input() datas: object[];
  @Input() checked:boolean;
  
  
};