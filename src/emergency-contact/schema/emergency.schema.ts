/* eslint-disable prettier/prettier */

import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class EmergencyContact{

    @Prop({required: true})
    title: string; // mr, mrs, miss e.t.c
    
    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true})
    middleName: string;

    @Prop({required: true})
    relationship: string;

    @Prop({required: true})
    phoneNumber: number;

    @Prop({required: true})
    homeAddress: string;

    @Prop({required: true})
    member: boolean; 

    @Prop()
    churchBranch: string;
}

export const EmergencyContactSchema = SchemaFactory.createForClass(EmergencyContact)