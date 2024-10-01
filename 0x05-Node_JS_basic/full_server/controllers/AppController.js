#!/usr/bin/node
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton Scheool!');
  }
}

export default AppController;
module.exports = AppController;
