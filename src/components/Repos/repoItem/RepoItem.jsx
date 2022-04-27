import React from 'react'
import { Link } from 'react-router-dom'
import github from '../../../assets/images/github.png'
import star from '../../../assets/images/star.png'
import './repo.scss'

export default function RepoItem({ repo }) {
  return (
    <div className="repo">
      <div className="repo__header">
        <h3 className="repo__name">
          <Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
        </h3>
        <div className="repo__stars">
          <img width={30} src={star} alt="star" />
          &nbsp;
          {repo.stargazers_count}
        </div>
      </div>
      <div className="repo__footer">
        <div className="repo__last-update">
          {`Updated At: ${new Date(repo.updated_at).toLocaleString()}`}
        </div>
        <a href={repo.html_url} className="repo__link">
          <img width={50} src={github} alt="github" />
        </a>
      </div>
    </div>
  )
}
