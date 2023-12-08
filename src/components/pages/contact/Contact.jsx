import React, { useState } from "react";
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import Header from "../../common/header/Header";
import Breadcrumb from "../../common/Breadcrumb";
import image from "../../../assets/Images/thumbs/contact.jpg";
import Footer from "../../common/footer/Footer";
import ContactCss from "./Contact.module.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    //   Validate by Yup
    validationSchema: yup.object({
      name: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
      email: yup.string().email("Your Email is not valid! Provide valid email").required(),
      subject: yup.string().required(),
      message: yup .string().min(5, "message must have minimum 5 characters").required(),
      date: yup.date().default(() => new yup.date()).required(),
    }),

    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      resetForm({ values: "" });
      toast.success("Congratulations! You Have Submitted Successfully.", {
        theme: "colored",
      });
    },
  });

  //   Render Errors Code Start
  const renderNameError = formik.touched.name && formik.errors.name && (
    <span className="text-danger">{formik.errors.name}</span>
  );
  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span className="text-danger">{formik.errors.email}</span>
  );
  const renderSubjectError = formik.touched.subject &&
    formik.errors.subject && (
      <span className="text-danger">{formik.errors.subject}</span>
    );
  const renderDateError = formik.touched.date && formik.errors.date && (
    <span className="text-danger">{formik.errors.date}</span>
  );
  const renderMessageError = formik.touched.message &&
    formik.errors.message && (
      <span className="text-danger">{formik.errors.message}</span>
    );
  //   Render Errors Code End

  return (
    <>
      <Header />
      <Breadcrumb
        title="Get Helps & Friendly Support"
        subtitle="Contact Us"
        cover={image}
      />
      <ToastContainer />

      {/* ======================== Form Code & Error messages are in the Method ============== */}

      <section className={`${ContactCss.contactSection} py-120`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <form
              onSubmit={formik.handleSubmit}
              className={`${ContactCss.contactForm} p-lg-5 p-4 shadow-lg rounded`}
            >
              <h5 className="mb-3">Fillup The Form</h5>
              <div className="row gy-4">

                <div className="col-sm-6">
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="name"
                    value={formik.values.name}
                    className={`form--control form-control ${
                      formik.touched.name && formik.errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Name"
                  />
                  {renderNameError}
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                    value={formik.values.email}
                    className={`form--control form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Email"
                  />
                  {renderEmailError}
                </div>

                <div className="col-sm-12">
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    name="subject"
                    className={`form--control form-control ${
                      formik.touched.subject && formik.errors.subject
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Subject"
                  />
                  {renderSubjectError}
                </div>
                <div className="col-sm-12">
                  <input
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                    name="date"
                    className={`form--control form-control ${
                      formik.touched.date && formik.errors.date
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Subject"
                  />
                  {renderDateError}
                </div>
                <div className="col-sm-12">
                  <textarea
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message} // Use formik.values for the value
                    name="message"
                    className={`form--control form-control ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Message"
                  />
                  {renderMessageError}
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn--base">
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== Same Form Code But Error messages are not in the Method ============== */}
      {/* <section className={`${ContactCss.contactSection} py-120`}>
        <div className="container">
            <form onSubmit={formik.handleSubmit} className={`${ContactCss.contactForm} p-lg-5 p-4 shadow-lg rounded`}>
                <h5 className='mb-3'>Fillup The Form</h5>
                <div className="row gy-4">
                    <div className="col-sm-6">
                        <input type="text" onChange={formik.handleChange} value={formik.values.name} name='name' className='form--control' placeholder='Name' />
                        {formik.touched.name && formik.errors.name && <span className="text-danger">{formik.errors.name}</span>}
                    </div>
                    <div className="col-sm-6">
                        <input type="email" onChange={formik.handleChange} value={formik.values.email} name='email' className='form--control' placeholder='Email' />
                        {formik.touched.email && formik.errors.email && <span className="text-danger">{formik.errors.email}</span>}
                    </div>
                    <div className="col-sm-12">
                        <input type="text" onChange={formik.handleChange} value={formik.values.subject} name='subject' className='form--control' placeholder='Subject' />
                        {formik.touched.subject && formik.errors.subject && <span className="text-danger">{formik.errors.subject}</span>}
                    </div>
                    <div className="col-sm-12">
                        <input type="date" onChange={formik.handleChange} value={formik.values.date} name='subject' className='form--control' placeholder='Subject' />
                        {formik.touched.date && formik.errors.date && <span className="text-danger">{formik.errors.date}</span>}
                    </div>
                    <div className="col-sm-12">
                        <textarea
                        onChange={formik.handleChange}
                        value={formik.values.message} // Use formik.values for the value
                        name='message'
                        className='form--control'
                        placeholder='Message'
                    />
                    {formik.touched.message && formik.errors.message && <span className="text-danger">{formik.errors.message}</span>}
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" className='btn btn--base'>Submit Request</button>
                    </div>
                </div>
            </form>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Contact;
