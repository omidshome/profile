import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Converter({ text, language }) {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const translatorFunction = async () => {
      const { data } = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            q: text,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };

    translatorFunction();
    console.log(translatedText);
  }, [text, language]);

  return (
    <Stack sx={{ textAlign: "center", paddingBottom: "2.5rem" }}>
      <Typography variant="h4" component="p" fontFamily={"Vazir"}>
        {translatedText}
      </Typography>
    </Stack>
  );
}

export default Converter;
