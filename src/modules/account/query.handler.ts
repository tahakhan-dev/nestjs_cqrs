import { EventPublisher, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ConsumerAccountQuery } from "./query/account-query";
import { AccountRepository } from "./account.repository";
import { IGetConsumerAccount } from "./interface/res/account.interface";

@QueryHandler(ConsumerAccountQuery)
export class ConsumerAccountQueryHandler implements IQueryHandler<ConsumerAccountQuery> {
    constructor(
        private readonly accountRepo: AccountRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    async execute(query: ConsumerAccountQuery, resolve: (value?) => void): Promise<IGetConsumerAccount> {
        const details = this.publisher.mergeObjectContext(
            await this.accountRepo.getConsumerAccount(query.getConsumerAccountDto),
        );
        return details;
    }
}