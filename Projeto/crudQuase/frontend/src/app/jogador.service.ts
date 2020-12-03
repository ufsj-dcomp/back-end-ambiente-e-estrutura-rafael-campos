import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jogador } from './jogador/jogador.component';
import { Globals } from './globals/globals';


@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private http: HttpClient, private globals: Globals) { }

  getJogadores(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>("http://localhost:3000/jogadores", this.header());
  }

  getJogador(jogadorId: number): Observable<Jogador>{
    return this.http.get<Jogador>("http://localhost:3000/jogadores/" + jogadorId, this.header());
  }

  adicionar(jogador: Jogador): Observable<any>{
    console.log(jogador)
    return this.http.post("http://localhost:3000/jogadores", jogador, this.header());
  }

  editar(jogador: Jogador): Observable<any>{
    console.log(jogador)
    return this.http.put("http://localhost:3000/jogadores/" + jogador.id, jogador, this.header() );
  }
  remover(jogadorId: number): Observable<any>{
    return this.http.delete("http://localhost:3000/jogadores/" + jogadorId, this.header() );
  }
 
  header(){
		return {
			headers: new HttpHeaders({'Content-Type': 'application/json',
				'x-access-token': this.globals.loginData.token
			})
		};
	}
}


  

