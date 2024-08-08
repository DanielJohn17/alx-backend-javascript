#!/usr/bin/node
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numbers = [19, 20, 34];
  const objectArray = [];

  for (const num of numbers) {
    const classRoomObject = new ClassRoom(num);

    objectArray.push(classRoomObject);
  }

  return objectArray;
}
