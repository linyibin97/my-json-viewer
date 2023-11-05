import useTheme from "../../common/hooks/useTheme";
import { Switch } from "@blueprintjs/core";

const LeftContent = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const handleToggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(!!event?.target?.checked);
  };

  return (
    <div className="h-full flex items-center">
      <Switch
        large
        style={{ margin: 0 }}
        checked={isDarkMode}
        onChange={handleToggleDarkMode}
      />
    </div>
  );
};

export default LeftContent;
