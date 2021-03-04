import React, { useState } from "react";
import Scanner from "./Scanner";
import "./styles.css";

type Mode = "scan" | "manual" | "upload";

export default function App() {
  const [mode, setMode] = useState<Mode | null>(null);
  // const language = useContext(lang);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value as Mode);
  };
  return (
    // <LanguageContext.Provider value={language}>
    <div className="App">
      <header
        style={{
          display: "flex",
          border: "1px solid black",
          flex: 1
        }}
      >
        <h1>Lebowski</h1>
        {/* <select
          style={{
            alignSelf: "center",
            marginLeft: "auto"
          }}
          onChange={(e) => setLang(e.currentTarget.value)}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select> */}
      </header>
      <div>
        <input
          type="radio"
          id="scan"
          name="mode"
          value="scan"
          checked={mode === "scan"}
          onChange={handleChange}
        />
        <label htmlFor="scan">Start scan</label>

        <input
          type="radio"
          id="manual"
          name="mode"
          value="manual"
          checked={mode === "manual"}
          onChange={handleChange}
        />
        <label htmlFor="manual">Enter data manually</label>

        <input
          type="radio"
          id="upload"
          name="mode"
          value="upload"
          checked={mode === "upload"}
          onChange={handleChange}
        />
        <label htmlFor="upload">Upload image</label>
      </div>
      {mode === "scan" && <Scanner />}
      {mode === "manual" && <form />}
      {mode === "upload" && <input type="file" />}
    </div>
  );
}
