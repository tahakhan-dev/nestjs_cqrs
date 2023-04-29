import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { IGetConsumerVoucher } from './interface/res/voucher.interface';
import { CreateVoucherCommand } from './commands/create-voucher.command';
import { GetConsumerVoucherDto } from './dto/get-voucher-account.dto';
import { ConsumerVoucherQuery } from './query/voucher-query';

@Injectable()
export class VoucherService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }


  async createVoucherServiceHandler(createVoucherDto: CreateVoucherDto): Promise<IGetConsumerVoucher> {
    return await this.commandBus.execute(
      new CreateVoucherCommand(createVoucherDto)
    )
  }


  async fetchConsumerVoucherServiceHandler(parameter: GetConsumerVoucherDto): Promise<IGetConsumerVoucher> {
    return await this.queryBus.execute(
      new ConsumerVoucherQuery(parameter),
    );
  }


  findAll() {
    return `This action returns all voucher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voucher`;
  }

  update(id: number, updateVoucherDto: UpdateVoucherDto) {
    return `This action updates a #${id} voucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}
