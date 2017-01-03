module.exports =

class HelloController {
  /**
   * @api {get} /hello
   * @apiVersion 1.0.0
   * @apiName Hello
   * @apiGroup Hello
   * @apiParam {String} name Name to say hello
   *
   * @apiExample {curl} Example usage:
   *    curl -i http://localhost:3000/hello?name=charles
   */
  list (command) {
    return `Hello ${command.name}!!!`;
  }
};


