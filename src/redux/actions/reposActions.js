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

  return async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${currentPage}&per_page=${perPage}`
      )
      dispatch(setRepos(res.data))
    } catch (error) {}
  }
}

export async function getCurrentRepo(owner, repo, setRepo, setFetching) {
  setFetching(true)
  const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}`)
  setRepo(res.data)
  setFetching(false)
}

export async function getOwnerRepos(owner, setFetching, setRepos) {
  setFetching(true)
  const res = await axios.get(
    `https://api.github.com/users/${owner}/repos?page=1&per_page=10`
  )
  setRepos(res.data)
  setFetching(false)
}
