import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css']
})
export class DiretivaForComponent implements OnInit {

  alunos!: Array<string>
  nome!: string

  constructor() { }

  ngOnInit(): void {
    this.alunos = new Array();
    this.alunos.push("Lucas")
    this.alunos.push("Clara")
  }

  deletar(index:number){
    this.alunos.splice(index, 1)
  }

  adicionar(){
    if(this.nome){
      this.alunos.push(this.nome)
      this.nome = ""
    }

  }

}
