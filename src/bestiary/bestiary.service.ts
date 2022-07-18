import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBestiaryDto } from './dto/create-bestiary';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from '../utils/not-found';

@Injectable()
export class BestiaryService {
  constructor(private readonly prisma: PrismaService) {}

  async addcreature(dto: CreateBestiaryDto) {
    const data: Prisma.BestiaryCreateInput = {
      creature: { connect: { id: dto.creatureId } },
      profile: { connect: { id: dto.profileId } }
    };

    return await this.prisma.bestiary
      .create({
        data,
        select: {
          id:true,
          creature: {
            select: {
              id: true,
              name: true,
            },
          },
          profile: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async findOneProfile(profileId: string) {
    const record = await this.prisma.bestiary.findMany({
      where: { profileId },
      select: {
        id: true,
        creature: {
          select: {
            name: true,
            reference: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    notFoundError(record, profileId);

    return record;
  }

  async delete(id) {
    const record = await this.prisma.bestiary.findUnique({
      where: { id },
    });

    notFoundError(record, id);

    await this.prisma.bestiary.delete({
      where: { id },
    });
    throw new HttpException('Criatura deletada com sucesso.', 204);
  }
}
