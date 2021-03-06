import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { JogadorService } from '../jogador.service';
import { Observable } from 'rxjs';

export class Jogador {
  id!: number;
  nome!: string;
  sobrenome!: string;
  time!: string;
  posicao!: string;
  idade!: number;
  status!: string;
}

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','sobrenome','time','posicao','idade','status','acoes'];
  dataSource = new MatTableDataSource<Jogador>();
  jogadores: Jogador[] = []


  constructor(private service: JogadorService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getJogadores().subscribe(jogadores =>  {
      this.dataSource.data = jogadores
      this.jogadores = jogadores
      console.log(jogadores)
    });
  } 

  openNewDialog(): void {

    var jogador = new Jogador()
    const dialogRef = this.dialog.open(MngJogadorDialog, {
      width: '750px',
      data: jogador
    });  

    dialogRef.afterClosed().subscribe(data =>{
      console.log(jogador)
      this.service.adicionar(jogador).subscribe(jogadorId => {
        this.service.getJogador(jogadorId).subscribe(newJogador => {
          this.dataSource.data = this.dataSource.data.concat(newJogador);

      
         });
      });
    })
  }

  openEditDialog(jogador: Jogador): void {
    const dialogRef = this.dialog.open(MngJogadorDialog, {
      width: '750px',
      data: jogador
    });


    dialogRef.afterClosed().subscribe(data => {
      this.service.editar(jogador).subscribe(_ => {
        this.dataSource.data = this.dataSource.data.map(oldJogador => {
          if(oldJogador.id == jogador.id) return jogador;
          else return oldJogador
        });
      });
    })
  }

  excluir(jogador: Jogador): void {
    this.service.remover(jogador.id).subscribe(_ => {
      this.dataSource.data = this.dataSource.data.filter(oldJogador => oldJogador.id != jogador.id);
    })
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


