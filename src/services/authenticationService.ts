import axios from 'axios';

export const login = async (email: string, password: string) : Promise<string> => {
    const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
    });
    return response.data.token;
}

export const logout = async (token: string) => {
    await axios.post(
        'http://localhost:3000/api/logout', 
        {}, 
        {
            headers: {
                'authorization': token, 
                'Content-Type': 'application/json',
            },
        }
    );
}