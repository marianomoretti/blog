module.exports =

class PostController {

  list () {
    return this.service.list();
  }

  get (command) {
    return this.service.get(command.id);
  }

  create (command) {
    return this.service.create(command);
  }

  update (command) {
    return this.service.update(command);
  }
  delete (command) {
    return this.service.delete(command.id);
  }
}