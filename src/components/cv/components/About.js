import data from "../data.json";
import React from "react";

export default function About({ lang }) {
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
        <a href={"tel:" + data.person.contacts.phone}>
          {data.person.contacts.phone}
        </a>
      </p>
      <p>
        <a href={data.person.contacts.telegram}>Telegram</a>&nbsp;|&nbsp;
        <a href={data.person.contacts.whatsapp}>WhatsApp</a>
      </p>
      <p>{data.person.about[lang]}</p>

      <p>{data.person.about[lang]}</p>
    </article>
  );
}
