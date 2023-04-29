import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseDto } from "../../../helpers/base.dto";

export class CreateVoucherDto extends BaseDto {

    @IsNotEmpty()
    @IsString()
    voucherId: string;

    @IsNotEmpty()
    @IsNumber()
    accountId: number;

    @IsNotEmpty()
    @IsNumber()
    vchType: number;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    vchCurrency: string;

    @IsOptional()
    @IsNumber()
    categoryId: number;

    @IsNotEmpty()
    @IsNumber()
    customCategoryId: number;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    labels: string;

    @IsOptional()
    @IsString()
    fromAccount: string;

    @IsOptional()
    @IsString()
    toAccount: string;

    @IsNotEmpty()
    @IsNumber()
    vchWeek: number;

    @IsNotEmpty()
    @IsNumber()
    vchMonth: number;

    @IsNotEmpty()
    @IsNumber()
    vchYear: number;

    @IsOptional()
    @IsString()
    eventId: string;

    @IsOptional()
    @IsBoolean()
    isAtm: boolean;

    @IsOptional()
    @IsBoolean()
    isGoal: boolean;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;

    @IsOptional()
    @IsBoolean()
    isDeleted: boolean;

    @IsOptional()
    @IsBoolean()
    isSync: boolean;

    @IsOptional()
    @IsString()
    vchRefId: string;

    @IsOptional()
    @IsString()
    fcCurrency: string;

    @IsOptional()
    @IsString()
    fcRate: number;

    @IsNotEmpty()
    recordCreatedOn: Date;

    @IsNotEmpty()
    @IsOptional()
    recordUpdatedOn: Date;

    @IsNotEmpty()
    @IsOptional()
    deletedOn: Date;


}
