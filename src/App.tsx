import Main from "./components/Main";
import Navigator from "./components/Navigator";
// import { useSelector } from "react-redux";
// import { RootState } from "./store";

function App() {
  // const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <div>
      <Navigator />
      <Main />
    </div>
  );
}

export default App;
