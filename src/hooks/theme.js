import React, { createContext, useContext, useState, useCallback } from 'react';

import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';


const ThemeContext = createContext({})

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(light);

    const toggleTheme = useCallback(() => {
        if (theme.title === 'light') {
            setTheme(dark);
        }
        else if (theme.title === 'dark') {
            setTheme(light);
        }
    }, [theme]);

    const changeThemeByName = useCallback((value) => {

        if (value === 'light') {
            setTheme(light);
        }
        else if (value === 'dark') {
            setTheme(dark);
        }

    }, [theme])

    return (
        <ThemeContext.Provider
            value={{ toggleTheme, theme, changeThemeByName }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;