import { Mode } from "./Home";

const RadioGroup = ({ onChange, mode }: { onChange: any; mode: Mode }) => {
  return (
    <div className="radio-buttons-wrapper" onClick={onChange}>
      <input
        type="radio"
        className="radio-button"
        name="mode"
        value="scan"
        id="scan"
        checked={mode === "scan"}
        onChange={onChange}
      />
      <label htmlFor="scan">Scan</label>
      <input
        type="radio"
        className="radio-button"
        name="mode"
        value="manual"
        id="manual"
        checked={mode === "manual"}
        onChange={onChange}
      />
      <label htmlFor="manual">Manual</label>
      <input
        type="radio"
        className="radio-button"
        name="mode"
        value="upload"
        id="upload"
        checked={mode === "upload"}
        onChange={onChange}
      />
      <label htmlFor="upload">Upload</label>
    </div>
  );
};

export default RadioGroup;
