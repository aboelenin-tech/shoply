import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

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
        .required("First name is required"),

      lastName: Yup.string()
        .required("Last name is required"),

      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("password")],
          "Passwords must match"
        )
        .required("Please confirm your password"),
    }),

    onSubmit: (values) => {
      const users =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];

      const userExists = users.some(
        (user) =>
          user.username === values.username ||
          user.email === values.email
      );

      if (userExists) {
        toast.error("Username or email already exists");
        return;
      }

      const newUser = {
        id: Date.now(),
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
      };

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([...users, newUser])
      );

      toast.success("Account created successfully!");

      navigate("/login");
    },
  });

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <div className="card shadow-sm border-0 p-4">

            <div className="text-center mb-4">
              <h2 className="fw-bold">Create Account</h2>
              <p className="text-muted">
                Join SHOPLY today
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>

              {/* First Name */}
              <div className="mb-3">
                <label className="form-label">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${
                    formik.touched.firstName &&
                    formik.errors.firstName
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your first name"
                />

                {formik.touched.firstName &&
                  formik.errors.firstName && (
                    <div className="invalid-feedback">
                      {formik.errors.firstName}
                    </div>
                  )}
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${
                    formik.touched.lastName &&
                    formik.errors.lastName
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your last name"
                />

                {formik.touched.lastName &&
                  formik.errors.lastName && (
                    <div className="invalid-feedback">
                      {formik.errors.lastName}
                    </div>
                  )}
              </div>

              {/* Username */}
              <div className="mb-3">
                <label className="form-label">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  className={`form-control ${
                    formik.touched.username &&
                    formik.errors.username
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Choose a username"
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
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className={`form-control ${
                    formik.touched.email &&
                    formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
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
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    formik.touched.password &&
                    formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Create a password"
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
                <label className="form-label">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  className={`form-control ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Confirm your password"
                />

                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Create Account
              </button>

            </form>

            <div className="text-center mt-4">
              <span className="text-muted">
                Already have an account?{" "}
              </span>

              <Link to="/login">
                Login
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;