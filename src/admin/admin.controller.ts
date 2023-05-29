/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Param, Put, Body, Delete} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './schema/admin.schema';
import { CreateAdminDto } from './dto/create_admin.dto';
import { UpdateAdminDto } from './dto/update_admin.dto';



@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService){}
    
    
    @Post()
    async createAdmin(
        admin: CreateAdminDto,
    ): Promise<Admin>{
        return this.adminService.create(admin)
    }
    
    @Get()
    async getAllAdmin(): Promise<Admin[]>{
    return this.adminService.findAll()
    }


    @Get(':id')
    async getAdmin(
        @Param('id')
        id: string
    ): Promise<Admin>{
        return this.adminService.findById(id)
    }

    @Put(':id')
    async updateAdmin(
        @Param('id')
        id:string,
        @Body()
        admin: UpdateAdminDto
    ): Promise<Admin>{
        return this.adminService.updateById(id, admin)
    }

    @Delete(':id')
    async deleteAdmin(
        @Param('id')
        id: string
    ): Promise<Admin>{
        return this.adminService.deleteById(id)
    }
}
