import { Address } from './valueObject/address.vo';
import { CustomerId } from './valueObject/customerId.vo';
import { EmailAddress } from './valueObject/email.vo';
import { PhoneNumber } from './valueObject/phone-number.vo';

export class Customer {
  id: CustomerId;
  name: string;
  addresses: Address[];
  email: EmailAddress;
  phoneNumber: PhoneNumber;
}
