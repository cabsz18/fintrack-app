import React, { ReactNode, useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({ theme: "dark", setTheme: () => {} });

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
