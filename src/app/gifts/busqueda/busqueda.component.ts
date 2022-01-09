
import { Component, ElementRef, ViewChild} from '@angular/core';
import { GitfsService } from '../services/gitfs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
//busca en el html el elemento #txtBuscar
  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>;//! operador para asegurarse que  el obj no es nulo
   //para ocupar el servicio debemos injectarlo
   constructor(private giftsService : GitfsService){}

  get historial(){
    return this.giftsService.historial;
  }
   
  buscar(){
     const value = this.txtBuscar.nativeElement.value;
     if(value.trim().length===0)
     { return;}

     this.giftsService.buscarGifts(value);

     this.txtBuscar.nativeElement.value= '';
   } 
}
