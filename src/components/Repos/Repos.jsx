import React from 'react'
import RepoItem from './repoItem/RepoItem'

export default function Repos({ repos }) {
  return (
    <div className="repos">
      <ul className="repos__list">
        {repos.map((repo, i, arr) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  )
}
