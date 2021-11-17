import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string;

  constructor() { }

  ngOnInit(): void {
    this.titulo! = 'Conheça nossa loja virtual!'
    this.texto! = 'Compre jogos e acessórios de informática, é prático e rápido!'
    this.tituloDestaque! = 'Metroid Dread'
    this.textoDestaque! = 'Sucesso nas reviews e agrada fans!'
  }

  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.password}`;
  }

}
