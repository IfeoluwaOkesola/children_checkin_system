/* eslint-disable prettier/prettier */
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import { Child } from 'src/child/schema/child.schema';
import * as mongoose from 'mongoose'


@Schema({
    timestamps: true,
})
export class Session{
    @Prop()
    sessionName: string // either morning or evening session

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Event' })
    event: Event;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Child' })
    attendees: [Child]
}


export const SessionSchema = SchemaFactory.createForClass(Session)