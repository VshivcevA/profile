import React, { useEffect, useState } from "react";
import ImgMediaCard from "./ImgMediaCard";

let sessionStorageGitRepos = JSON.parse(sessionStorage.getItem("GitRepos"));

function GitRepositories() {
  let [gitRepos, setGitRepos] = useState(
    sessionStorageGitRepos ? sessionStorageGitRepos : []
  );

  function upload() {
    if (!gitRepos.length) {
      fetch("https://api.github.com/users/VshivcevA/repos")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          sessionStorage.setItem("GitRepos", JSON.stringify(data));
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
          description={"Данный сайт-портфолио сделан на базовом React"}
        />
        <ImgMediaCard
          name={"CodeWars"}
          description={"Задачи на Vanilla JS c codewars.com"}
          giturl={"https://github.com/VshivcevA/CodeWars"}
        />

        {/* eslint-disable-next-line array-callback-return */}
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
