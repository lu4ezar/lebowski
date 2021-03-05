import Header from "./Header";
import Router from "./Router";
import Footer from "./Footer";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex"
        }}
      >
        <Router />
      </div>
      <Footer />
    </div>
  );
}
