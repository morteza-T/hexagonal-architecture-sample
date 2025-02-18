import { Controller,Body,Post } from '@nestjs/common';
import { RegisterRequestDTO } from '../../../application/common/DTO/register-request.dto';
import { CustomerRegisterUseCase } from './../../../application/use-case/register.use-case';


@Controller('/api/v1/customer')
export class CustomerRegisterInputAdapter {
    constructor(private readonly customerRegisterUseCase:CustomerRegisterUseCase){}
    
    @Post()
    async register(@Body() registerRequestDTO: RegisterRequestDTO){
        return await this.customerRegisterUseCase.register(registerRequestDTO)
    }
}