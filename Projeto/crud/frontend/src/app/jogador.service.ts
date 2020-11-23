import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jogador } from './jogador/jogador.component';


@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private http: HttpClient) { }

  getJogadores(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>("http://localhost:3000/jogadores");
  }

  getJogador(jogadorId: number): Observable<Jogador>{
    return this.http.get<Jogador>("http://localhost:3000/jogadores/" + jogadorId);
  }

  adicionar(jogador: Jogador): Observable<any>{
    return this.http.post("http://localhost:3000/jogadores", jogador);
  }

  editar(jogador: Jogador): Observable<any>{
    return this.http.put("http://localhost:3000/jogador" + jogador.id, jogador );
  }

  remover(jogadorId: number): Observable<any>{
    return this.http.delete("http://localhost:3000/jogadores/" + jogadorId );
  }

  
}
