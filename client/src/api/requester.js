async function requester(method, url, data) {
    const options = {};

    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        }
    }

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        }
        
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return;
    }

    //TODO Fix Error 403 on Logout and remove this
    // if (response.status === 403) {
    //     sessionStorage.clear();
    //     const newResponse = await fetch(url);
    //     const newResult = await newResponse.json();

    //     return newResult;
    // }

    const result = await response.json();


    if (!response.ok) {
        throw result;
    }


    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
}
