import { useContext } from "react";
import { ColorModeContext } from "../../context/themeColorMode";
import { ButtonContainer } from "./style";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ColorModeButton = () => {
  const { colorMode, mode } = useContext(ColorModeContext);

  return (
    <ButtonContainer>
      <button onClick={colorMode.toggleColorMode} className="button">
        {mode === "light" ? (
          <MdOutlineDarkMode className="button_icon" />
        ) : (
          <MdOutlineLightMode className="button_icon" />
        )}
      </button>
    </ButtonContainer>
  );
};

export default ColorModeButton;
