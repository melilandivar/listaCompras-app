import { Injectable } from '@angular/core';
import { Lista } from './lista';
import { LISTA } from './lista.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  obtenerLista(): Observable<Lista[]>{
    return of(LISTA);
  }
}
