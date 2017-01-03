module.exports =

class PostService {
  get(id) {
    return this.model.findById(id);
  }

  list() {
    return this.model.findAll();
  }

  create(post) {
    return this.model.create(post);
  }

  update(post) {
    return this.model.update(post, { 'where': { 'id' : post.id } });
  }

  delete(id) {
    return this.model.destroy({ 'where': { 'id' : id } });
  }
}