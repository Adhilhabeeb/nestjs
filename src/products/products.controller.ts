import { Controller, Get, Param } from '@nestjs/common';

@Controller('users/products')
export class ProductsController {

    @Get()
    getHello(): string {
        return 'Products of user JKH';
    }
    @Get(':id')
    getfromid(@Param('id') id: string) {
        return 'Products of id:' + id
    }
}