import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 12)
  @ApiProperty({
    description: 'Nome do perfil. Deve conter de 3 a 12 letras',
    example: 'Honaru476',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Foto do perfil. Deve ser uma URL.',
    example:
      'https://i.pinimg.com/564x/aa/b0/08/aab008925049c314ab09a39aca5f4d88.jpg',
  })
  imageUrl: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do Usuário detentor do perfil.',
    example: '88abbad8-1b0e-417a-ae5e-0317b0cff8b2',
  })
  userId: string;
}
