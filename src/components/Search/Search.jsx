import React from 'react'
import './search.scss'

export default function Search() {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Repo name" />
      <button className="search__button btn">Search</button>
    </div>
  )
}
