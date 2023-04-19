export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName }); // return an object of values (firstName: firstName, ...)
  });
}
