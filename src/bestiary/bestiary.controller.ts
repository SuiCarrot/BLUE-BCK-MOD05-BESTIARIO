import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BestiaryService } from './bestiary.service';
import { CreateBestiaryDto } from './dto/create-bestiary';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Profile-games')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Controller()
export class BestiaryController {
  constructor(private readonly bestiaryService: BestiaryService) {}

  @Post('/profile/creature')
  @ApiOperation({
    summary: 'Adicionar criatura a um determinado Perfil (addCreature).',
  })
  create(@Body() dto: CreateBestiaryDto) {
    return this.bestiaryService.addcreature(dto);
  }

  @Get('homepage/:profileId')
  @ApiOperation({
    summary: 'Lista de criaturas de determinado perfil com as referencias.',
  })
  findOne(@Param('profileId') id: string) {
    return this.bestiaryService.findOneProfile(id);
  }

  @Delete('profile/creature/:bestiaryId')
  @ApiOperation({
    summary: 'Remover criatura de um determinado Perfil. Usar Id do addCreature.',
  })
  delete(@Param('bestiaryId') id: string) {
    return this.bestiaryService.delete(id);
  }
}
