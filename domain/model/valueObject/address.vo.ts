import { Guard } from "../../../common/guard";
import { ValueObject } from "../../../common/super-types";

export class Address extends ValueObject<Address> {
  protected setValues(props: {
    state: string;
    city: string;
    postalCode: string;
    street: string;
  }): void {
    throw new Error("Method not implemented.");
  }
  protected equals(vo?: ValueObject): boolean {
    throw new Error("Method not implemented.");
  }

  readonly state: string;
  readonly city: string;
  readonly postalCode: string;
  readonly street: string;

  protected validate(props): void {
    if (!Guard.lengthIsBetween(props.province, 2, 50)) {
      throw new Error("country is out of range");
    }
    if (!Guard.lengthIsBetween(props.street, 2, 50)) {
      throw new Error("street is out of range");
    }
    if (!Guard.lengthIsBetween(props.postalCode, 2, 10)) {
      throw new Error("postalCode is out of range");
    }
  }
}
