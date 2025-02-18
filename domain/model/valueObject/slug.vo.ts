import { ValueObject } from '../../../../common/super-types';

export class Slug extends ValueObject<Slug> {
  protected setValues(props: {}): void {
    throw new Error('Method not implemented.');
  }
  protected validate(props: {}): void {
    throw new Error('Method not implemented.');
  }

  private readonly slug: string;
  constructor(name: string) {
    super({ name });
    this.slug = name.trim().replace(' ', '-');
  }
  public getValue(): string {
    return this.slug;
  }
  protected equals(vo?: ValueObject<Slug>): boolean {
    throw new Error('Method not implemented.');
  }
}
