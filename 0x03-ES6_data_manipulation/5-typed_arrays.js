#!/usr/bin/node
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const dataView = new DataView(buffer);

  if (position >= 0 && position < length) {
    dataView.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  const int8Array = new Int8Array(buffer);

  return int8Array;
}
