import { CreateVoucherDto } from "../../dto/create-voucher.dto"
import { VoucherEntity } from "../../entities/voucher.entity"
import { StatusCodes } from "../../../../common/enums/status-codes"
import { Status } from "../../../../common/enums/status"


export interface IGetConsumerVoucher {
    StatusCode?: StatusCodes,
    Status: Status
    Result?: Partial<VoucherEntity[]>
    Message?: string
}

export interface ICreateConsumerVoucher {
    StatusCode?: StatusCodes,
    Status: Status
    Result?: Partial<VoucherEntity[]>
    Message?: string
}


