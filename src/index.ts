import { User } from './models/User';

const user = new User({ name: 'Raymond', age: 27 });

user.on('change', () => {
  console.log('change 1');
});

user.on('change', () => {
  console.log('change 2');
});

user.on('click', () => {
  console.log('click');
});

user.trigger('change');
user.trigger('click');
