import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { AccountsEntity } from '../account/entities/account.entity';
import { VoucherEntity } from './entities/voucher.entity';
import { VoucherRepository } from './voucher.repository';
import { CreateVoucherCommandHandler } from './commands.handler';
import { VoucherMapper } from './mapper/voucher.mapper';
import { ConsumerVoucherQueryHandler } from './query.handler';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountsEntity, VoucherEntity]),
    CqrsModule
  ],
  controllers: [VoucherController],
  providers: [VoucherService,
    VoucherRepository,
    VoucherMapper,
    // ---- Command Handler
    CreateVoucherCommandHandler,
    //------ Query Handler
    ConsumerVoucherQueryHandler
  ]
})
export class VoucherModule { }
