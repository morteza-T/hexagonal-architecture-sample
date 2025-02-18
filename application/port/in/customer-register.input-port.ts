import { Customer } from "../../../domain/model/customer";
import { RegisterRequestDTO } from "../../common/DTO/register-request.dto";
import { RegisterResponseDTO } from "../../common/DTO/register-response.dto";
import { CustomerRegisterUseCase } from "../../use-case/register.use-case";
import { CustomerDataOutPutPort } from "../out/customer-data.out-put-port";

export class CustomerRegisterInputPort implements CustomerRegisterUseCase {
  constructor(private customerDataOutPutPort: CustomerDataOutPutPort) {}
  async register(registerRequestDTO: RegisterRequestDTO) {
    const duplicatedCustomer = await this.customerDataOutPutPort.findOne({
      phoneNumber: registerRequestDTO.phoneNumber,
      email: registerRequestDTO.email,
    });
    if (duplicatedCustomer) throw Error("customer has existed");
    const customer = await this.customerDataOutPutPort.register(
      registerRequestDTO
    );
    return this.generateRegisterResponse(customer);
  }

  private generateRegisterResponse(customer: Customer): RegisterResponseDTO {
    return; // transformation
  }
}
