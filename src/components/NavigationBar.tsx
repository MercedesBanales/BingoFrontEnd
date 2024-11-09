import React from 'react';
import * as authenticationService from '../services/authenticationService.ts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store.ts';
import { logout } from '../reducers/authSlice.ts';
import { useNavigate } from 'react-router-dom';

export interface Props {
    onError: (error: string) => void
}

const NavigationBar = ({ onError }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);

    const handleLogout = async () => {
        try {
            console.log(token);
            await authenticationService.logout(token);
            dispatch(logout());
            navigate('/login');
        } catch (error: any) {
            onError(error.message);
        }
    }

    return (
        <div className="flex justify-end items-center px-4 py-2 bg-indigo-100">
            <button className="text-slate py-2 px-4 hover:font-semibold font-sans" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default NavigationBar;