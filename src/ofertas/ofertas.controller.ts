import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOfertasDto } from './dto/create-ofertas.dto';
import { OfertasService } from './ofertas.service';

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
}
