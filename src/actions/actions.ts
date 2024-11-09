import * as actions from './actionTypes.ts'

export interface Action {
    type: string
    payload: any
}

export interface AuthAction extends Action {
    payload: {
        token: string
    }
}

export const login = (token: string) => {
    return {
        type: actions.LOGIN,
        payload: { token }
    }
}

export const logout = () => {
    return {
        type: actions.LOGOUT
    }
}