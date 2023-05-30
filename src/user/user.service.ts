/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schema/user.schema';


@Injectable()
export class UserService {}
