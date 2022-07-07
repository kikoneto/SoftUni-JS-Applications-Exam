import * as request from './requester.js';

const baseUrl = 'https://softuni-app-movie.herokuapp.com/users'

const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

const clearUser = () => {
    localStorage.removeItem('user');
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if(serializedUser){
       let user = JSON.parse(serializedUser);

       return user;
    }
}

export const getToken = () => {
    return getUser()?.accessToken;
}

export const login = (email, password) => {
    return request.post(`${baseUrl}/login`, { email, password })
        .then(user => {
            saveUser(user);
            return user;
        })
}

export const register = (email, password) => {
    return request.post(`${baseUrl}/register`, { email, password })
        .then(user => {
            saveUser(user);
            return user;
        })
}

export const logout = () => {
    return fetch(`${baseUrl}/logout`, { headers: {'X-Authorization': getToken()}})
    .then(() => {
        clearUser();
    })
}
