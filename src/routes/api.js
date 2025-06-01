const article = require('../modules/article/controller/article.controller');

module.exports = async(app) => {
  app.get('/api/v1/articles', article.findAllPublished);
  app.post('/api/v1/articles', article.create);
  app.put('/api/v1/articles/:id', article.updateById);
  app.delete('/api/v1/articles/:id', article.deleteById);
  app.patch('/api/v1/articles/publish/:id', article.publish);
  app.get('/api/v1/articles/search/query', article.search);
}
