import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import CvRu from "./CvRu";
// import CvEn from "./CvEn";
import styled from "styled-components";
import data from "./dic.json";

export default function Cv() {
  //todo init
  const [lang, setLang] = useState("en");
  function LangSelector() {
    return (
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="lang-label">Language</InputLabel>
        <Select
          labelId="lang-label"
          id="lang"
          value={lang}
          label="Language"
          onChange={(event) => {
            setLang(event.target.value);
          }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Russian</MenuItem>
        </Select>
      </FormControl>
    );
  }
  const DateIntervals = styled.p`
    font-weight: 200;
  `;
  const Paragraph = styled.li`
    margin: 20px 0;
  `;
  // const lang = "en";
  function About() {
    return (
      <article>
        <h1>{data.person.name[lang]}</h1>
        <p>{data.person.location[lang]}</p>
        <p>
          Email:&nbsp;
          <a href={"mailto:" + data.person.contacts.email}>
            {data.person.contacts.email}
          </a>
        </p>
        <p>
          Phone:&nbsp;
          <a href="tel:+35794425213">{data.person.contacts.phone}</a>
        </p>
        <p>
          <a href={data.person.contacts.telegram}>Telegram</a>&nbsp;|&nbsp;
          <a href={data.person.contacts.whatsapp}>WhatsApp</a>
        </p>
        <p>{data.person.about[lang]}</p>
      </article>
    );
  }
  function Educational() {
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
  const JobTitle = styled.p`
    font-family: Lato, sans-serif;
  `;

  function Experience() {
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
  function Skills() {
    return (
      <>
        <h2>{data.skills.title[lang]}</h2>
        <ul>
          {data.skills.list.map((i, index) => {
            return <li key={index}>{i[lang] ? i[lang] : i}</li>;
          })}
        </ul>
      </>
    );
  }

  return (
    <>
      <LangSelector />
      <About />
      <Experience />
      <Educational />
      <Skills />
    </>
  );
}
