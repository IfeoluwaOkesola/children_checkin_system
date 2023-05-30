/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Child } from './schema/child.schema';
import { CreateChildDto } from './dto/create_child.dto';
import { UpdateChildDto } from './dto/update_child.dto';



@Injectable()
export class ChildService {
    constructor(
        @InjectModel(Child.name)
        private childModel : mongoose.Model<Child>
    ){}

    async create(child: CreateChildDto): Promise<Child>{
        const result = await this.childModel.create(child)
        return result
    }

    async findAll(): Promise<Child[]>{
        const Children = await this.childModel.find();
        return Children;
    }

    async findById(id: string): Promise<Child>{
        const child = await this.childModel.findById(id);
        if(!child){
            throw new NotFoundException('Child not found');
        }
        return child;
    }

    async updateById(id: string, child:UpdateChildDto): Promise<Child>{
        return await this.childModel.findByIdAndUpdate(id, child, {
            new: true,
            runValidators: true,
        });
        
    }

    async deleteById(id: string): Promise<Child>{
        return await this.childModel.findByIdAndDelete(id);
        
        
    }
}
