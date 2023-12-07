import { ArticleModel } from "./article";

export interface ArticleQuantityChange {
    articulo: ArticleModel;
    cantidad: number;
}