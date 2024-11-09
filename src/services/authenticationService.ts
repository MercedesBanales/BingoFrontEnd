import axios from 'axios';

export const login = async (email: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
    });
    localStorage.setItem('token', response.data.token);
}