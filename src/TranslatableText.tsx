import { useContext } from "react";
import en from "./en.json";
import ru from "./ru.json";
// const languages = {
//   en: import("./en.json"),
//   ru: import("./ru.json")
// };

// const dictionary = {
//   en,
//   ru
// };

export const TranslatableText = ({ value }) => {
  const dictionary = lang === "en" ? import("./en.json") : import("./ru.json");
  const language = useContext(value);
  return dictionary.language.value;
};
