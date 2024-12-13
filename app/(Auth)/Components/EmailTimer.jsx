'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function EmailTimer() {
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(true);

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }
        return () => clearInterval(countdown);
    }, [timer]); // Remove canResend from the dependency array

    async function ResendLink() {
        setCanResend(false);
        setTimer(60); // Reset the timer to 60 seconds
        try {
            axios.defaults.withCredentials = true;
            axios.defaults.withXSRFToken = true;
            const response = await axios.get('http://localhost:8000/email/verification-notification', {
                headers: {
                    'Accept': 'application/json',
                },
            });
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to resend OTP");
        }
    }

    return (
        <>
            {canResend ? (
                <span
                    onClick={ResendLink}
                    className="text-blue-600 cursor-pointer hover:text-blue-800 transition duration-200 ease-in-out"
                >
                    Resend otp
                </span>
            ) : (
                <span className="text-gray-400">
                    Resend OTP in {timer} seconds
                </span>
            )}
        </>
    );
}

export default EmailTimer;
