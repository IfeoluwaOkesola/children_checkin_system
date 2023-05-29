/* eslint-disable prettier/prettier */
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class Admin{
    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true})
    department: string; //samuel's club e.t.c

    @Prop({required: true})
    position: string; //teacher, pastor, e.t.c

    @Prop({required: true})
    password: string;
}


export const AdminSchema = SchemaFactory.createForClass(Admin)