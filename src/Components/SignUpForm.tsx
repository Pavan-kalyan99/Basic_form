import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateSignUp, passwordStrength } from './Validation';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState('');
  const navigate = useNavigate();


  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validate={validateSignUp}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmissionStatus('Sign Up Successful');
          localStorage.setItem('rememberedEmail', values.email);
          localStorage.setItem('rememberedPassword', values.password);


          resetForm();
          setSubmitting(false);
          navigate('/dashboard'); 

        }, 500);

      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" aria-required="true" />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" aria-required="true" />
          <div>Password Strength: {passwordStrength(values.password)}</div>
          <ErrorMessage name="password" component="div" className="error" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" aria-required="true" />
          <ErrorMessage name="confirmPassword" component="div" className="error" />

          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
          <Link to='/login'>Already have an account? Click Here</Link>

          {submissionStatus && <div className="success">{submissionStatus}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
