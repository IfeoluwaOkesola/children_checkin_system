/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { RecordModule } from './record/record.module';
import { ChildModule } from './child/child.module';
import { EmergencyContactModule } from './emergency-contact/emergency-contact.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AdminModule,
    RecordModule,
    ChildModule,
    EmergencyContactModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
