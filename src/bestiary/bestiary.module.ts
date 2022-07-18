import { Module } from '@nestjs/common';
import { BestiaryService } from './bestiary.service';
import { BestiaryController } from './bestiary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [BestiaryController],
  providers: [BestiaryService],
})
export class BestiaryModule {}
