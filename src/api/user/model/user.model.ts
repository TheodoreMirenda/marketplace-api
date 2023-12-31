import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Order } from 'src/api/order/model/order.model';
import { Vendor } from 'src/api/vendor/model/vendor.model';
import { Role } from '@prisma/client';
import { IsOptional } from 'class-validator';

@ObjectType()//this is all the stuff that can be returned from the graphql api
export class User {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  uuid?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => Role, { nullable: true })
  type?: Role;
  @Field(() => String, { nullable: true })
  firstName?: string;
  @Field(() => String, { nullable: true })
  lastName?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @IsOptional()
  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
  @Field(() => [Order], { nullable: true })
  orders?: Order[];
  @Field(() => Vendor, { nullable: true })
  vendor?: Vendor;
}

registerEnumType(Role, {
  name: 'Role',
});
