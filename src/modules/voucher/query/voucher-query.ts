import { IQuery } from '@nestjs/cqrs';
import { GetConsumerVoucherDto } from '../dto/get-voucher-account.dto';


export class ConsumerVoucherQuery implements IQuery {
    public constructor(
        public readonly getConsumerVoucherDto: GetConsumerVoucherDto,
    ) { }
}
