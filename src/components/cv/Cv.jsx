import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CvRu from "./CvRu";
import CvEn from "./CvEn";

export default function Cv() {
  //todo init
  const [lang, setLang] = useState("ru");
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
      {lang === "en" ? <CvEn /> : <CvRu />}
    </>
  );
}
