import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: Lista [];
  constructor(
    private listaService: ListaService
  ) { }

  ngOnInit() {
    this.listaService.obtenerLista().subscribe(
      lista => this.lista = lista
    );
  }

}
