import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = '';
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
