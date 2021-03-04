import Navbar from "./Navbar";
import "./styles.scss";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        border: "1px solid black",
        flex: 1
      }}
    >
      <h1>Lebowski</h1>
      <Navbar />
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
  );
};

export default Header;
