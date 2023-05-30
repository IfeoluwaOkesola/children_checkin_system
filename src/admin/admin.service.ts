/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import * as mongoose from 'mongoose';
import { Admin } from './schema/admin.schema';
import { CreateAdminDto } from './dto/create_admin.dto';
import { UpdateAdminDto } from './dto/update_admin.dto';



@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name)
        private adminModel : mongoose.Model<Admin>
    ){}

    async create(admin: CreateAdminDto): Promise<Admin>{
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
            throw new NotFoundException('Admin not found');
        }
        return admin;
    }

    async updateById(id: string, admin:UpdateAdminDto): Promise<Admin>{
        return await this.adminModel.findByIdAndUpdate(id, admin, {
            new: true,
            runValidators: true,
        });
        
    }

    async deleteById(id: string): Promise<Admin>{
        return await this.adminModel.findByIdAndDelete(id);
        
        
    }
}
