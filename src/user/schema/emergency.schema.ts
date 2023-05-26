/* eslint-disable prettier/prettier */
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class EmergencyContact{
    @Prop()
    name: string;

    @Prop()
    relationship: string;

    @Prop()
    phoneNumber: number;

    @Prop()
    homeAddress: string;
}

export const EmergencyContactSchema = SchemaFactory.createForClass(EmergencyContact)