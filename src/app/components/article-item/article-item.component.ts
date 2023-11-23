import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleQuantityChange } from 'src/app/models/ArticleQuantityChange';
import { ArticleModel } from 'src/app/models/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() articulo!: ArticleModel;



 
  agregarProducto() {
    this.articulo.quantityInCart++;
  }
  quitarProducto() {
    if (this.articulo.quantityInCart > 0) { this.articulo.quantityInCart--; }

  }

 
}
