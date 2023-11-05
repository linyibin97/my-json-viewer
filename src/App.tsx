import Main from "./components/Main";
import Navigator from "./components/Navigator";
import useTheme from "./common/hooks/useTheme";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`flex flex-col w-screen h-screen${
        isDarkMode ? " bp5-dark" : ""
      }`}
    >
      <Navigator />
      <Main />
    </div>
  );
}

export default App;
