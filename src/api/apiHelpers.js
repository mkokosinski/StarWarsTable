import api from './api'

export const getAllPages = async (url, collection = []) => {
  const { results, next } = await api.getJson(url)
  collection = [...collection, ...results]
  if (next !== null) {
    return getAllPages(next, collection)
  }
  return collection
}
