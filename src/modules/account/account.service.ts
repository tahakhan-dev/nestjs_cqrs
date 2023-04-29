import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAccountCommand } from './commands/create-account.command';
import { ICreateConsumerAccount, IGetConsumerAccount } from './interface/res/account.interface';
import { ConsumerAccountQuery } from './query/account-query';
import { GetConsumerAccountDto } from './dto/get-consumer-account.dto';

@Injectable()
export class AccountService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }
  async createAccountServiceHandler(createAccountDto: CreateAccountDto): Promise<ICreateConsumerAccount> {
    return await this.commandBus.execute(
      new CreateAccountCommand(createAccountDto)
    )
  }


  async fetchConsumerAccountServiceHandler(parameter: GetConsumerAccountDto): Promise<IGetConsumerAccount> {
    return await this.queryBus.execute(
      new ConsumerAccountQuery(parameter),
    );
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
