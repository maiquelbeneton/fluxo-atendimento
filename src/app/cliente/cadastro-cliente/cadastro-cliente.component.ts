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
  pessoas:Pessoa[];
  porcentagemProgresso : number =0;

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
    this.porcentagemProgresso = 33;   

    let servicoClientes = this.svcCliente.getClientes();

    this.porcentagemProgresso = 66;

    servicoClientes.subscribe(res => {
      this.porcentagemProgresso = 88;
      this.pessoas = res;
      this.porcentagemProgresso = 100;
      if (this.pessoas == null){
        this.pessoas = [];
      }
    });


  }

  adicionarCliente(){
    let pessoa : Pessoa = {
      nomePessoa : "Neymar cai cai",
      tipoPessoa : TipoPessoa.Juridica
      }

    this.pessoas.push(pessoa);
//grava no banco de dados
    this.svcCliente.addCliente(pessoa).subscribe(res => {console.log(res)});
  }

}
