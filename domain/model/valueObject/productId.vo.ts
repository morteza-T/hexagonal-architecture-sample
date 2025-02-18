export class ProductId {
  constructor(id: number) {
    this.id = id;
  }
  private readonly id: number;
  public getValue(): number {
    return this.id;
  }

  public toString(): string {
    return this.id.toString();
  }
}
