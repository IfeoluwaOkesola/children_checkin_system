/* eslint-disable prettier/prettier */
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class Admin{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    department: string;

    @Prop({required: true})
    position: string
}


export const AdminSchema = SchemaFactory.createForClass(Admin)