import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './module/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './module/auth/auth.guard';
import { CategoriesModule } from './module/categories/categories.module';
import { BankAccountsModule } from './module/bank-accounts/bank-accounts.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, CategoriesModule, BankAccountsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
