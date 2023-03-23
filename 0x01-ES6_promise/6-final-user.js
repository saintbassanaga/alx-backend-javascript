import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  signUpUser(firstName, lastName).then((value) => {
    arr.push(value);
  }).then(() => {
    uploadPhoto(fileName).then((value) => {
      arr.push(value);
    });
  }).catch((error) => {
    arr.push(error.toString());
  });
  return arr;
}
