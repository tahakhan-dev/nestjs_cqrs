import { AccountsEntity } from "../entities/account.entity";
import { CreateAccountDto } from "../dto/create-account.dto";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AccountMapper {

    createAccountObj(data: CreateAccountDto): AccountsEntity {
        const accountObj = new AccountsEntity();
        accountObj.consumerId = data.consumerId;
        accountObj.accountType = data.accountType;
        accountObj.accountId = data.accountId;
        accountObj.title = data.title;
        accountObj.accountNumber = data.accountNumber;
        accountObj.accountBalance = data.accountBalance;
        accountObj.accountCurrency = data.accountCurrency;
        accountObj.bankId = data.bankId;
        accountObj.includeInNetworth = data.includeInNetworth;
        accountObj.recordCreatedOn = data.recordCreatedOn;
        return accountObj

    }
}