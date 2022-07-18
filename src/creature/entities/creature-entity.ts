import { Reference } from 'src/reference/entities/reference.entity';
import { Profile } from 'src/profile/entities/profile.entity';

export class Creature {
  id?: string;
  name: string;
  imageUrl: string;
  reference?: Reference[];
  profile?: Profile[];
}
