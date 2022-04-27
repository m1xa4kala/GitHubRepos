import React, { useEffect, useState } from 'react'
import Search from '../../components/Search/Search'
import Repos from '../../components/Repos/Repos'
import Pagination from '../../components/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../../redux/actions/reposActions'
import Loader from '../../components/Loader/Loader'
import { setCurrentPage } from '../../redux/reducers/reposReducer'
import createPages from '../../utils/createPages'
import './main.scss'

export default function Main() {
  const dispath = useDispatch()
  const repos = useSelector((state) => state.repos.items)
  const isFetching = useSelector((state) => state.repos.isFetching)
  const currentPage = useSelector((state) => state.repos.currentPage)
  const perPage = useSelector((state) => state.repos.perPage)
  const totalCount = useSelector((state) => state.repos.totalCount)

  const totalPages = Math.ceil(totalCount / perPage)
  const pages = []
  createPages(pages, totalPages, currentPage)

  const [searchValue, setSearchValue] = useState('')

  function paginationHandler(page) {
    dispath(setCurrentPage(page))
  }

  function searchHandler(searchValue) {
    dispath(setCurrentPage(1))
    dispath(getRepos(searchValue, currentPage, perPage))
  }

  useEffect(() => {
    dispath(getRepos(searchValue, currentPage, perPage))
  }, [currentPage])

  return (
    <div className="container">
      <div className="main">
        <div className="main__search">
          <Search
            searchHandler={searchHandler}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="main__repos">
          {!isFetching && repos ? <Repos repos={repos} /> : <Loader />}
        </div>
        <div className="main__pagination">
          <Pagination
            paginationHandler={paginationHandler}
            pages={pages}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  )
}
