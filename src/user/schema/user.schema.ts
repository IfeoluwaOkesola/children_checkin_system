/* eslint-disable prettier/prettier */

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Child, ChildSchema } from "./child.schema";
import { EmergencyContact, EmergencyContactSchema } from "./emergency.schema";





@Schema()
export class User{
    @Prop()
    motherFirstName: string;

    @Prop()
    motherMiddleName: string;

    @Prop()
    motherLastName: string;

    @Prop()
    fatherFirstName: string;

    @Prop()
    fatherMiddleName: string;

    @Prop()
    fatherLastName: string;

    @Prop()
    motherNumber: number;

    @Prop()
    fatherNumber: number;

    @Prop()
    homeAddress: string;

    @Prop()
    churchBranch: string;

    @Prop({type: ChildSchema})
    children: Child;

    @Prop({type: EmergencyContactSchema})
    EmergencyContact: EmergencyContact;

}


export const UserSchema = SchemaFactory.createForClass(User)