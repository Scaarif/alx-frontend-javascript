import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  // returns an array of 3 ClassRoom objects (sizes 19, 20, 34)
  let res = [];
  const c1 = new ClassRoom(19);
  const c2 = new ClassRoom(20);
  const c3 = new ClassRoom(34);
  // res.push(`ClassRoom { _maxStudentsSize: ${c1._maxStudentsSize} }`);
  // res.push(`ClassRoom { _maxStudentsSize: ${c2._maxStudentsSize} }`);
  // res.push(`ClassRoom { _maxStudentsSize: ${c3._maxStudentsSize} }`);
  res = Object.assign([], [c1, c2, c3]);
  return res;
}
