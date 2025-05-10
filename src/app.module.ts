import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { InternshipsModule } from './internships/internships.module';
import { ApplicationsModule } from './applications/applications.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthController } from './auth.controller';
import { IinternshipsController } from './iinternships.controller';
import { ApplicationsController } from './applications.controller';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [AuthModule, InternshipsModule, ApplicationsModule, PaymentsModule],
  controllers: [AppController, AuthController, IinternshipsController, ApplicationsController, PaymentsController],
  providers: [AppService],
})
export class AppModule {}
