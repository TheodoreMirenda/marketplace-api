import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/shared/config/config.module';
import { UserModule } from './api/user/user.module';
import { PrismaModule } from './shared/datasource/prisma/prisma.module';
import { AuthModule } from './shared/auth/auth.module';
import { VendorModule } from './api/vendor/vendor.module';
import { CategoryModule } from './api/category/category.module';
import { ProductModule } from './api/product/product.module';
import { VendorProductModule } from './api/vendor-product/vendor-product.module';
import { OrderModule } from './api/order/order.module';
import { ProductOrderModule } from './api/product-order/product-order.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    AuthModule,
    UserModule,
    CategoryModule,
    VendorModule,
    ProductModule,
    VendorProductModule,
    OrderModule,
    ProductOrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
