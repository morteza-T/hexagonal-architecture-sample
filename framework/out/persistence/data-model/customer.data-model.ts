import { Entity, Column, OneToMany } from 'typeorm';
import { Address } from '../../../../domain/model/valueObject/address.vo';
import { EmailAddress } from '../../../../domain/model/valueObject/email.vo';
import { PhoneNumber } from '../../../../domain/model/valueObject/phone-number.vo';
import { AddressDataModel } from './address.data-model';

@Entity('CUSTOMER')
export class CustomerDataModel {
  @Column()
  id: string;
  @Column()
  name: string;
  @OneToMany(() => AddressDataModel, (address) => address.customer)
  addresses: Address[];
  @Column()
  email: EmailAddress;
  @Column()
  phoneNumber: PhoneNumber;
}
