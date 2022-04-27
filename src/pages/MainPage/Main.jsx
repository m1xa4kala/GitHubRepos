import React, { useEffect } from 'react'
import Search from '../../components/Search/Search'
import Repos from '../../components/Repos/Repos'
import Pagination from '../../components/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../../redux/actions/reposActions'
import Loader from '../../components/Loader/Loader'
import './main.scss'

export default function Main() {
  const dispath = useDispatch()
  const repos = useSelector((state) => state.repos.items)
  const isFetching = useSelector((state) => state.repos.isFetching)

  function searchHandler(searchValue) {
    dispath(getRepos(searchValue))
  }

  useEffect(() => {
    dispath(getRepos())
  }, [])

  return (
    <div className="container">
      <div className="main">
        <div className="main__search">
          <Search searchHandler={searchHandler} />
        </div>
        <div className="main__repos">
          {!isFetching && repos ? <Repos repos={repos} /> : <Loader />}
        </div>
        <div className="main__pagination">
          <Pagination />
        </div>
      </div>
    </div>
  )
}
