/* eslint-disable prettier/prettier */

import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import { Session, SessionSchema } from './session.schema'
import * as mongoose from 'mongoose'
import { Child } from 'src/user/schema/child.schema'

@Schema({
    timestamps: true,
})
export class Event{
    @Prop()
    eventType: string // describe, sunday service, LBA, GOBC

    @Prop({type: SessionSchema}) //what session for a specific event? morning, afternoon or evening.
    session: Session

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Child' }) //reference number for the specific child
    child: Child
}

export const EventSchema = SchemaFactory.createForClass(Event);