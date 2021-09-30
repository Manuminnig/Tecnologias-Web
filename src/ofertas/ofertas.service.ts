import { Injectable } from '@nestjs/common';
import { CreateOfertasDto } from './dto/create-ofertas.dto';
import { Ofertas } from './ofertas';

@Injectable()
export class OfertasService {
    constructor(private readonly productosService: OfertasService) {}
    private ofertas = [
        {
          "id": 1,
          "descuentos": 20,
          }
       
      ];

      findAll () {
        return this.ofertas;
      }

      findOne (id: any){
        return this.ofertas.find(function(productos){
          return Ofertas.id == id;
        });
       }
    create(CreateOfertasDto: CreateOfertasDto) {
        let nextId = this.ofertas[this.ofertas.length-1].id+1;
        let ofertas = {
            "id": nextId,
            ...CreateOfertasDto
        }
       this.ofertas.push(ofertas);
       return this.ofertas;  
       } 
}
