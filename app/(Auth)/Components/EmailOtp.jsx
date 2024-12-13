'use client'
import { useForm } from "react-hook-form"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function EmailOtp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const router = useRouter();
    async function onSubmit(data) {
        try {
            axios.defaults.withCredentials = true;
            axios.defaults.withXSRFToken = true;
            await axios.get('http://localhost:8000/sanctum/csrf-cookie');
            const response = await axios.post('http://localhost:8000/verify-email', {
                otp: data.otp
            }, {
                headers: {
                    'Accept': 'application/json',
                },
            })
            toast.success(response.data.message);
            router.push('/');
        }
        catch (err) {
            // console.log(err);
            toast.error(err.response.data.message);
            setError(err.response.data.message);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >

                <input type="text" {...register('otp', {
                    required: "This field is required",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Only numbers are allowed",
                    },
                })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" />

                {errors.otp && <span className="text-red-500 text-xs mt-1 input-error">{errors.otp.message}</span>}
                <button className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
            </form>
            {error && <span className="text-red-500  my-2 input-error block">{error} </span>}
        </>
    )
}

export default EmailOtp;