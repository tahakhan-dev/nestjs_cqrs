import { AccountsEntity } from "../modules/account/entities/account.entity";
import { AccountsTypeEntity } from "../modules/account/entities/account-Type.entity";
import { BanksEntity } from "../modules/account/entities/banks.entity";
import { VoucherEntity } from "../modules/voucher/entities/voucher.entity";


// database entities
const entitiesList = [
    // account entities
    AccountsEntity, AccountsTypeEntity, BanksEntity,

    // voucher entities
    VoucherEntity
];


export { entitiesList };