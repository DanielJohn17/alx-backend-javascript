#!/usr/bin/node
export default function getStudentsByLocation(students, location) {
  return students.filter((obj) => obj.location === location);
}
