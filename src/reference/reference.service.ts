import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Reference } from './entities/reference.entity';
import { Prisma, User } from '@prisma/client';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { dataTreatment } from 'src/utils/data-treatment';
import { isAdmin } from 'src/utils/admin';

@Injectable()
export class ReferenceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateReferenceDto, user: User): Promise<Reference> {
    isAdmin(user);
    const data: Prisma.ReferenceCreateInput = {
      name: dto.name,
      genre: dto.genre,
      media: dto.media,
    };

    data.name = await dataTreatment(data.name);

    return this.prisma.reference.create({ data }).catch(handleError);
  }

  async findAll(): Promise<Reference[]> {
    const list = await this.prisma.reference.findMany();

    if (list.length === 0) {
      throw new NotFoundException(
        'Não existem referencias cadastradas. Que tal cadastrar a primeira?',
      );
    }
    return list;
  }

  async findOne(id: string) {
    const record = await this.prisma.reference.findUnique({ where: { id } });

    notFoundError(record, id);

    return record;
  }

  async update(
    id: string,
    dto: UpdateReferenceDto,
    user: User,
  ): Promise<Reference> {
    isAdmin(user);
    await this.findOne(id);

    const data: Partial<Reference> = { ...dto };

    data.name = await dataTreatment(data.name);

    return this.prisma.reference
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string, user: User) {
    isAdmin(user);
    await this.findOne(id);

    await this.prisma.reference.delete({
      where: { id },
    });
    throw new HttpException('Referencia deletado com sucesso', 204);
  }
}
