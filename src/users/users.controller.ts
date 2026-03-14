import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { type Response } from 'express';


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() data: any) {
        return this.usersService.create(data)
    }

    @Get()
    findAll() {
        return this.usersService.findAll()
    }


    @Get('id/:id')
    async findOne(@Param('id') id: string, @Res() res: Response) {
        try {
            const user = await this.usersService.findOne(id);

            if (user) {
                return res.status(200).json(user)
            }

            return res.status(404).json({ message: "User not found" })
        } catch (error) {
            return res.status(500).json({ message: "notfound" })
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any) {
        return this.usersService.update(id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id)
    }
}
