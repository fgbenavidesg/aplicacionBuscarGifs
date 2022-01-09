import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class GitfsService {
//https://api.giphy.com/v1/gifs/search?api_key=ApYMKt9VEzX53U5TLkllDZerU2Fn9R0y&q=dragon ball z&limit=10
    private apiKey: string ='ApYMKt9VEzX53U5TLkllDZerU2Fn9R0y';
    private apiGif: string ='https://api.giphy.com/v1/gifs';
    private _historial: string []=[];

    public resultados : Gif []=[];

    get historial (){
      return [...this._historial];
    }
    //el constructor solo se ejecuta una vez
    constructor(private http : HttpClient){

      if(localStorage.getItem('historial')){
          this._historial = JSON.parse(localStorage.getItem('historial')!);//confia en mi uwu no sera nulo !
      }
      if(localStorage.getItem('resultados')){
        this.resultados = JSON.parse(localStorage.getItem('resultados')!);//confia en mi uwu no sera nulo !
    }

    }
    
                  

    buscarGifts(query:string){
     // si no lo incluye o si no existe
      if(!this._historial.includes(query)){
            //inserta al inicio
        this._historial.unshift(query);
        //arreglo de 10 al llegar a 10 corta el arreglo
        this._historial=this._historial.splice(0,10);
        localStorage.setItem('historial',JSON.stringify(this._historial));
      }

      //construir parametros http
        const params = new HttpParams()
                    .set('api_key',this.apiKey)
                    .set('limit','10')
                    .set('q',query);
     //java  fetch().then(respuesta=>());
      this.http.get<SearchGifsResponse>(`${this.apiGif}/search`,{params})
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      });


      
    }
}
