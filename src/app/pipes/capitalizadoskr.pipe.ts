import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizadoskr'
})
export class CapitalizadoskrPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): string {
    
    value = value.toLocaleLowerCase();

    let names = value.split(' ');

      console.log(names)


    if(todas){
      names.map(function(name){
        names = names.map(function(name){//name = juan  name[0]=j
          return name[0].toUpperCase() + name.substr(1);
        })
      })
    }else{
        console.log(names[0])
        names[0] =  names[0][0].toUpperCase() + names[0].substr(1);
    }
    
    return names.join(' ');
  }

}
