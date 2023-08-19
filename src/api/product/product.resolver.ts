import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Product, ProductSelect } from './model';
import { ProductArgs, ProductCreateInput } from './dto';
import { ProductService } from './product.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { JwtAuthGuard } from 'src/shared/auth/guards';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly userService: ProductService) {}

  @Query(() => Product,{nullable:true})
  public async Product(
    @Args() args: ProductArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product | null> {
    return this.userService.findOne(args, fields);
  }

  @Query(() => [Product])
  public async Products(
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product[]> {
    return this.userService.findMany(fields);
  }

  @Mutation(() => Product)
  @UseGuards(JwtAuthGuard)
  public async createProduct(
    @Args('data') data: ProductCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product> {
    return this.userService.create(data, fields);
  }
}
