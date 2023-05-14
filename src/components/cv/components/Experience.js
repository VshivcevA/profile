import data from "../data.json";
import React from "react";
import styled from "styled-components";

const JobTitle = styled.p`
  font-family: Lato, sans-serif;
`;
const Paragraph = styled.li`
  margin: 20px 0;
`;
export default function Experience({ lang }) {
  return (
    <>
      <h2>{data.experience.title[lang].toUpperCase()}</h2>
      <ul>
        {data.experience.list.map((i, index) => {
          return (
            <Paragraph key={index}>
              <p>{i.date[lang]}</p>
              <JobTitle>{i.position[lang]}</JobTitle>
              <p>{i.company[lang]}</p>
              <ul>
                {i.employments.map((i, index) => {
                  return <li key={index}>{i[lang]}</li>;
                })}
              </ul>
            </Paragraph>
          );
        })}
      </ul>
    </>
  );
}
