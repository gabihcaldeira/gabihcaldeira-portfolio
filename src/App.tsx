import { useContext } from "react";
import ColorModeProvider, { ColorModeContext } from "./context/themeColorMode";
import Home from "./pages/home";
import Global from "./styles/Global";

function App() {
  const { theme } = useContext(ColorModeContext);
  return (
    <ColorModeProvider>
      <Global theme={theme} />
      <Home />
    </ColorModeProvider>
  );
}

export default App;
