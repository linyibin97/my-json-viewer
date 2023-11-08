import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../../store";
import { toggleDarkMode } from "../../store/reducer/theme";

function useTheme() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const setIsDarkMode = useCallback((value: boolean) => {
    dispatch(toggleDarkMode(value));
  }, []);

  return {
    isDarkMode,
    setIsDarkMode,
  };
}

export default useTheme;
