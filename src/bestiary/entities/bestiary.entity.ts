import { Creature } from '../../creature/entities/creature-entity';
import { Profile } from '../../profile/entities/profile.entity';
export class Bestiary {
  id: String;
  creatureId: Creature;
  profileId: Profile;
}
