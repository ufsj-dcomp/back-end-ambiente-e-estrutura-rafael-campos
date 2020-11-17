import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../jogador.service';

export class Jogador{
  id: number;
  nome: string;
  sobrenome: string;
  time: string;
  posicao: string;
  idade: number;
  status: string;
}


@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','sobrenome','time','posicao','idade','status'];
  dataSource = JOGADORES;

  constructor(private service: JogadorService) { }

  ngOnInit() {
    this.service.getJogador().subscribe(jogadores => this.dataSource = jogadores);
  }

}
