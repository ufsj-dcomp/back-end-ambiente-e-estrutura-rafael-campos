import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from './jogador/jogador.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private http: HttpClient) { }

  getJogadores(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>("http://localhost:3000/jogador");
  }

  getJogador(jogadorId: number): Observable<Jogador>{
    return this.http.get<Jogador>("http://localhost:3000/jogador/" + jogadorId);
  }

  adicionar(jogador: Jogador): Observable<any>{
    return this.http.post("http://localhost:3000/jogador", jogador);
  }

  editar(jogador: Jogador): Observable<any>{
    return this.http.put("http://localhost:3000/jogador" + jogador.id, jogador );
  }

  remover(jogadorId: number): Observable<any>{
    return this.http.delete("http://localhost:3000/jogador" + jogadorId );
  }

  
}
