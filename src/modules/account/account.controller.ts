import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { StatusCodes } from '../../common/enums/status-codes';
import { IResponseWrapper } from '../../interface/base.response.interface';
import { ICreateConsumerAccount, IGetConsumerAccount } from './interface/res/account.interface';
import { GetConsumerAccountDto } from './dto/get-consumer-account.dto';
import { AccountsEntity } from './entities/account.entity';
import { Response } from 'express';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post('create')
  async create(@Res() res: Response, @Body() createAccountDto: CreateAccountDto): Promise<ICreateConsumerAccount> {  // interface defines the structure of the response object that the method will return, which includes properties such as StatusCode, Result, and Message
    try {
      const createdAccount = await this.accountService.createAccountServiceHandler(createAccountDto);

      res.status(Number(createdAccount.StatusCode)).json(createdAccount)

    } catch (error) {
      const response: IResponseWrapper<AccountsEntity[]> = {
        StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        Status: 0,
        Result: null,
        Message: 'Failed to create account',
      };
      return response;
    }

  }

  @Get('fetchAllAcount/:consumerId')
  async fetchAllConsumerAccount(@Res() res: Response, @Param('consumerId') consumerId): Promise<IGetConsumerAccount> {

    let getConsumerAccountDto: GetConsumerAccountDto = consumerId

    try {
      const getConsumeAccount = await this.accountService.fetchConsumerAccountServiceHandler(getConsumerAccountDto);
      res.status(Number(getConsumeAccount.StatusCode)).json(getConsumeAccount)

    } catch (error) {
      const response: IResponseWrapper<AccountsEntity[]> = {
        StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        Status: 0,
        Result: null,
        Message: 'There is Some error',
      };
      return response;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
