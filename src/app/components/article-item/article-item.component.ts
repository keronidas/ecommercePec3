import { Component } from '@angular/core';
import { ArticleModel } from 'src/app/models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {

public cantidadEnStock:number = 15;



  MeltedCheeseBurger: ArticleModel = {
    name: 'Melted cheese burger',
    imageUrl: './assets/img/hamburguesa-queso-fundido.jpg',
    price: 14.90,
    isOnSale: true,
    quantityInCart: 0
  };

  // BigKingStreet: ArticleModel = {
  //   name: 'Big King Street',
  //   imageUrl: './assets/img/big-king-street.jpg',
  //   price: 13.75,
  //   isOnSale: true,
  //   quantityInCart: 0
  // };

  // BaconBusted: ArticleModel = {
  //   name: 'Bacon Busted',
  //   imageUrl: './assets/img/bacon-busted.jpg',
  //   price: 14.20,
  //   isOnSale: false,
  //   quantityInCart: 0
  // };

  aumentarCantidad() {
    this.MeltedCheeseBurger.quantityInCart++;
  }

  disminuirCantidad() {
    if (this.MeltedCheeseBurger.quantityInCart > 0) {
      this.MeltedCheeseBurger.quantityInCart--;
    }
  }
}
