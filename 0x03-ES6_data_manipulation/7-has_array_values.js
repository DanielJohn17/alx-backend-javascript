#!/usr/bin/node
export default function hasValuesFromArray(set, array) {
  for (const key of array) {
    if (!set.has(key)) {
      return false;
    }
  }

  return true;
}
