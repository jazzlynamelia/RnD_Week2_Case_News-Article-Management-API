const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllPublished = async () => {
    return await prisma.article.findMany({
        where: { 
            published: true 
        }
    });
};

const create = async (data) => {
    return await prisma.article.create({ 
        data 
    });
};

const updateById = async (id, data) => {
    return await prisma.article.update({ 
        where: { 
            id 
        }, 
        data 
    });
};

const deleteById = async (id) => {
    return await prisma.article.delete({ 
        where: { 
            id 
        } 
    });
};

const publish = async (id) => {
    return await prisma.article.update({
        where: { 
            id 
        },
        data: { 
            published: true 
        }
    });
};

const searchByTitle = async (title) => {
    return await prisma.article.findMany({
        where: {
            title: {
                contains: title.toLowerCase()
            }
        }
    });
};

module.exports = {
    findAllPublished,
    create,
    updateById,
    deleteById,
    publish,
    searchByTitle
}