import { Module } from '@nestjs/common';
import { CreatureService } from './creature.service';
import { CreatureController } from './creature.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [CreatureController],
  providers: [CreatureService],
})
export class CreatureModule {}
