import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { getCurrentRepo, getOwnerRepos } from '../../redux/actions/reposActions'
import './repo-card.scss'

export default function Repo() {
  const { owner, repoName } = useParams()
  const [repo, setRepo] = useState({ owner: {} })
  const [ownerRepos, setRepos] = useState([])
  const [isFetching, setFetching] = useState(true)

  useEffect(() => {
    getCurrentRepo(owner, repoName, setRepo, setFetching)
    getOwnerRepos(owner, setFetching, setRepos)
  }, [])

  return (
    <div className="container">
      {!isFetching && repo ? (
        <div className="repo-card">
          <div className="repo-card__header">
            <img
              className="repo-card__author-avatar"
              width={50}
              src={repo.owner.avatar_url}
              alt="author-avatar"
            />
            <h3 className="repo-card__name">
              {repo.owner.login}/{repo.name}
            </h3>
          </div>
          <ul className="repo-card__owner-repos">
            <h4>Other {repo.owner.login} repositories: </h4>
            {ownerRepos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
