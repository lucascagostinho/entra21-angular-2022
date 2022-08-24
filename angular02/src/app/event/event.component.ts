import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho: number = 100

  constructor() { }

  ngOnInit(): void {
  }

  minhafunc() {
    alert('oi')
  }

  somar() {
    alert('1 + 2 = '+ (1+2))
  }

  sub(a: number, b:number) {
    alert(`${a}-${b}=${(a-b)}`)
  }

  multiplicar() {
    let a: number = Number(prompt("Informe o primerio número"))
    let b: number = Number(prompt("Informe o segundo número"))
    this.resultado = a * b
  }

  aumentar() {
    this.tamanho += 10;

  }

  diminuir() {
    this.tamanho -= 5;
  }

}
