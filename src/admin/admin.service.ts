/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import * as mongoose from 'mongoose';
import { Admin } from './schema/admin.schema';


@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name)
        private adminModel : mongoose.Model<Admin>
    ){}

    async create(admin: Admin): Promise<Admin>{
        const result = await this.adminModel.create(admin);
        return result
    }

    async findAll(): Promise<Admin[]>{
        const Admin = await this.adminModel.find();
        return Admin;
    }

    async findById(id: string): Promise<Admin>{
        const admin = await this.adminModel.findById(id);
        if(!admin){
            throw new NotFoundException('Book not found');
        }
        return admin;
    }

    async updateById(id: string, book:Admin): Promise<Admin>{
        return await this.adminModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
        
    }

    async deleteById(id: string): Promise<Admin>{
        return await this.adminModel.findByIdAndDelete(id);
        
        
    }
}
