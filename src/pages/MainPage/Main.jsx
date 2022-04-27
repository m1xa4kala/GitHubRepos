import React, { useEffect } from 'react'
import Search from '../../components/Search/Search'
import Repos from '../../components/Repos/Repos'
import Pagination from '../../components/Pagination/Pagination'
import './main.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../../redux/actions/reposActions'
import Loader from '../../components/Loader/Loader'

export default function Main() {
  const dispath = useDispatch()
  const repos = useSelector((state) => state.repos.items)
  const isFetching = useSelector((state) => state.repos.isFetching)

  useEffect(() => {
    dispath(getRepos())
  }, [])

  return (
    <div className="container">
      <div className="main">
        <div className="main__search">
          <Search />
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
