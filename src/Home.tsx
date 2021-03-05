import React, { useState } from "react";
import Scanner from "./Scanner";
import Form from "./Form";

enum Mode {
  Scan = "scan",
  Manual = "manual",
  Upload = "upload"
}

const Home = () => {
  const [mode, setMode] = useState<Mode | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value as Mode);
  };
  return (
    <>
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
      {mode === "manual" && <Form />}
      {mode === "upload" && <input type="file" />}
    </>
  );
};

export default Home;
