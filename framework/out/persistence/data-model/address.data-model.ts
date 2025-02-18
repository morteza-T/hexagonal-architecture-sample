import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomerDataModel } from './customer.data-model';

@Entity('ADDRESS')
export class AddressDataModel {
  @Column()
  id: string;
  @Column()
  state: string;
  @Column()
  city: string;
  @Column()
  postalCode: string;
  @Column()
  street: string;
  @ManyToOne(() => CustomerDataModel)
  customer: CustomerDataModel;
}
