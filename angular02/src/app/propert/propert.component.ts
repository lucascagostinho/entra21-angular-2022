import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert',
  templateUrl: './propert.component.html',
  styleUrls: ['./propert.component.css']
})
export class PropertComponent implements OnInit {
  //properties
  nome: string = 'Lucas'
  sobreNome!: string
  idade: string = '25'
  email: string = 'lucascagostinho@gmail.com'
  possuiCarro: boolean = false
  enderecoImagem: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
  padrao: string = '48'
  google: string = 'https://google.com'
  alvo: string = '_blank'
  tabela: string = 'table table-bordered table-striped'

  constructor() { }

  ngOnInit(): void {

  }

}
