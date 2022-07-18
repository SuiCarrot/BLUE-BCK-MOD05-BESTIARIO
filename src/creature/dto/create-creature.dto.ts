import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateCreatureDto {
  @IsString()
  @ApiProperty({
    description: 'Nome da criatura.',
    example: 'Beholder',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem da criatura, em URL',
    example:
      'https://static.wikia.nocookie.net/forgottenrealms/images/6/66/Beholder_-_Scott_M._Fischer.jpg/revision/latest?cb=20200226103050',
  })
  imageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição da criatura.',
    example:
      'A beholder, sometimes called a sphere of many eyes or an eye tyrant, was a large aberration normally found in the Underdark.',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Lugares onde a criatura aparece',
    example: 'RPG',
  })
  reference: string;
}
