import data from "../data.json";
import React from "react";
import styled from "styled-components";

const DateIntervals = styled.p`
  font-weight: 200;
`;
export default function Educational({ lang }) {
  return (
    <>
      <h2>{data.education.title[lang].toUpperCase()}</h2>
      <ul>
        {data.education.list.map((i, index) => {
          return (
            <div key={index}>
              <DateIntervals>{i.date[lang]}</DateIntervals>
              <div>
                <p>{i.des[lang]}</p>
                <ul>
                  {i.list?.map((j, index) => {
                    return <li key={index}>{j[lang]}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}
