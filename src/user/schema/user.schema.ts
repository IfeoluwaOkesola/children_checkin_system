/* eslint-disable prettier/prettier */

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Children, ChildrenSchema } from "./children.schema";
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

    @Prop({type: ChildrenSchema})
    children: Children;

    @Prop({type: EmergencyContactSchema})
    EmergencyContact: EmergencyContact;

}


export const UserSchema = SchemaFactory.createForClass(User)