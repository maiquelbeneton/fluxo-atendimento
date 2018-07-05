import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { TipoPessoa } from '../tipo-pessoa';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  
  cliente: string = "Proprietário";
  contador : number = 0;
  imagem : string;
  pessoa: Pessoa;

  constructor(private svcCliente: ClienteService) { }

  ngOnInit() {
    let self = this;

    setTimeout(() => {
      self.cliente = "Proprietário iniciando...";
      self.imagem = "assets/neymar_caido.jpg";
    }, 1000);
    
    let interval = setInterval(() => {
      self.cliente = "Proprietário " + self.contador++;
      if (self.contador == 3){
        clearInterval(interval);
        self.imagem  ="assets/neymar2.jpg";
      }
    }, 2000);


    if (this.pessoa == null){
      this.pessoa = new Pessoa();
      this.pessoa.nomePessoa = "Pletsch";
      this.pessoa.tipoPessoa = TipoPessoa.Juridica;
    }    
  }

  levantarNeymar() : void {
    this.imagem = "assets/images.jpg";
  }


}
