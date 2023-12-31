import { Injectable } from '@nestjs/common';
import { Product, ProductSelect } from './model';
import { ProductArgs, ProductCreateInput } from './dto';
import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';
import { ProductsArgs } from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: ProductArgs,
    { select }: ProductSelect,
  ): Promise<Product> {
    return this.prismaService.product.findUnique({
      where,
      select,
    });
  }

  public async findMany(
    { where , orderBy}: ProductsArgs,
    { select }: ProductSelect,
  ): Promise<Product[]> {
    return this.prismaService.product.findMany({
      orderBy,
      where,
      select,
    });
  }

  public async create(
    data: ProductCreateInput,
    { select }: ProductSelect,
  ): Promise<Product> {
    return this.prismaService.product.create({
      data,
      select,
    });
  }
}
// orderBy:{
//   field:price, direction:ASC