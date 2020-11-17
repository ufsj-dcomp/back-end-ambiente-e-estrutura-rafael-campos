import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from './jogador/jogador.component';


@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private http: HttpClient) { }

  getJogador(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>('http://localhost:3000/jogador');
  }
}
