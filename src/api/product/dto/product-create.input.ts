import { Field, InputType } from '@nestjs/graphql';

import { MaxLength } from 'class-validator';
import { CategoryCreateNestedOneWithoutProductsInput } from 'src/api/category/dto';
import { VendorProductCreateNestedOneWithoutProductInput } from 'src/api/vendor-product/dto';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  description: string;
  @Field(() => [String])
  images: string[];
  @Field(() => Number)
  price: number;
  @Field(() => CategoryCreateNestedOneWithoutProductsInput)
  category: CategoryCreateNestedOneWithoutProductsInput
  @Field(() => VendorProductCreateNestedOneWithoutProductInput)
  vendorProduct: VendorProductCreateNestedOneWithoutProductInput
}

@InputType()
export class ProductCreateNestedOneWithoutVendorProductInput {
  @Field(() => ProductWhereUniqueInput)
  connect: ProductWhereUniqueInput;
}

@InputType()
export class ProductCreateNestedOneWithoutProductOrderInput {
  @Field(() => ProductWhereUniqueInput)
  connect: ProductWhereUniqueInput;
}

@InputType()
export class ProductCreateNestedOneWithoutProductOrdersInput {
  @Field(() => ProductWhereUniqueInput)
  connect: ProductWhereUniqueInput;
}
