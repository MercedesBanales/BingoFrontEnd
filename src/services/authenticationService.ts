import axios from 'axios';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            email,
            password
        });
        localStorage.setItem('token', response.data.token);
    } catch (error) {
        throw new Error('Invalid email or password');
    }

}