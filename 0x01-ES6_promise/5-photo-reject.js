export default function uploadPhoto(filename) {
  return new Promise((_, reject) => {
    reject(Error(`${filename} cannot be processed`)); // returns a Promise rejecting with Error...
  });
}
