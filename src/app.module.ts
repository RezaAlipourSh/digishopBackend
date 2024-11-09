import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "./module/product/product.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "rza",
      password: "",
      database: "digikala",
      autoLoadEntities: false,
      synchronize: true,
      entities: [
        "dist/**/**/**/*.entity{.js,.ts}",
        "dist/**/**/*.entity{.js,.ts}",
      ],
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
