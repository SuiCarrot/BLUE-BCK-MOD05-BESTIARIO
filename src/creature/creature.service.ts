import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Creature } from './entities/creature-entity';
import { Prisma, User } from '@prisma/client';
import { handleError } from '../utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { isAdmin } from 'src/utils/admin';

@Injectable()
export class CreatureService {
  constructor(private readonly prisma: PrismaService) {}
  async create(user: User, dto: CreateCreatureDto) {
   isAdmin(user)

    const data: Prisma.CreatureCreateInput = {
      name: dto.name,
      imageUrl: dto.imageUrl,
      description: dto.description,
      reference: {
        connectOrCreate: {
          create: { name: dto.reference, genre: dto.reference, media:dto.reference},
          where: { name: dto.reference},
        },
      },
    };

    return await this.prisma.creature.create({ data }).catch(handleError);
  }

  async findAll(): Promise<Creature[]> {
    const list = await this.prisma.creature.findMany();

    if (list.length === 0) {
      throw new NotFoundException(
        'Não existem criaturas cadastrados. Quer cadastrar o seu criatura favorito?',
      );
    }
    return list;
  }

  async findOne(id: string): Promise<Creature> {
    const record = await this.prisma.creature.findUnique({ where: { id } });

    notFoundError(record, id);
    return record;
  }

  async update(id: string, dto: UpdateCreatureDto, user: User): Promise<Creature> {
    isAdmin(user)
    await this.findOne(id);

    const data = { ...dto };

    return this.prisma.creature
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string, user:User) {
    isAdmin(user)
    await this.findOne(id);

    await this.prisma.creature.delete({
      where: { id },
    });
    throw new HttpException('Criatura deletado com sucesso', 204);
  }
}
