import { Customer } from './customer';
import { OrderId } from './valueObject/orderId.vo';
import { OrderItem } from './valueObject/orderItem.vo';

export class Order {
  constructor() {}

  id: OrderId;
  customer: Customer; // Reference to a customer
  items: [OrderItem];
  dateTime: Date;
}
