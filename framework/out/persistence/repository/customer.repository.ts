import { RegisterRequestDTO } from '../../../../application/common/DTO/register-request.dto';
import { CustomerDataOutPutPort } from '../../../../application/port/out/customer-data.out-put-port';
import { Customer } from '../../../../domain/model/customer';
import { CustomerDataModel } from '../data-model/customer.data-model';

export class CustomerRepository implements CustomerDataOutPutPort {
  findOne(
    query: Partial<{ phoneNumber: string; email: string }>,
  ): Promise<Customer> {
    /**
     * use some ORM to manage Data
     * then:
     * return this.dataToDomainModel(domainModel);
     *  */
  }
  register(registerRequestDTO: RegisterRequestDTO): Promise<Customer> {
    /**
     * use some ORM to manage Data
     * then:
     * return this.dataToDomainModel(domainModel);
     *  */
  }

  /**
   * this method could be implemented in a mapper class
   */
  private dataToDomainModel(dataModel: CustomerDataModel): Customer {
    return; /**transform domain to data model */
  }
}
