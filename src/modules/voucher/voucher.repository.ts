import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Status } from "../../common/enums/status";
import { responseHandler } from "src/helpers/response-handler";
import { StatusCodes } from "../../common/enums/status-codes";
import { VoucherEntity } from "./entities/voucher.entity";
import { CreateVoucherDto } from "./dto/create-voucher.dto";
import { ICreateConsumerVoucher, IGetConsumerVoucher } from "./interface/res/voucher.interface";
import { GetConsumerVoucherDto } from "./dto/get-voucher-account.dto";
import { VoucherMapper } from "./mapper/voucher.mapper";

@Injectable()
export class VoucherRepository {
    constructor(
        @InjectRepository(VoucherEntity)
        private voucherRepository: Repository<VoucherEntity>,
        private mapper: VoucherMapper,

    ) { }

    async createVoucher(createVoucherDto: CreateVoucherDto): Promise<any> {
        return await this.saveVoucher(createVoucherDto);
    }

    async getConsumerVoucher(parameter: GetConsumerVoucherDto): Promise<any> {
        return await this.fetchConsumerVoucher(parameter);
    }

    private async fetchConsumerVoucher(getConsumerVoucher: GetConsumerVoucherDto): Promise<IGetConsumerVoucher> {
        let response, getVoucher;
        console.log(getConsumerVoucher, '===========getConsumerVoucher============');

        try {
            // getVoucher = await this.voucherRepository.findBy({ consumerId: getConsumerVoucher.consumerId });
            response = responseHandler(null, "Consumer Vouchers", Status.SUCCESS, StatusCodes.SUCCESS)

        } catch (error) {
            response = responseHandler(null, "There is some error", Status.FAILED, StatusCodes.INTERNAL_SERVER_ERROR)
        }

        return response
    }

    private async saveVoucher(createVoucherDto: CreateVoucherDto): Promise<ICreateConsumerVoucher> {
        let response;
        try {

            console.log('============createVoucherDto=============', createVoucherDto);

            // let mappedVoucher = this.mapper.createvoucherObj(createVoucherDto)
            // let response = await this.voucherRepository.save(mappedVoucher)

            response = responseHandler(null, "Voucher Created", Status.SUCCESS, StatusCodes.SUCCESS)


        } catch (error) {
            response = responseHandler(null, error.message, Status.FAILED, StatusCodes.INTERNAL_SERVER_ERROR)
        }
        return response
    }

}


