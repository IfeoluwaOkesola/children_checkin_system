/* eslint-disable prettier/prettier */

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Children{
    @Prop()
    name: string;

    @Prop()
    dob: Date;

    @Prop()
    picture: string;

    @Prop()
    allergies: [string];

    

}

export const ChildrenSchema = SchemaFactory.createForClass(Children)
