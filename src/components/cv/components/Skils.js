import data from "../data.json";
import React from "react";

export default function Skills({ lang }) {
  return (
    <article>
      <h2>{data.skills.title[lang]}</h2>
      <ul>
        {data.skills.list.map((i, index) => {
          return <li key={index}>{i[lang] ? i[lang] : i}</li>;
        })}
      </ul>
    </article>
  );
}
