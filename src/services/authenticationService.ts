import api from '../interceptors/exception_interceptor.ts';

export const login = async (email: string, password: string): Promise<{token: string, id: string}> => {
    try {
      const response = await api.post('login', {
        email,
        password,
      });
      return { token: response.data.token, id: response.data.id };
    } catch (error) {
      throw new Error(error.response.data); 
    }
  };

  export const logout = async (token: string) => {
    try {
      await api.post('logout', 
        {}, 
        {
          headers: {
            'authorization': token,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      throw new Error(error.response.data); 
    }
  };