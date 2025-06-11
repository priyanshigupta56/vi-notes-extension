'use client';
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {

  const router = useRouter(); // Import useRouter from next/router

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, "Too Short!").required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    }),
    onSubmit: (values, {resetForm}) => {
      axios.post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log("User signed up successfully", response.data);
          toast.success("User signed up successfully!");
          router.push("/login"); // Redirect to login page after successful signup
          resetForm(); // Reset the form after successful signup
        })
        .catch((error) => {
          console.error("Error signing up user", error);
          // Handle error (e.g., show error message)
        });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-black mb-6">📝 Sign Up for Vidio Notes</h2>

        {/* Formik Form */}
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-600 shadow-md transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200">
            <FcGoogle size={20} /> Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200">
            <FaFacebook size={20} className="text-blue-600" /> Sign up with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200">
            <FaApple size={20} className="text-black" /> Sign up with Apple
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-red-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
