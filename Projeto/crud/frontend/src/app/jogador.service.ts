import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Jogador } from './jogador/jogador.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private http: HttpClient) { }

  getJogador(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>("http://localhost:3000/jogador");
  }
}
