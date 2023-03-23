/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './util.js';

export default function handleProfileSignup() {
  uploadPhoto().then((response) => {
    createUser().then((user) => {
      console.log(`${response.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
  });
}
