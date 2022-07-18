import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ReferenceService } from './reference.service';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Reference } from './entities/reference.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@ApiTags('Reference')
@Controller('reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Only Amin - Criar nova refêrencia.',
  })
  create(
    @LoggedUser() user: User,
    @Body() dto: CreateReferenceDto,
  ): Promise<Reference> {
    return this.referenceService.create(dto, user);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as referências.',
  })
  findAll(): Promise<Reference[]> {
    return this.referenceService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma referência através do ID.',
  })
  findOne(@Param('id') id: string): Promise<Reference> {
    return this.referenceService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Only Admin - Editar uma referência através do ID.',
  })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateReferenceDto,
  ): Promise<Reference> {
    return this.referenceService.update(id, dto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Only Admin - Deletar uma referência através do ID.',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    return this.referenceService.delete(id, user);
  }
}
