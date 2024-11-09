import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string;
    id: string;
}

const initialState: AuthState = {
    token: '',
    id: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{token: string, id: string}>) => {
            const {token, id} = action.payload;
            state.token = token;
            state.id = id;
        },
        logout: (state) => {
            state.token = '';
            state.id = '';
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
