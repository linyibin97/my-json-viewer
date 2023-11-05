import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/reducer/theme";
import { Button } from "@blueprintjs/core";

const Navigator = () => {
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="bp5-navbar h-10 flex items-center overflow-hidden overflow-x-hidden">
      <div className="mx-1">
        <Button onClick={handleToggleDarkMode}>DarkMode</Button>
      </div>
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="mx-1">{`${index}.JSON`}</div>
      ))}
    </div>
  );
};

export default Navigator;
