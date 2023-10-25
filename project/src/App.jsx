import "./App.css";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./routes/Pages";
import logo from "./assets/icon/foodies-icon-new.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Foodies Logo" />
        </Link>
        <Search />
        <Category />
        <Pages />
      </div>
    </>
  );
}

export default App;
