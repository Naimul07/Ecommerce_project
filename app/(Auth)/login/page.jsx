'use client'
import { useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import Link from 'next/link'
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
// import googlelogo from "../sessionAuth/logo/google.png"
import { useRouter } from 'next/navigation'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorBackend, setErrorBackend] = useState("");
  const router = useRouter()

  async function onSubmit(data) {

    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get('/Auth/sanctum/csrf-cookie');
      const response = await axios.post('/Auth/login',
        {
          email: data.email,
          password: data.password
        },
        {
          headers: {
            'Accept': 'application/json',
          }
        }
      );
      console.log(response);
      // setAuth(response.data.token,response.data.user);
      toast.success(response.data.message);
      router.push('/');
    }
    catch (error) {
      setErrorBackend(error.response.data.message);
    //   console.log(error);
    //   toast.error(error.response.data.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="md:border md:shadow-xl rounded-lg min-h-screen lg:w-3/5 md:w-3/4 w-full mx-auto flex items-center justify-center">
          <div className="lg:w-3/5 md:w-2/3 w-full">
            <h1 className="text-2xl font-bold text-center my-6">Login</h1>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mb-2">

              <div className="mx-6">
                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                  <input type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Enter a valid email address"
                      }
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                  {errors.email && <span className="text-red-500 text-xs mt-1 input-error">{errors.email.message}</span>}
                </div>

                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password"
                    {...register("password", { required: "Password is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                  {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                </div>

                <button type="submit" className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">{loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={20} /> // Spinner
                ) : (
                  'Submit'
                )}</button>

                {errorBackend && <span className="text-red-500 text-center font-bold mt-1 input-error">{errorBackend}</span>}

              </div>

            </form>
            <Link href='/password-reset/email' className="text-blue-600 mx-6 pt-4">Forget Password?</Link>

            <div className="flex justify-center my-6">
              <Link
              href='/Auth/auth/google/redirect'
                className="flex items-center justify-center px-4 py-2 w-72 border text-black border-gray-300 rounded-lg bg-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {/* <FaGoogle className="w-6 h-6 mr-3 text-blue-500" /> Google Icon */}
                {/* <img
                  src={googlelogo}
                  alt="Google logo"
                  className="w-6 h-6 mr-3"
                /> */}
                <span className="font-medium text-sm">Sign in with <span className="font-bold">Google</span></span>
              </Link>
            </div>

            <p className="text-center mt-4">
              Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login