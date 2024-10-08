#!/usr/bin/node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((resp) => resp.map((elem) => ({
    status: elem.status,
    value: elem.status === 'fulfilled' ? elem.value : String(elem.reason),
  })));
}
