import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'NotificationsService',
      useValue: { send: () => Promise.resolve() },
    },
  ],
  exports: ['NotificationsService'],
})
export class NotificationsModule {}
