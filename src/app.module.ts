import { Module } from '@nestjs/common';
import { ProductosController } from './productos/productos.controller';
import { OfertasController } from './ofertas/ofertas.controller';
import { OfertasService } from './ofertas/ofertas.service';
import { ProductosService } from './productos/productos.service';
import { ProductosModule } from './productos/productos.module';
import { OfertasModule } from './ofertas/ofertas.module';

@Module({
  imports: [ProductosModule, OfertasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
