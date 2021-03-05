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
          flex: 1
        }}
      >
        <Router />
      </div>
      <Footer />
    </div>
  );
}
