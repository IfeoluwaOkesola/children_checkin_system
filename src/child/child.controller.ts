/* eslint-disable prettier/prettier */
import { Controller, Body, Post, Get, Param,  Put, Delete } from '@nestjs/common';
import { ChildService } from './child.service';
import { Child } from './schema/child.schema';
import { CreateChildDto } from './dto/create_child.dto';
import { UpdateChildDto } from './dto/update_child.dto';




@Controller('child')
export class ChildController {
    constructor(private childService: ChildService){}

    @Post()
    async createChild(
        @Body() child: CreateChildDto,
    ): Promise<Child>{
        return this.childService.create(child)
    }

    @Get(':id')
    async getChild(
        @Param('id')
        id: string
    ): Promise<Child>{
        return this.childService.findById(id)
    }

    @Put(':id')
    async updateChild(
        @Param('id')
        id:string,
        @Body()
        child: UpdateChildDto
    ): Promise<Child>{
        return this.childService.updateById(id, child)
    }

    @Delete(':id')
    async deleteChild(
        @Param('id')
        id: string
    ): Promise<Child>{
        return this.childService.deleteById(id)
    }
}
