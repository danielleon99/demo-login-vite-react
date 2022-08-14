import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { RootState } from '../../app/store/slices';

export type UserState = {
    user: boolean;
};
//
export const initialState: UserState = {
    user: false,
};
// A slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<boolean>) => {
            state.user = action.payload;
        },
        logout: (state: UserState, action: PayloadAction<boolean>) => {
            state.user = action.payload;
        },
    },
});

// Actions generated from the slice
export const {
    login,
    logout,
} = userSlice.actions;

// export user selector to get the slice in any component
export const userSelector = (state: RootState) => state.user;
// export The reducer
const userReducer = userSlice.reducer;
export default userReducer;


