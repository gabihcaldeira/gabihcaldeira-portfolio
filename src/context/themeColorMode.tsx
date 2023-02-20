import { createContext, ReactNode, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

interface IColorModeProviderProps {
  children: ReactNode;
}

interface IColorModeContext {
  colorMode: {
    toggleColorMode: () => void;
  };
  mode: string;
  theme: {
    mode: "light" | "dark";
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        main: string;
        nav: string;
        card: string;
      };
      text: {
        main: string;
        grey: {
          light: string;
          dark: string;
        };
      };
    };
    fonts: {
      main: string;
      highlight: string;
    };
    shadows: {
      box: string;
    };
  };
}

export const ColorModeContext = createContext<IColorModeContext>(
  {} as IColorModeContext
);

const ColorModeProvider = ({ children }: IColorModeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = {
    mode,
    colors: {
      primary:
        mode === "light"
          ? {
              main: "#6624a9",
              light: "#9953dc",
              dark: "#320079",
            }
          : {
              main: "#f8bbd0",
              light: "#ffedff",
              dark: "#c38a9e",
            },
      secondary:
        mode === "light"
          ? {
              main: "#f8bbd0",
              light: "#ffedff",
              dark: "#c38a9e",
            }
          : {
              main: "#6624a9",
              light: "#9953dc",
              dark: "#320079",
            },
      background: {
        main:
          mode === "light"
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(22, 22, 22, 0.9)",
        nav: mode === "light" ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        card:
          mode === "light"
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(22, 22, 22, 0.7)",
      },
      text: {
        main: mode === "light" ? "black" : "white",
        grey: { light: "#7f7f7f", dark: "#3e3e3e" },
      },
    },
    fonts: {
      main: "Quicksand",
      highlight: "Amatic SC",
    },
    shadows: {
      box: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, mode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
