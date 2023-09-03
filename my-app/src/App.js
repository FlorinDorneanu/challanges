import css from "./App.module.css";
import Content from "./components/Content";
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarSimple />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;