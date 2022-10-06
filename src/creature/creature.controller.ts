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
import { CreatureService } from './creature.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Creature } from './entities/creature-entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@ApiTags('Creature')
@Controller('creature')
export class CreatureController {
  constructor(private readonly CreatureService: CreatureService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Only Admin - Adicionar uma nova criatura a coleção.',
  })
  create(
    @LoggedUser() user: User,
    @Body() dto: CreateCreatureDto,): Promise<Creature> {
    return this.CreatureService.create(user, dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as criaturas do site.',
  })
  findAll(): Promise<Creature[]> {
    return this.CreatureService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma criatura através do ID.',
  })
  findOne(@Param('id') id: string): Promise<Creature> {
    return this.CreatureService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Only Admin - Editar dados de uma criatura através do  ID.',
  })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateCreatureDto,
  ): Promise<Creature> {
    return this.CreatureService.update(id, dto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Only Admin - Deletar uma criatura através do ID.',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    return this.CreatureService.delete(id, user);
  }
}
