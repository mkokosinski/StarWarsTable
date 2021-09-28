export const endponits = {
  people: 'https://swapi.dev/api/people/',
  films: 'https://swapi.dev/api/films/',
  planets: 'https://swapi.dev/api/planets/',
  species: 'https://swapi.dev/api/species/',
  starships: 'https://swapi.dev/api/starships/',
  vehicles: 'https://swapi.dev/api/vehicles/',
}
const baseHeaders = { 'Content-Type': 'application/json' }

const handleResponse = (response) => {
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(json)
  })
}

const getJson = (url) => {
  const requestOptions = {
    method: 'GET',
    headers: baseHeaders,
  }
  return fetch(url, requestOptions).then(handleResponse)
}

const api = {
  getJson,
}

export default api
