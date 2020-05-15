import { User } from './models/User';

const user = new User({ name: 'Raymond', age: 0 });

console.log(user.get('name'));
