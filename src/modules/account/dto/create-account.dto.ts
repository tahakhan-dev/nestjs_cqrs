import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from "../../../helpers/base.dto";

export class CreateAccountDto extends BaseDto {

    @IsNotEmpty()
    @IsNumber()
    accountType: number;

    @IsNotEmpty()
    @IsString()
    accountId: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    accountNumber: string;

    @IsNotEmpty()
    @IsNumber()
    accountBalance: number;

    @IsOptional()
    @IsString()
    accountCurrency: string;

    @IsNotEmpty()
    @IsNumber()
    bankId: number;

    @IsOptional()
    @IsBoolean()
    includeInNetworth?: boolean;

    @IsNotEmpty()
    recordCreatedOn: Date;

    @IsNotEmpty()
    @IsOptional()
    recordUpdatedOn: Date;
}
