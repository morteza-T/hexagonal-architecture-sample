export class OrderId {
  constructor(id: number) {
    this.id = id;
  }
  private id: number;
  public getValue(): number {
    return this.id;
  }

  public toString(): string {
    return this.id.toString();
  }
}
