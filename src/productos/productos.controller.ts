import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CreateProductosDto } from './dto/create-productos.dto';
import { UpdateproductosDto } from './dto/update-productos.dto';
import { Productos } from './productos';
import { ProductosService } from './productos.service';


@Controller('productos')
export class ProductosController {
    
    constructor(private readonly productosService: ProductosService) {}
    @Get()
  findAll() {
    return this.productosService.findAll()
    }
    
 @Get(':id')
 findOne(@Param() params){
  return this.productosService.findOne(params.id);
 }

 @Post()
 create (@Body() CreateProductosDto: CreateProductosDto) {
 return this.productosService.create(CreateProductosDto)
 
 }
  
 @Delete(':id')
 remove(@Param('id') id: number) : void {
   return this.productosService.remove(id);
 }

 @Put(':id')
 update(@Param('id') id: number, @Body() Updateproductosdto: UpdateproductosDto) : Productos{
   return this.productosService.update(id, Updateproductosdto);
 }
}
