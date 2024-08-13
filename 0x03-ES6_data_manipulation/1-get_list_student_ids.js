#!/usr/bin/node
export default function getListStudentIds(students) {
  if (typeof students !== 'object') {
    return [];
  }

  return students.map((obj) => obj.id);
}
