/* eslint-disable prettier/prettier */
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class EmergencyContact{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    relationship: string;

    @Prop({required: true})
    phoneNumber: number;

    @Prop({required: true})
    homeAddress: string;
}

export const EmergencyContactSchema = SchemaFactory.createForClass(EmergencyContact)