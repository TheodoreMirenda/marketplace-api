import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Category, CategorySelect } from './model';
import { CategoryArgs, CategoryCreateInput } from './dto';
import { CategoryService } from './category.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles';
import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';
import { Role } from '@prisma/client';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category,{nullable:true})
  public async category(
    @Args() args: CategoryArgs,
    @GraphQLFields() { fields }: IGraphQLFields<CategorySelect>,
  ): Promise<Category | null> {
    return this.categoryService.findOne(args, fields);
  }

  @Query(() => [Category])
  public async categories(
    @GraphQLFields() { fields }: IGraphQLFields<CategorySelect>,
  ): Promise<Category[]> {
    return this.categoryService.findMany(fields);
  }

  @Mutation(() => Category)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  public async createCategory(
    @Args('data') data: CategoryCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<CategorySelect>,
  ): Promise<Category> {
    return this.categoryService.create(data, fields);
  }
}
