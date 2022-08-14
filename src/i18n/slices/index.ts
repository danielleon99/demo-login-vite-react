import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { i18n } from '..';

import { RootState } from '../../modules/app/store/slices';

interface ILangState {
    selectedLang: "es-ES" | "en-EN",   
}

const initialState: ILangState = {
    selectedLang: "es-ES",
} 

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        changeLang: (state: ILangState, action: PayloadAction<"es-ES" | "en-EN">) => {
            i18n.locale = action.payload;
            state.selectedLang = action.payload;
        }
    }
});

export const { 
    changeLang
} = langSlice.actions;

export const langReducer = langSlice.reducer;

export const langSelector = (state: RootState) => state.lang ;