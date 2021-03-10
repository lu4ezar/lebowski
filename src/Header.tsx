import Login from "./Login";
import Navbar from "./Navbar";
import "./styles.scss";

const Header = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <h1>Lebowski</h1>
        <Navbar />
        <Login />
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
    </div>
  );
};

export default Header;
