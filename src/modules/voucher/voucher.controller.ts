import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { ICreateConsumerVoucher, IGetConsumerVoucher } from './interface/res/voucher.interface';
import { IResponseWrapper } from '../../interface/base.response.interface';
import { StatusCodes } from '../../common/enums/status-codes';
import { GetConsumerVoucherDto } from './dto/get-voucher-account.dto';
import { VoucherEntity } from './entities/voucher.entity';
import { Response } from 'express';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) { }

  @Post('create')
  async create(@Res() res: Response, @Body() createVoucherDto: CreateVoucherDto): Promise<ICreateConsumerVoucher> { // interface defines the structure of the response object that the method will return, which includes properties such as StatusCode, Result, and Message

    try {
      const createdVoucher = await this.voucherService.createVoucherServiceHandler(createVoucherDto);

      res.status(Number(createdVoucher.StatusCode)).json(createdVoucher)

    } catch (error) {
      const response: IResponseWrapper<VoucherEntity[]> = {
        StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        Status: 0,
        Result: null,
        Message: 'Failed to voucher account',
      };
      return response;
    }
  }


  @Get('fetchAllVoucher/:consumerId')
  async fetchAllConsumerVoucher(@Param('consumerId') consumerId): Promise<IGetConsumerVoucher> {

    try {
      let getConsumerVoucherDto: GetConsumerVoucherDto = consumerId
      const getConsumeAccount = this.voucherService.fetchConsumerVoucherServiceHandler(getConsumerVoucherDto);
      return getConsumeAccount

    } catch (error) {
      const response: IResponseWrapper<VoucherEntity[]> = {
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
    return this.voucherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoucherDto: UpdateVoucherDto) {
    return this.voucherService.update(+id, updateVoucherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voucherService.remove(+id);
  }
}
