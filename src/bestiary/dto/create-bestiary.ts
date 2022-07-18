import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBestiaryDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID da criatura.',
    example: 'e0673bf6-a645-418f-a91e-95a60c3bf9a9',
  })
  creatureId: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID do perfil.',
    example: '245531f7-3f72-4815-86f5-51a8d494578a',
  })
  profileId: string;
}
