/* eslint-disable prettier/prettier */

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Child, ChildSchema } from "./child.schema";
import { EmergencyContact, EmergencyContactSchema } from "./emergency.schema";





@Schema()
export class User{
    @Prop()
    motherName: string;

    @Prop()
    fatherName: string;

    @Prop()
    motherNumber: number;

    @Prop()
    fatherNumber: number;

    @Prop()
    homeAddress: string;

    @Prop({type: ChildSchema})
    children: Child;

    @Prop({type: EmergencyContactSchema})
    EmergencyContact: EmergencyContact;

}


export const UserSchema = SchemaFactory.createForClass(User)