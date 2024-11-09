import axios from 'axios';

export const login = async (email: string, password: string) : Promise<{token: string, id: string}> => {
    const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
    });
    return {token: response.data.token, id: response.data.id};
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