import React from 'react';
import { Formik, Form} from 'formik';
import Input from './Input.tsx';
import { LoginSchema } from '../schemas/LoginSchema.tsx';
import { LoginValue } from '../types/LoginValue.tsx';
import * as authenticationService from '../services/authenticationService.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authSlice.ts';


interface Props {
    setError: (error: string) => void
}

const LoginForm = ( { setError } : Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (values: { email: string, password: string }) => {
        try {
            const token = await authenticationService.login(values.email, values.password);
            dispatch(login(token));
            navigate('/home');
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
        <Formik
            initialValues={{ email: '', password: '',}}
            validationSchema={LoginSchema}
            onSubmit={(
                values: { email: string, password: string }) => {
                handleSubmit(values as { email: string, password: string });
            }}
        >
            {
                <Form className="flex flex-col items-center w-2/4 gap-8">
                <div className="flex flex-col w-full gap-4">
                    <Input<LoginValue> name="email" label="" type="email" placeholder="johndoe@hotmail.com" />
                    <Input<LoginValue> name="password" label="" type="password" placeholder='*******' />
                </div>
                <button className="text-white bg-indigo-600 rounded-3xl px-8 py-2 w-fit shadow-md hover:font-semibold hover:shadow-lg" type="submit">Login</button>
            </Form>
            }
        </Formik>
        </>
        
    )
}

export default LoginForm;