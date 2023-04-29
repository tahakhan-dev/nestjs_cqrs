import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateAccountCommand } from "./commands/create-account.command";
import { AccountRepository } from "./account.repository";
import { ICreateConsumerAccount } from './interface/res/account.interface';

@CommandHandler(CreateAccountCommand)
export class CreateAccountCommandHandler implements ICommandHandler<CreateAccountCommand> {
    constructor(
        private readonly accountRepo: AccountRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    async execute(command: CreateAccountCommand, resolve: (value?) => void): Promise<ICreateConsumerAccount> {
        const account = this.publisher.mergeObjectContext(
            await this.accountRepo.createAccount(command.createAccountDto),
        );
        return account;
    }
}
