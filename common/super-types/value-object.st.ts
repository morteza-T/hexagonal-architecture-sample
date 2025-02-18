import { ExcludePropertyType } from '../types/custom-utility-types';

type EntryObject<T> = ExcludePropertyType<
  { -readonly [k in keyof T]-?: T[k] },
  Function
>;

export abstract class ValueObject<T = Object> {
  constructor(props: EntryObject<T>) {
    this.validate(props);
    this.setValues(props);
  }

  protected abstract setValues(props: EntryObject<T>): void;
  protected abstract validate(props: EntryObject<T>): void;
  protected abstract equals(vo?: ValueObject<T>): boolean;

  static isValueObject(obj: unknown): obj is ValueObject {
    return obj instanceof ValueObject;
  }
}
