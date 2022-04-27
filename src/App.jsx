import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/MainPage/Main'
import Repo from './pages/RepoPage/RepoCard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repo/:owner/:repoName" element={<Repo />} />
    </Routes>
  )
}
