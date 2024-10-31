import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/utils/prisma';

@Module({
  providers: [PrismaService, UsersResolver, UsersService],
})
export class UsersModule {}
