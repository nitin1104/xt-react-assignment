import http from '../http';

export function getCharacters(params = {}) {
    const species = (params.species || []).map(species => `species=${species}`).join('&');
    const gender = (params.gender || []).map(gender => `gender=${gender.toLowerCase()}`).join('&');
    const status = (params.status || []).map(status => `status=${status.toLowerCase()}`).join('&');
    const page = `page=${params.page || 1}`;
    const name = `name=${params.searchText || ''}`;

    const url = `https://rickandmortyapi.com/api/character/?${species}&${gender}&${page}&${name}&${status}`;
    console.log(url);
    return http.get(url);
}