import React from 'react'
import RepoItem from './repoItem/RepoItem'
import './repos.scss'

export default function Repos({ repos }) {
  return (
    <div className="repos">
      <ul className="repos__list">
        {repos.map((repo, i, arr) => (
          <li className="repos__list-item" key={repo.id}>
            <RepoItem repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  )
}
