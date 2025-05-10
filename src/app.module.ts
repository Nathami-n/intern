import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { AuthModule } from './auth/auth.module';
import { InternshipsModule } from './internships/internships.module';
import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule, InternshipsModule, ApplicationsModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
