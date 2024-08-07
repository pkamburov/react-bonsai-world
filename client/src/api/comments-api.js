import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/comments';

export const getRecentComments = async (guideId) => {
    const result = await requester.get(`${BASE_URL}/comments?where=guideId%3D%22${guideId}%22&sortBy=_createdOn%20desc`);

    // const recentPosts = Object.values(result);

    return result;
}

const getAllComments = (guideId) => {
    const params = new URLSearchParams({
        where: `guideId="${guideId}"`,
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const create = ({ comment }, username, guideId) => {
    const data = {
        comment,
        username,
        guideId
    }

    requester.post(`${BASE_URL}`, data)
}


export const commentsApi = {
    getAllComments,
    getRecentComments,
    create
}