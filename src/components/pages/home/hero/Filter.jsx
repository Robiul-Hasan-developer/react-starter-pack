import React from "react";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import BannerStyle from "./Hero.module.css";
import { ToastContainer, toast } from "react-toastify";

const Filter = () => {
  const formik = useFormik({
    initialValues: {
      location: "",
      propertyType: "",
      priceRange: "",
    },

    validationSchema: yup.object({
      location: yup.string().required().min(3, 'Too Short! Must be at least 3 characters').max(100, 'Too Long!'),
      propertyType: yup.string().required('Property Type is a required field').max(40, 'Too Long!'),
      priceRange: yup.number().required('Price Range is a required field').positive().integer(),
    }),

    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      resetForm();
      toast.success("You Searched Successfully.", {
        theme: "colored",
        autoClose: 5000,
      });
      // console.log(values);
    },
  });

  return (
    <>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit} className={BannerStyle.filterForm}>
        <div className="form-group mb-">
          <label htmlFor="location" className="form--label d-block">
            City/Street
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="location"
            value={formik.values.location}
            className={`form--control form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            id="location"
            placeholder="Location"
          />
          {formik.touched.location && formik.errors.location && (
            <span className="invalid-feedback mt-1">
              {formik.errors.location}
            </span>
          )}
        </div>
        <div className="form-group mb-">
          <label htmlFor="propertyType" className="form--label d-block">
            Property Type
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="propertyType"
            value={formik.values.propertyType}
            className={`form--control form-control ${
              formik.touched.propertyType && formik.errors.propertyType ? "is-invalid" : ""
            }`}
            id="propertyType"
            placeholder="Property Type"
          />
          {formik.touched.propertyType && formik.errors.propertyType && (
            <span className="invalid-feedback mt-1">
              {formik.errors.propertyType}
            </span>
          )}
        </div>
        <div className="form-group mb-">
          <label htmlFor="priceRange" className="form--label d-block">
            Price Range
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="priceRange"
            value={formik.values.priceRange}
            className={`form--control form-control ${
              formik.touched.priceRange && formik.errors.priceRange ? "is-invalid" : ""
            }`}
            id="priceRange"
            placeholder="Price Range"
          />
          {formik.touched.priceRange && formik.errors.priceRange && (
            <span className="invalid-feedback mt-1">
              {formik.errors.priceRange}
            </span>
          )}
        </div>
        <div className="form-group mb-">
          <label className="form--label d-block">Advance Filter</label>
          <button type="submit" className="btn btn--base w-100">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
