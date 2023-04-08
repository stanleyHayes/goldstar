import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'Outfit, EuclidCircularB, Gilroy'
    },
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#BBA14f'
        },
        text: {
            primary: "#0b1d3c",
            secondary: "#9aa2ae",
            accent: '#BBA14f',
            title: '#384054'
        },
        background: {
            default: "#ECECEC",
            paper: "#FFFFFF",
            dark: "#E1E1E1",
            transparent: 'rgba(255,255,255,0.10)'
        },
        light: {
            secondary: 'rgba(187,161,79,0.1)'
        },
        mode: "light"
    },
    shape: {
        borderRadius: 0
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'Outfit, EuclidCircularB, Gilroy'
    },
    palette: {
        primary: {
            main: '#121212'
        },
        secondary: {
            main: '#BBA14f'
        },
        text: {
            primary: "#f4f4f4",
            secondary: "#6a6a6a",
            accent: '#BBA14f',
            title: '#dcdce0'
        },
        background: {
            default: "#1A1A1A",
            paper: "#202020",
            dark: "#121212",
            transparent: 'rgba(0, 0, 0, 0.10)'
        },
        light: {
            secondary: 'rgba(187,161,79,0.1)'
        },
        mode: 'dark'
    },
    shape: {
        borderRadius: 0
    }
});

export const THEMES = {lightTheme, darkTheme};
