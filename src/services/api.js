const apiUrl = 'https://jsonplaceholder.typicode.com/';

const checkStatus = (response) => {
    if (response.ok) {
        return response.text().then(function(text) {
          return text ? JSON.parse(text) : {}
        })
    } else if (response.status === 404) {
        return {
          notFound: true
        }
    }
    return response.json();
};

const headers = {
    'Content-Type': 'application/json'
}

const setSettings = (method, body) => {
    const settings = {
        method,
        headers,
        body: body && body instanceof FormData ? body : JSON.stringify(body)
    }
    return settings
}

export const api = {
    GET: (query) => {
        return fetch(apiUrl + query, setSettings('GET')).then(checkStatus)
    }
};