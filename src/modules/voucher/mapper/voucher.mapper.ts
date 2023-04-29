
import { Injectable } from "@nestjs/common";
import { CreateVoucherDto } from "../dto/create-voucher.dto";
import { VoucherEntity } from "../entities/voucher.entity";


@Injectable()
export class VoucherMapper {

    createvoucherObj(data: CreateVoucherDto): VoucherEntity {
        const voucherObj = new VoucherEntity();
        voucherObj.consumerId = data.consumerId ?? null;
        voucherObj.voucherId = data.voucherId ?? null;
        voucherObj.accountId = data.accountId ?? null;
        voucherObj.vchType = data.vchType ?? null;
        voucherObj.amount = data.amount ?? null;
        voucherObj.vchCurrency = data.vchCurrency ?? null;
        voucherObj.categoryId = data.categoryId ?? null;
        voucherObj.customCategoryId = data.customCategoryId ?? null;
        voucherObj.description = data.description ?? null;
        voucherObj.labels = data.labels ?? null;
        voucherObj.fromAccount = data.fromAccount ?? null;
        voucherObj.toAccount = data.toAccount ?? null;
        voucherObj.vchWeek = data.vchWeek ?? null;
        voucherObj.vchMonth = data.vchMonth ?? null;
        voucherObj.vchYear = data.vchYear ?? null;
        voucherObj.eventId = data.eventId ?? null;
        voucherObj.isAtm = data.isAtm ?? null;
        voucherObj.isGoal = data.isGoal ?? null;
        voucherObj.isSync = data.isSync ?? null;
        voucherObj.vchRefId = data.vchRefId ?? null;
        voucherObj.fcCurrency = data.fcCurrency ?? null;
        voucherObj.fcRate = data.fcRate ?? null;
        voucherObj.isActive = data.isActive ?? null;
        voucherObj.isDeleted = data.isDeleted ?? null;
        voucherObj.recordCreatedOn = data.recordCreatedOn ?? null;
        voucherObj.recordUpdatedOn = data.recordUpdatedOn ?? null;
        voucherObj.deletedOn = data.deletedOn ?? null;
        return voucherObj

    }
}