import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Subscription = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="subscribe-form input-group">
        <input
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          value={formik.values.email}
          className={`form--control form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
          placeholder="Enter Email Address"
        />
        <button type="submit" className="btn btn--base input-group-text">
          Subscribe
        </button>
      </form>
        {formik.touched.email && formik.errors.email && (
          <span className="invalid-feedback mt-1">{formik.errors.email}</span>
        )}
        {formik.touched.name && formik.errors.name && (
          <span className="invalid-feedback mt-1">{formik.errors.name}</span>
        )}
    </>
  );
};

export default Subscription;
