// src/utils/api.js
export const apiFetch = (url, options = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
        console.log('Token JWT envoyé avec la requête:', token);
    } else {
        console.error('Aucun token JWT trouvé');
    }

    return fetch(url, {
        ...options,
        headers,
    }).then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    });
};
