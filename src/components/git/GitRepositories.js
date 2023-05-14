import React, { useEffect, useState } from "react";
import ImgMediaCard from "./ImgMediaCard";

function GitRepositories() {
  const [gitRepos, setGitRepos] = useState([]);

  function upload() {
    if (!gitRepos.length) {
      fetch("https://api.github.com/users/VshivcevA/repos")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // sessionStorage.setItem("GitRepos", JSON.stringify(data));
          setGitRepos(data);
        });
    }
  }
  useEffect(() => {
    upload();
  }, []);

  function RenderRepos({ gitRepos }) {
    return (
      <div>
        <ImgMediaCard
          name={"React"}
          description={"This portfolio website is powered by React"}
        />
        <ImgMediaCard
          name={"CodeWars"}
          description={"Challenges from codewars.com"}
          giturl={"https://github.com/VshivcevA/CodeWars"}
        />
        {gitRepos
          .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
          .map((repo) => {
            if (repo.homepage) {
              return (
                <ImgMediaCard
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  giturl={repo.html_url}
                  depurl={repo.homepage}
                  topics={repo.topics}
                />
              );
            }
          })}
      </div>
    );
  }
  return <RenderRepos gitRepos={gitRepos} />;
}
export default GitRepositories;
