import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';

export const formatErrorResponse = (error) => {
    const { status, statusText } = error.response;
    return {
        status,
        statusText,
    }
};

export const callAPI = (path) => {
    const url = `${baseUrl}/${path}`;
    return axios.get(url);
}
