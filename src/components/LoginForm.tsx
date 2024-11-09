import React from 'react';
import { Formik, Form} from 'formik';
import Input from './Input.tsx';
import { LoginSchema } from '../schemas/LoginSchema.tsx';
import { LoginValue } from '../types/LoginValue.tsx';
import * as authenticationService from '../services/authenticationService.ts';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values: { email: string, password: string }) => {
        await authenticationService.login(values.email, values.password);
        navigate('/home');
    }

    return (
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
                <button className="text-white bg-violet-400 rounded-3xl px-12 py-2 w-fit shadow-md hover:font-semibold hover:shadow-lg" type="submit">Login</button>
            </Form>
            }
        </Formik>
    )
}

export default LoginForm;