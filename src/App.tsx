import useLocalStorage from "use-local-storage";
import "./App.css";
import Toggle from "./components/Toggle";
import Sidenav from "./components/Sidenav";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Sidenav />
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}

export default App;
