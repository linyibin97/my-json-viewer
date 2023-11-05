import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleDarkMode } from "../../store/reducer/theme";
import { Switch } from "@blueprintjs/core";

const Navigator = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const handleToggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleDarkMode(!!event?.target?.checked));
  };

  return (
    <div className="bp5-navbar flex items-center overflow-hidden overflow-x-hidden">
      <div className="mx-1">
        <Switch large style={{margin: 0}} label="Dark" checked={isDarkMode} onChange={handleToggleDarkMode}/>
      </div>
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="mx-2">{`${index}.JSON`}</div>
      ))}
    </div>
  );
};

export default Navigator;
