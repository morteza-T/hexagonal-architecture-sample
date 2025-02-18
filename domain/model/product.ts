import { ProductId } from './valueObject/productId.vo';

export class Product {
  id: ProductId;

  constructor(name: string, slug: string, description: string) {
    this.name = name;
    this.slug = slug;
    this.description = description;
  }

  name: string;

  slug: string;

  description: string;
}
