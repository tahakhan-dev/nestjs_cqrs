import { CreateAccountDto } from "../../dto/create-account.dto"
import { AccountsEntity } from "../../entities/account.entity"
import { Status } from "../../../../common/enums/status"
import { StatusCodes } from "../../../../common/enums/status-codes"


export interface IGetConsumerAccount {
    StatusCode?: StatusCodes,
    Status: Status
    Result?: Partial<AccountsEntity[]>
    Message?: string
}

export interface ICreateConsumerAccount {
    StatusCode?: StatusCodes,
    Status: Status
    Result?: Partial<AccountsEntity[]>
    Message?: string
}


