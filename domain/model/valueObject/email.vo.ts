import { ValueObject } from "../../../common/super-types";

export class EmailAddress extends ValueObject<EmailAddress> {
  protected equals(vo?: ValueObject<EmailAddress>): boolean {
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
    return new EmailAddress(value);
  }
}
