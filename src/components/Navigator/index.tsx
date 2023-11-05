import useTheme from "../../common/hooks/useTheme";
import { Switch } from "@blueprintjs/core";

const Navigator = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const handleToggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(!!event?.target?.checked);
  };

  return (
    <div className="bp5-navbar flex items-center overflow-hidden overflow-x-hidden">
      <div className="mx-1">
        <Switch large style={{margin: 0}} checked={isDarkMode} onChange={handleToggleDarkMode}/>
      </div>
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="mx-2">{`${index}.JSON`}</div>
      ))}
    </div>
  );
};

export default Navigator;
