import axios from 'axios'
import { setIsFetching, setRepos } from '../reducers/reposReducer'

export function getRepos(
  searchQuery = `${encodeURIComponent('stars:>0')}`,
  currentPage,
  perPage
) {
  if (searchQuery == '') {
    searchQuery = `${encodeURIComponent('stars:>0')}`
  }

  return async (dispath) => {
    dispath(setIsFetching(true))
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${currentPage}&per_page=${perPage}`
    )
    dispath(setRepos(res.data))
  }
}
