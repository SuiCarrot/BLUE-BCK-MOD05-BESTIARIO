import { Creature } from 'src/creature/entities/creature-entity';

export class Reference {
  id?: string;
  name: string;
  genre: string;
  media: string;
  creature?: Creature[];
  createdAt?: Date;
  updatedAt?: Date;
}
