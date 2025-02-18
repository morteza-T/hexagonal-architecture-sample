import { RegisterRequestDTO } from "../common/DTO/register-request.dto";
import { RegisterResponseDTO } from "../common/DTO/register-response.dto";

export interface CustomerRegisterUseCase {
    register(registerRequestDTO: RegisterRequestDTO):Promise<RegisterResponseDTO>
}