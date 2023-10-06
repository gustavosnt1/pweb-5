import { Component } from '@angular/core';

import { PRODUTOS } from 'src/app/shared/modelo/PRODUTOS';
import { Produto } from 'src/app/shared/modelo/produto';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {
  produtos = PRODUTOS;

  excluir(produtoARemover: Produto): void {
    const indx = this.produtos.findIndex(produto =>
      produto.id === produtoARemover.id);

    this.produtos.splice(indx, 1);
  }
}
