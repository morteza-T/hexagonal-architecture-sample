export class CustomerId {
  constructor(id: number) {
    this.value = id;
  }
  private readonly value: number;
  public getValue(): number {
    return this.value;
  }

  public toString(): string {
    return this.value.toString();
  }
}
