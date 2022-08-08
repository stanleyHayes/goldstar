import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'EuclidCircularB, Gilroy'
    },
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#BBA14f'
        },
        text: {
            primary: '#384054',
            secondary: '#b0b7c9',
            accent: '#BBA14f',
            title: '#384054'
        },
        background: {
            default: 'rgb(228, 235, 241)',
            paper: '#ffffff',
            transparent: 'rgba(45,51,59,0.50)'
        },
        light: {
            secondary: 'rgba(187,161,79,0.3)'
        },
        mode: "light"
    },
    shape: {
        borderRadius: 4
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'EuclidCircularB, Gilroy'
    },
    palette: {
        primary: {
            main: '#121212'
        },
        secondary: {
            main: '#BBA14f'
        },
        text: {
            primary: '#cfd1d6',
            secondary: '#717488',
            accent: '#BBA14f',
            title: '#dcdce0'
        },
        background: {
            default: '#121212',
            paper: '#2d333b',
            transparent: 'rgba(45,51,59,0.50)'
        },
        light: {
            secondary: 'rgba(187,161,79,0.3)'
        },
        mode: 'dark'
    },
    shape: {
        borderRadius: 4
    }
});

export const THEMES = {lightTheme, darkTheme};
