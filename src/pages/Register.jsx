import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),

      lastName: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),

      username: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),

      confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf(
          [Yup.ref("password")],
          "Passwords must match"
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const getInputClass = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return "form-control is-invalid";
    }

    if (formik.touched[field] && !formik.errors[field]) {
      return "form-control is-valid";
    }

    return "form-control";
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">

              {/* Header */}
              <div className="text-center mb-4">
                <i className="bi bi-bag-heart-fill text-primary fs-1"></i>

                <h2 className="fw-bold mt-2">
                  Create Account
                </h2>

                <p className="text-muted">
                  Create your Shoply account
                </p>
              </div>

              <form onSubmit={formik.handleSubmit}>

                {/* First Name + Last Name */}
                <div className="row">

                  {/* First Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className={getInputClass("firstName")}
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.firstName &&
                      formik.errors.firstName && (
                        <div className="invalid-feedback">
                          {formik.errors.firstName}
                        </div>
                      )}
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className={getInputClass("lastName")}
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.lastName &&
                      formik.errors.lastName && (
                        <div className="invalid-feedback">
                          {formik.errors.lastName}
                        </div>
                      )}
                  </div>

                </div>

                {/* Username */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    name="username"
                    placeholder="Choose a username"
                    className={getInputClass("username")}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.username &&
                    formik.errors.username && (
                      <div className="invalid-feedback">
                        {formik.errors.username}
                      </div>
                    )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={getInputClass("email")}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.email &&
                    formik.errors.email && (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    className={getInputClass("password")}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.password &&
                    formik.errors.password && (
                      <div className="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className={getInputClass("confirmPassword")}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Create Account
                </button>

              </form>

              {/* Login */}
              <div className="text-center mt-4">
                <span className="text-muted">
                  Already have an account?{" "}
                </span>

                <Link
                  to="/login"
                  className="text-primary fw-semibold"
                >
                  Login
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;