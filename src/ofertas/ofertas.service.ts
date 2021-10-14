import { Injectable } from '@nestjs/common';
import { CreateOfertasDto } from './dto/create-ofertas.dto';
import { Ofertas } from './ofertas';
import { UpdateOfertasDto } from './dto/update-ofertas.dto';

@Injectable()
export class OfertasService {
    constructor() {}
    private ofertas : Ofertas [] = [
        {
          "id": 1,
          "descuentos": 20,
          },
          
          {
            "id": 2,
            "descuentos": 10,
            }
       
      ];

      findAll (): Ofertas[] {
        return this.ofertas;
      }

      findOne (id: any){
        return this.ofertas.find(function(ofertas){
          return Ofertas.id == id;
        });
       }
    create(CreateOfertasDto: CreateOfertasDto): Ofertas {
        let nextId = this.ofertas[this.ofertas.length-1].id + 1;
        let ofertas: Ofertas = {
            id: nextId,
            ...CreateOfertasDto
        }
       this.ofertas.push(ofertas);
       return ofertas;  
       } 

       remove(id: number): void {
        const oferta = this.findOne(id);
        const pos = this.ofertas.indexOf(oferta);
        this.ofertas.splice(pos, 1); 

       }

       update(id: number, Updateofertasdto: UpdateOfertasDto): Ofertas {
        const oferta = this.findOne(id);
        oferta.id= Updateofertasdto.id;
        oferta.descuentos= Updateofertasdto.descuentos
         return oferta;
       } 
}
