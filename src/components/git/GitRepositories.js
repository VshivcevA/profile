import React from 'react'
import repos from '../../moks/repos.json'
import ImgMediaCard from "./ImgMediaCard"
// import Axios2 from "./Axios1";

function GitRepositories() {
  return (
    <div>
      <h2>Тут подгружаются данные с github </h2>
      {/*<Axios2 />*/}
      {
        repos.map((repo) => (
          <ImgMediaCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))
      }

    </div>

  )
}
export default GitRepositories
