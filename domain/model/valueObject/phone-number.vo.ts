import { ValueObject } from "../../../common/super-types";

export class PhoneNumber extends ValueObject<PhoneNumber> {
  protected equals(vo?: ValueObject<PhoneNumber>): boolean {
    throw new Error('Method not implemented.');
  }
  protected setValues(props: {}): void {
    throw new Error('Method not implemented.');
  }
  private readonly value: string;

  protected validate(props: string): void {
    throw new Error('Method not implemented.');
  }

  public change(value: string) {
    return new PhoneNumber(value);
  }
}
