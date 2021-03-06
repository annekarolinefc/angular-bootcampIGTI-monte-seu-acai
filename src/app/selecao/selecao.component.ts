import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent {

  //INFORMAR QUE É UM INPUT PARA EXIBIR
  @Input() titulo: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 1;

  //CRIANDO ESTADO
  opcoesEscolhidas: string[]=[]; //será um array vazio

  marcaOuDesmacaOpcao(opcao: string){
   if(this.escolhaAte>1){
    const idx = this.opcoesEscolhidas.indexOf(opcao)
    if(idx===-1){
    this.opcoesEscolhidas.push(opcao)
    } else{
      this.opcoesEscolhidas.splice(idx, 1);
    }
    }else{
    this.opcoesEscolhidas = [opcao];
    }
   }

   estaDesabilitada(opcao: string){
    return this.escolhaAte>1
    && this.opcoesEscolhidas.indexOf(opcao)===-1
    && this.opcoesEscolhidas.length >= this.escolhaAte;
   }
}
