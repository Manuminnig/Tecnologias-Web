import { Injectable } from '@nestjs/common';
import { CreateProductosDto } from './dto/create-productos.dto';
import { Productos } from './productos';
import { UpdateproductosDto } from './dto/update-productos.dto';

@Injectable()
export class ProductosService {

    private productos = [
        {
          "id": 1,
          "nombre": "Coca-cola",
          "desc": "Gaseosa",
          "precio": 100,
          "id_oferta":1,
         },
         { 

          "id": 2,
          "nombre": "fanta",
          "desc": "Gaseosa",
          "precio": 100,
          "id_oferta":2,
        }
       
      ];


    
      findAll () {
        return this.productos;
      }
     
      findOne (id: any){
        return this.productos.find(function(productos){
          return productos.id == id;
        });
       }
      
       create(CreateProductosDto: CreateProductosDto): Productos {
        let nextId = this.productos[this.productos.length-1].id + 1;
        let producto: Productos = {
            id: nextId,
            ...CreateProductosDto
        }
       this.productos.push(producto);
       return producto;  
       } 
    

       remove(id: number): void {
         const producto = this.findOne(id);
         const pos = this.productos.indexOf(producto);
         this.productos.splice(pos, 1); 

       }

     update(id: number, Updateproductosdto: UpdateproductosDto): Productos {

      const producto = this.findOne(id);
      producto.nombre= Updateproductosdto.nombre;
      producto.desc= Updateproductosdto.desc;
      producto.precio= Updateproductosdto.precio;
      producto.id_oferta= Updateproductosdto.id_oferta;
      return producto;
     } 
}
