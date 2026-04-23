import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReferralsModule } from './referrals/referrals.module';
import { PositionsModule } from './positions/positions.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ExportModule } from './export/export.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ReferralsModule,
    PositionsModule,
    NotificationsModule,
    ExportModule,
    UploadModule,
  ],
})
export class AppModule {}
