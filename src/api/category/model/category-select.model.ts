interface CategoryPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  userId?: boolean;
  vendorId?: boolean;

  orderStatus?: boolean;
  productIds?: boolean;
  
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface CategorySelect {
  select?: CategoryPrismaSelect;
}
