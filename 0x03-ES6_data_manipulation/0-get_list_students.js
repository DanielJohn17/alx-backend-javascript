#!/usr/bin/node
export default function getListStudents() {
  const names = ['Guillaume', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  const ids = [1, 2, 5];

  return names.map((name, index) => ({
    id: ids[index],
    firstName: name,
    location: locations[index],
  }));
}
