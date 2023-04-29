import { EventPublisher, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ConsumerVoucherQuery } from "./query/voucher-query";
import { VoucherRepository } from "./voucher.repository";
import { IGetConsumerVoucher } from "./interface/res/voucher.interface";

@QueryHandler(ConsumerVoucherQuery)
export class ConsumerVoucherQueryHandler implements IQueryHandler<ConsumerVoucherQuery> {
    constructor(
        private readonly voucherRepo: VoucherRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    async execute(query: ConsumerVoucherQuery, resolve: (value?) => void): Promise<IGetConsumerVoucher> {
        const details = this.publisher.mergeObjectContext(
            await this.voucherRepo.getConsumerVoucher(query.getConsumerVoucherDto),
        );
        return details;
    }
}