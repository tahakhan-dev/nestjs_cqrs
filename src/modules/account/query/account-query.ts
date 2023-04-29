import { IQuery } from '@nestjs/cqrs';
import { GetConsumerAccountDto } from '../dto/get-consumer-account.dto';


export class ConsumerAccountQuery implements IQuery {
    public constructor(
        public readonly getConsumerAccountDto: GetConsumerAccountDto,
    ) { }
}
