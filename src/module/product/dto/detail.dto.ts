import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class AddDetailDto {
  @ApiProperty()
  productId: number;
  @ApiPropertyOptional()
  key: number;
  @ApiPropertyOptional()
  value: number;
}

export class UpdateDetailDto extends PartialType(AddDetailDto) {}
