import axios from 'axios'
import { setIsFetching, setRepos } from '../reducers/reposReducer'

export function getRepos(searchQuery = `${encodeURIComponent('stars:>0')}`) {
  return async (dispath) => {
    dispath(setIsFetching(true))
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`
    )
    dispath(setRepos(res.data))
  }
}
