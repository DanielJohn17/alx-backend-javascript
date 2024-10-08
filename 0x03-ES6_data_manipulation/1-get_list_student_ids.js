#!/usr/bin/node
export default function getListStudentIds(students) {
  if (!(students instanceof Array)) {
    return [];
  }

  return students.map((obj) => obj.id);
}
