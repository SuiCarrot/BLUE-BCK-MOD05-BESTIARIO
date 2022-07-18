import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateReferenceDto {
  @IsString()
  @ApiProperty({
    description: 'Adicione uma nova referencia para as criaturas do bestiário',
    example: 'RPG',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero da referência, adicionar apenas um.',
    example: 'Fantasia',
  })
  genre: string;

  @IsString()
  @ApiProperty({
    description:
      'Mídia onde essa referência mais aparece. Adicionar mais de uma separando com um traço (-)',
    example: 'RPG - Filmes - Games',
  })
  media: string;
}
