import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateLogin } from './Validation';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
const LoginForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState('');
  const navigate =useNavigate();
  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validate={validateLogin}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmissionStatus('Login Successful');
          if (values.rememberMe) {
            localStorage.setItem('rememberedEmail', values.email);
            localStorage.setItem('rememberedPassword', values.password);
            navigate('/dashboard')
            


          }
          setSubmitting(false);

        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" aria-required="true" />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" aria-required="true" />
          <ErrorMessage name="password" component="div" className="error" />

          <label>
            <Field type="checkbox" name="rememberMe" />
            Remember Me
          </label>

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <Link to='/register'>Don't have an account? Click Here</Link>
          {submissionStatus && <div className="success">{submissionStatus}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
