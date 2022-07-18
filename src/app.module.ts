import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { CreatureModule } from './creature/creature.module';
import { BestiaryModule } from './bestiary/bestiary.module';
import { ReferenceModule } from './reference/reference.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ProfileModule, CreatureModule, ReferenceModule, BestiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
