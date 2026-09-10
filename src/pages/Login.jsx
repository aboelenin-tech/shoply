
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuthStore from "../store/authStore";

function Login() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required"),

      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),

    onSubmit: async (values) => {
      const result = await login(
        values.username,
        values.password
      );

      if (result.success) {
        navigate("/");
      }
    },
  });

  return (
    <div className="page-animation">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">

              {/* Title */}
              <div className="text-center mb-4">
                <i className="bi bi-bag-heart-fill text-primary fs-1"></i>

                <h2 className="fw-bold mt-2">
                  Welcome Back
                </h2>

                <p className="text-muted">
                  Login to your Shoply account
                </p>
              </div>

              {/* API Error */}
              {error && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>

                {/* Username */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
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
                    placeholder="Enter your username"
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

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
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
                    placeholder="Enter your password"
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

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Logging in...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Login
                    </>
                  )}
                </button>

              </form>

              {/* Register */}
              <div className="text-center mt-4">
                <span className="text-muted">
                  Don't have an account?{" "}
                </span>

                <Link
                  to="/register"
                  className="text-primary fw-semibold"
                >
                  Register
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;