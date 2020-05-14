import { User } from './models/User';

const user = new User({ name: 'Raymond', age: 27 });

user.on('change', () => {
  console.log('hi');
});

console.log(user);
