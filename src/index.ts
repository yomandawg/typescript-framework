import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 2 });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log(user);
});

user.fetch();

user.save();
