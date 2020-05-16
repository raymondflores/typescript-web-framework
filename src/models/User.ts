import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(ROOT_URL),
      new Eventing()
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(ROOT_URL, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }
}
