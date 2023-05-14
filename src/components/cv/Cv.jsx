import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import About from "./components/About";
import Experience from "./components/Experience";
import Educational from "./components/Educational";
import Skills from "./components/Skils";

export default function Cv() {
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

  return (
    <>
      <LangSelector />
      <About lang={lang} />
      <Experience lang={lang} />
      <Educational lang={lang} />
      <Skills lang={lang} />
    </>
  );
}
