import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import authReducer from "../features/auth/auth-slice";

import {CONSTANTS} from "../../utils/constants";


const themeVariant = localStorage.getItem(CONSTANTS.GOLD_STAR_THEME_VARIANT) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_THEME_VARIANT)) : 'dark';

const viewMode = localStorage.getItem(CONSTANTS.GOLD_STAR_VIEW_MODE) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_VIEW_MODE)) : 'grid';

const token = localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_TOKEN) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_TOKEN)) : null;

const authData = localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_DATA) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_DATA)) : null;


const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false, viewMode},
        auth: {
            token,
            authData
        }
    }
});

export default store;
