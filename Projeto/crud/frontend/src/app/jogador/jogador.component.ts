import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JogadorService } from '../jogador.service';

export class Jogador {
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
  dataSource = Jogador;

  constructor(private service: JogadorService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getJogador().subscribe(jogadores => this.dataSource = Jogador);
  }

}

@Component({
  selector: 'dialog-mng-jogador',
  templateUrl: 'dialog-mng-jogador.html'
})

export class MngJogadorDialog {
  
  constructor(public dialogRef: MatDialogRef<MngJogadorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Jogador) { }

  onNoClick(): void {
    this.dialogRef.close();
  }  
  
}


