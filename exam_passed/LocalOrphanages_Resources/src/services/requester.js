import * as authService from './authService.js'

const request = (method, url, data) => {
    let options = {};
    let serializedUser = localStorage.getItem('user');

    if (method != 'GET') {
        options.method = method;
        options.headers = {
            'content-type': 'applications/json',
        }

        if(serializedUser){
            options.headers['X-Authorization'] = authService.getToken();
        }
        
        options.body = JSON.stringify(data);
    }
    return fetch(url, options)
        .then(res => res.json());

}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');