import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { TipoPessoaComponent } from './cliente/tipo-pessoa/tipo-pessoa.component';
import { ClienteService } from './cliente/cliente.service';
import { TipoClienteComponent } from './cliente/tipo-cliente/tipo-cliente.component';
import { FormsModule } from '@angular/forms';
import { LxTextoComponent } from './lx-texto/lx-texto.component';
import { LxModalComponent } from './lx-modal/lx-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { LxProgressComponent } from './lx-progress/lx-progress.component';
import { LxColDirective } from './lx-col.directive';
import { RouterModule } from '@angular/router';
import { CadastroFornecedorComponent } from './cliente/cadastro-fornecedor/cadastro-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    TipoPessoaComponent,
    TipoClienteComponent,
    LxTextoComponent,
    LxModalComponent,
    LxProgressComponent,
    LxColDirective,
    CadastroFornecedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : "cadastro-cliente", component : CadastroClienteComponent },
      { path : "cadastro-fornecedor", component : CadastroFornecedorComponent }
    ])

  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
