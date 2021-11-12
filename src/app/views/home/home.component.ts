import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  constructor() { }

  ngOnInit(): void {
    this.titulo! = 'Game Mania';
    this.texto! = 'A loja com hardwares, acessórios e jogos de todas as gerações! Cadastre-se para receber novidades, brindes e promoções!';
  }

}
