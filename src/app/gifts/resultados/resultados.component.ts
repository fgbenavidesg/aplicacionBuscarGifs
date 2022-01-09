import { Component, OnInit } from '@angular/core';
import { GitfsService } from '../services/gitfs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  constructor ( private gitfService : GitfsService){}

  get resultados (){
    return this.gitfService.resultados;
  }
}
