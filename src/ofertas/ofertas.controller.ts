import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { CreateOfertasDto } from './dto/create-ofertas.dto';
import { Ofertas } from './ofertas';
import { OfertasService } from './ofertas.service';
import { UpdateOfertasDto } from './dto/update-ofertas.dto'

@Controller('ofertas')
export class OfertasController {
    constructor(private readonly ofertasService: OfertasService) {}
    @Get()
  findAll() {
    return this.ofertasService.findAll()
    }

    @Get(':id')
    findOne(@Param() params){
     return this.ofertasService.findOne(params.id);
    }

    @Post()
 create (@Body() CreateOfertasDto: CreateOfertasDto) {
 return this.ofertasService.create(CreateOfertasDto)
 }

 @Delete(':id')
 remove(@Param('id') id: number) : void {
   return this.ofertasService.remove(id);
 }

 @Put(':id')
 update(@Param('id') id: number, @Body() Updateofertasdto: UpdateOfertasDto) : Ofertas{
   return this.ofertasService.update(id, Updateofertasdto);
 }
}
