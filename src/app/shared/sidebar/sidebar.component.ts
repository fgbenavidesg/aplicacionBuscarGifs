import { Component, OnInit } from '@angular/core';
import { GitfsService } from '../../gifts/services/gitfs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor( private gitfService : GitfsService){}

  get historial(){
    return this.gitfService.historial;
  }
  buscar(history : string){

    if(history.trim().length===0){
      return;
    }
    this.gitfService.buscarGifts(history);
  }
}

