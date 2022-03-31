import React from 'react';
import { useFormik } from 'formik';
import './Form.css';
import arrow from '../../images/icon-arrow.svg';
import error from '../../images/icon-error.svg';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please provide a valid email';
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className='hero-form' onSubmit={formik.handleSubmit}>
      <div
        className={
          formik.errors.email
            ? 'hero-input-wrapper hero-input-wrapper__error '
            : 'hero-input-wrapper'
        }
      >
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='hero-input'
          placeholder='Email Address'
        />
        {formik.errors.email && (
          <img src={error} alt='error icon' className='hero-error-icon' />
        )}
        <button className='hero-submit' type='submit'>
          <img src={arrow} alt='arrow icon' />
        </button>
      </div>
      <p
        className={
          formik.errors.email
            ? 'hero-form-error-message'
            : 'hero-form-error-message hero-form-error-message__hidden'
        }
      >
        {formik.errors.email}
      </p>
    </form>
  );
};

export default Form;
