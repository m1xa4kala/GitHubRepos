import React from 'react'
import Search from '../../components/Search/Search'
import Repos from '../../components/Repos/Repos'
import Pagination from '../../components/Pagination/Pagination'
import './main.scss'

export default function Main() {
  return (
    <div className="container">
      <div className="main">
        <div className="main__search">
          <Search />
        </div>
        <div className="main__repos">
          <Repos />
        </div>
        <div className="main__pagination">
          <Pagination />
        </div>
      </div>
    </div>
  )
}
