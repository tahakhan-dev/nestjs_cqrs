import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigModule as EnvConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/databaseModule/database/database.module';
import { entitiesList } from './entitiesList/entities.list';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './utils/interceptor/logging.interceptor';
import { ShutdownService } from './shutdown.service';
import { AccountModule } from './modules/account/account.module';
import { ContentSecurityPolicyMiddleware } from './middleware/security/content-security-policy.middleware';
import { HttpStrictTransportSecurityMiddleware } from './middleware/security/http-strict-transport-security.middleware';
import { XFrameOptionsMiddleware } from './middleware/security/x-frame-options.middleware';
import { XContentTypeOptionsMiddleware } from './middleware/security/x-content-type-options.middleware';
import { XssProtectionMiddleware } from './middleware/security/x-xss-protection.middleware';
import { ReferrerPolicyMiddleware } from './middleware/security/referrer-policy.middleware';
import { MicroServiceHealthCheckService } from './microservice-health-check.service';
import { BullModule } from '@nestjs/bull';
import { CalculationProcessor } from './utils/workerThreads/calculation.processor';
import { VoucherModule } from './modules/voucher/voucher.module';
import { HttpExceptionFilter } from './utils/filters/http-exeception.filter';

@Module({
  imports: [
    EnvConfigModule.forRoot(),
    //DB config
    ConfigModule,
    // Bull Queue
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'calculation',
    }),


    // Module listing
    DatabaseModule.forRoot({ entities: entitiesList }),

    AccountModule,
    VoucherModule,
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ShutdownService,
    MicroServiceHealthCheckService,
    CalculationProcessor,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { // this configure function here get access to this middleware consumer 
    consumer.apply(
      AuthenticationMiddleware,
      ContentSecurityPolicyMiddleware,
      HttpStrictTransportSecurityMiddleware,
      XFrameOptionsMiddleware,
      XContentTypeOptionsMiddleware,
      XssProtectionMiddleware,
      ReferrerPolicyMiddleware
    ).forRoutes('*');
    // .forRoutes({path:"/path", method:RequestMethod.Get})
  }
}
