import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data';

export const getAll = async () => {
    const result = await request.get(`${BASE_URL}/species?select=_id%2Cname%2CnameBinominal%2CimageUrl%2Ccategory`);
    
    const guides = Object.values(result);

    return guides;
}

export const getRecent = async () => {
    const result = await request.get(`${BASE_URL}/species?sortBy=_createdOn%20desc&pageSize=4`);

    const recentPosts = Object.values(result);

    return recentPosts;
}

export const getTreeDetails = async (treeId) => {
    const result = await request.get(`${BASE_URL}/species/${treeId}`);

    const details = Object.values(result);
    return details;
}

export const getOne = (guideId) => request.get(`${BASE_URL}/species/${guideId}`);

export const getFeaturedPages = async () => {
    const result = await request.get(`${BASE_URL}/featuredPages`);
    
    const featuredPages = Object.values(result);
    return featuredPages;
}
export const getPage = (pageId) => request.get(`${BASE_URL}/pages/${pageId}`);

export const createGuide = (guideData) => request.post(`${BASE_URL}/species`, guideData);


export const bonsaiApi = {
    getAll,
    getOne,
    getFeaturedPages,
    getPage,
    getRecent,
    createGuide
}