import {createContext, Dispatch, SetStateAction} from 'react';

type ThemeModeInterface = { theme: "light" | "dark"; toggleTheme: Dispatch<SetStateAction<"dark"|"light">>};

const ThemeContext = createContext<ThemeModeInterface>({} as ThemeModeInterface);

export default ThemeContext;