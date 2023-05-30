/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChildController } from './child.controller';
import { ChildService } from './child.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ChildSchema } from './schema/child.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Child', schema: ChildSchema}])],
  controllers: [ChildController],
  providers: [ChildService]
})
export class ChildModule {}
