/* eslint-disable prettier/prettier */

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Child{
    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true})
    middleName: string;

    @Prop({required: true})
    dob: Date;

    @Prop({required: true})
    picture: string;

    @Prop()
    allergies: [string];

    

}

export const ChildSchema = SchemaFactory.createForClass(Child)
