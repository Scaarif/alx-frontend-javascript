import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // wait for all functions to resolve to console-log
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
    //   response -> is an array of the 2 fns' return objects
      console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
