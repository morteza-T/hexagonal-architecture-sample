import { Customer } from '../../../domain/model/customer';
import { RegisterRequestDTO } from '../../common/DTO/register-request.dto';

export interface CustomerDataOutPutPort {
  findOne(
    query: Partial<{ phoneNumber: string; email: string }>,
  ): Promise<Customer>;
  register(registerRequestDTO: RegisterRequestDTO): Promise<Customer>;
}
