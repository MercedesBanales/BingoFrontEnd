import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email address cannot be empty'),
    password: Yup.string()
      .required('Password cannot be empty'),
  });