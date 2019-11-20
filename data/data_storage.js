const comments = {};


module.exports = {
    getAllComments: () => {
        return comments;
    },
    getCommentByPseudo: (pseudo) => {
        return comments[pseudo];
    },
    setCommentByPseudo: (pseudo, comment) => {
        comments[pseudo] = comment;
    },
    deleteCommentByPseudo: (pseudo) => {
        delete comments[pseudo];
    },
};
