import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { VendorProduct, VendorProductSelect } from './model';
import { VendorProductArgs, VendorProductCreateInput } from './dto';
import { VendorProductService } from './vendor-product.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { JwtAuthGuard } from 'src/shared/auth/guards';
import { UseGuards } from '@nestjs/common';
@Resolver(() => VendorProduct)
export class VendorProductResolver {
  constructor(private readonly vendorService: VendorProductService) {}

  @Query(() => VendorProduct,{nullable:true})
  public async vendor(
    @Args() args: VendorProductArgs,
    @GraphQLFields() { fields }: IGraphQLFields<VendorProductSelect>,
  ): Promise<VendorProduct | null> {
    return this.vendorService.findOne(args, fields);
  }

  @Mutation(() => VendorProduct)
  // @UseGuards(JwtAuthGuard)
  public async createVendorProduct(
    @Args('data') data: VendorProductCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<VendorProductSelect>,
  ): Promise<VendorProduct> {
    return this.vendorService.create(data, fields);
  }
}
