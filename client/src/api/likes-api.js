import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/likes';

const getLikes = (guideId) => {
    const params = new URLSearchParams({
        where: `guideId="${guideId}"`
    });
    
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const create = (guideId) => requester.post(`${BASE_URL}`, { guideId });

export const likesApi = {
    getLikes,
    create
}