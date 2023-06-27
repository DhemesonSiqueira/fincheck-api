import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
