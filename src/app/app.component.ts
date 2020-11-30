import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre : string = "Lionel Messi";

  myarr = [1,2,3,4,5,6,7,8,9,10];

  PI : number = Math.PI;

  porcentaje : number = 0.245;

  salario : number = 1234.5;

  fecha : Date = new Date()

  idioma : string = 'es';


  valorPromesa = new Promise<string>( (resolve) => {
      setTimeout(() => {
        resolve("La data esta lista para usarse")
      }, 5000);
  } )

  heroe = {
    nombre : 'Diegoflow',
    clave : 'maravisha',
    edad : 22,
    direccion : {
      calle : 'calle 22',
      barrio : 'Limonar'
    }
  }

  changeLanguage(language:string){
    this.idioma = language;
  }

}
