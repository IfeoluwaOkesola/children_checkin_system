/* eslint-disable prettier/prettier */

import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import { Session } from './session.schema'
import { Event } from './event.schema'
import * as mongoose from 'mongoose'
import { Child } from 'src/child/schema/child.schema'

@Schema({
    timestamps: true,
})
export class Attendance{
    @Prop()
    day: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Child' })
    child: Child;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Event' })
    event: Event;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
    session: Session;

}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance)