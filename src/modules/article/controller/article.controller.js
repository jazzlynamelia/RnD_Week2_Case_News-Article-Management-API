const articleService = require('../service/article.service');
const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
});

const findAllPublished = async (req, res) => {
    const articles = await articleService.findAllPublished();
    res.json(articles);
};

const create = async (req, res) => {
    try {
        await schema.validateAsync(req.body);
        const article = await articleService.create(req.body);
        res.json(article);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateById = async (req, res) => {
    try {
        await schema.validateAsync(req.body);
        const article = await articleService.updateById(req.params.id, req.body);
        res.json(article);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteById = async (req, res) => {
    const result = await articleService.deleteById(req.params.id);
    res.json(result);
};

const publish = async (req, res) => {
    const article = await articleService.publish(req.params.id);
    res.json(article);
};

const search = async (req, res) => {
    const { title } = req.query;
    const result = await articleService.searchByTitle(title);
    res.json(result);
};

module.exports = {
    findAllPublished,
    create,
    updateById,
    deleteById,
    publish,
    search
};
