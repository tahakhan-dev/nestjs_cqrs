import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AccountsEntity } from "./entities/account.entity";
import { CreateAccountDto } from "./dto/create-account.dto";
import { ICreateConsumerAccount, IGetConsumerAccount } from "./interface/res/account.interface";
import { AccountMapper } from "./mapper/account.mapper";
import { Status } from "../../common/enums/status";
import { GetConsumerAccountDto } from "./dto/get-consumer-account.dto";
import { responseHandler } from "../../helpers/response-handler";
import { StatusCodes } from "../../common/enums/status-codes";

@Injectable()
export class AccountRepository {
    constructor(
        @InjectRepository(AccountsEntity)
        private accountRepository: Repository<AccountsEntity>,
        private mapper: AccountMapper,

    ) { }

    async createAccount(createAccountDto: CreateAccountDto): Promise<any> {
        return await this.saveAccount(createAccountDto);
    }

    async getConsumerAccount(parameter: GetConsumerAccountDto): Promise<any> {
        return await this.fetchConsumerAccount(parameter);
    }

    private async fetchConsumerAccount(getConsumerAccount: GetConsumerAccountDto): Promise<IGetConsumerAccount> {
        let response, getAccount;
        try {
            getAccount = await this.accountRepository.findBy({ consumerId: getConsumerAccount.consumerId });
            response = responseHandler(getAccount, "Consumer Account", Status.SUCCESS, StatusCodes.SUCCESS)

        } catch (error) {
            response = responseHandler(null, "There is some error", Status.FAILED, StatusCodes.INTERNAL_SERVER_ERROR)
        }

        return response
    }

    private async saveAccount(createAccountDto: CreateAccountDto): Promise<ICreateConsumerAccount> {
        let response, mappedAccount, accountCreateResponse;
        try {
            const { consumerId, accountType, accountId, title } = createAccountDto;

            const findAccountCriteria = {
                consumerId,
                accountType,
                accountId,
                title,
            };
            const isAccountExists = await this.accountRepository.findOne({ where: findAccountCriteria });

            if (isAccountExists) return responseHandler(accountCreateResponse, "this account already exists", Status.FAILED, StatusCodes.CONFLICT)

            mappedAccount = this.mapper.createAccountObj(createAccountDto)
            accountCreateResponse = await this.accountRepository.save(mappedAccount)

            response = responseHandler(accountCreateResponse, "Account Created", Status.SUCCESS, StatusCodes.SUCCESS)

        } catch (error) {
            response = responseHandler(null, "There is some error", 0, StatusCodes.INTERNAL_SERVER_ERROR)
        }

        return response
    }

}


