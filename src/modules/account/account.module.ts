import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsEntity } from './entities/account.entity';
import { AccountsTypeEntity } from './entities/account-Type.entity';
import { BanksEntity } from './entities/banks.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateAccountCommandHandler } from './commands.handler';
import { AccountRepository } from './account.repository';
import { CreateAccountCommand } from './commands/create-account.command';
import { AccountMapper } from './mapper/account.mapper';
import { ConsumerAccountQueryHandler } from './query.handler';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountsEntity, AccountsTypeEntity, BanksEntity]),
    CqrsModule
  ],
  controllers: [AccountController],
  providers: [
    AccountService,
    AccountMapper,
    AccountRepository,
    // ---- Command Handler
    CreateAccountCommandHandler,
    //------ Query Handler
    ConsumerAccountQueryHandler
  ]
})
export class AccountModule { }
