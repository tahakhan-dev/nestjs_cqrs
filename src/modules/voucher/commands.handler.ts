import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateVoucherCommand } from "./commands/create-voucher.command";
import { VoucherRepository } from "./voucher.repository";
import { ICreateConsumerVoucher } from "./interface/res/voucher.interface";

@CommandHandler(CreateVoucherCommand)
export class CreateVoucherCommandHandler implements ICommandHandler<CreateVoucherCommand> {
    constructor(
        private readonly voucherRepo: VoucherRepository,
        private readonly publisher: EventPublisher,
    ) { }

    // @ts-ignore
    async execute(command: CreateVoucherCommand, resolve: (value?) => void): Promise<ICreateConsumerVoucher> {
        const account = this.publisher.mergeObjectContext(
            await this.voucherRepo.createVoucher(command.createVoucherDto),
        );
        return account;
    }
}
