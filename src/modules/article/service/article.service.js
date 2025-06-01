const articleRepository = require('../repository/article.repository');

const findAllPublished = async () => {
    return await articleRepository.findAllPublished();
}

const create = async (data) => {
    return await articleRepository.create(data);
}

const updateById = async (id, data) => {
    return await articleRepository.updateById(parseInt(id), data);
}

const deleteById = async (id) => {
    return await articleRepository.deleteById(parseInt(id));
}

const publish = async (id) => {
    return await articleRepository.publish(parseInt(id));
}

const searchByTitle = async (title) => {
    return await articleRepository.searchByTitle(title);
}

module.exports = {
    findAllPublished,
    create,
    updateById,
    deleteById,
    publish,
    searchByTitle
}

