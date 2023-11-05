import useTheme from "../../common/hooks/useTheme";
import { Switch } from "@blueprintjs/core";

const Main = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const handleToggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(!!event?.target?.checked);
  };

  return (
    <div className="bp5-card flex-1">
      <h1 className="bp5-heading {{.modifier}}">H1 heading</h1>
      <h2 className="bp5-heading {{.modifier}}">H2 heading</h2>
      <h3 className="bp5-heading {{.modifier}}">H3 heading</h3>
      <h4 className="bp5-heading {{.modifier}}">H4 heading</h4>
      <h5 className="bp5-heading {{.modifier}}">H5 heading</h5>
      <h6 className="bp5-heading {{.modifier}}">H6 heading</h6>
      <div className="mx-1">
        <Switch large style={{margin: 0}} checked={isDarkMode} onChange={handleToggleDarkMode}/>
      </div>
    </div>
  );
};

export default Main;
