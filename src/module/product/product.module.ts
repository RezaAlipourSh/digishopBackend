import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductSize } from "./entities/product-size.entity";
import { ProductColor } from "./entities/product-color.entity";
import { ProductDetail } from "./entities/product-detail.entity";
import { ProductController } from "./controller/product.controller";
import { ProductSizeController } from "./controller/product-size.controller";
import { ProductDetailController } from "./controller/product-detail.controller";
import { ProductColorController } from "./controller/product-color.controller";
import { ProductService } from "./product.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductSize,
      ProductColor,
      ProductDetail,
    ]),
  ],
  controllers: [
    ProductController,
    ProductSizeController,
    ProductDetailController,
    ProductColorController,
  ],
  providers: [ProductService],
})
export class ProductModule {}
