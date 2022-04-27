import React, { useState } from 'react'
import './search.scss'

export default function Search({ searchHandler }) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Repo name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) =>
          e.key === 'Enter' ? searchHandler(searchValue) : null
        }
      />
      <button
        className="search__button btn"
        onClick={() => searchHandler(searchValue)}
      >
        Search
      </button>
    </div>
  )
}
