import * as api from './requester.js';

const baseURL = 'https://softuni-app-movie.herokuapp.com/data/posts';
const donationURL = 'https://softuni-app-movie.herokuapp.com/data/donations';

export const getAll = () => {
    return api.get(`${baseURL}?sortBy=_createdOn%20desc`);
}

export const getOne = (id) => {
    return api.get(`${baseURL}/${id}`);
}

export const create = (data) => {
    return api.post(`${baseURL}`,data)
}

export const edit = (id, data) => {
    return api.put(`${baseURL}/${id}`, data);
}

export const del = (id) => {
    return api.del(`${baseURL}/${id}`)
}

export const getByName = (userId) => {
    return api.get(`${baseURL}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
