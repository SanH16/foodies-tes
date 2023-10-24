import "./App.css";
import Category from "./components/Category";
import Pages from "./routes/Pages";

function App() {
  return (
    <>
      <div>
        <h1>Foodies</h1>
        <Category />
        <Pages />
      </div>
    </>
  );
}

export default App;
