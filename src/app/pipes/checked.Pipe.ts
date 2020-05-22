import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'checked',
    pure: false
})
export class CheckedPipe implements PipeTransform{
    transform(data: object[], ...args:any[]):any {
     if(!data){
         return data
     }
  
  let checkedd= args[0];
  return data.filter((data: any) => data.checked == checkedd);  
    }
   
}