import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductDetail } from "./product-detail.entity";
import { ProductColor } from "./product-color.entity";
import { ProductSize } from "./product-size.entity";
import { ProductType } from "../enum/type.enum";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  slug: string;
  @Column({ type: "enum", enum: ProductType })
  type: string;
  @Column()
  code: string;
  @Column()
  count: number;
  @Column({ type: "decimal", nullable: true })
  price: number;
  @Column({ type: "decimal", nullable: true, default: 0 })
  discount: number;
  @Column({ nullable: true, default: false })
  active_discount: boolean;
  @CreateDateColumn()
  created_at: Date;
  @OneToMany(() => ProductDetail, (detail) => detail.product)
  details: ProductDetail[];
  @OneToMany(() => ProductColor, (color) => color.product)
  colors: ProductColor[];
  @OneToMany(() => ProductSize, (size) => size.product)
  sizes: ProductSize[];
}
