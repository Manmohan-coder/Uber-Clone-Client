import { useState } from "react";
import { Link } from "react-router-dom"

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setCaptainData({
            email: email,
            password: password
        });
        // console.log("Captain Data:", captainData);
    }
    return (
        <>
            <section className="p-7 h-screen w-full bg-[url('./taxi-booking.jpg')] bg-cover bg-center">
                {/* Logo */}
                <img className="w-20 mb-4 drop-shadow-md" src="./uber-logo.png" alt="logo issue" />

                {/* Title */}
                <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-8">
                    Captain Login
                </h1>

                <div className="w-full flex flex-col items-center gap-8">
                    {/* Login Card */}
                    <div className="mt-5 backdrop-blur-xl bg-white/20 shadow-2xl rounded-3xl px-5 py-5 w-[90%] max-w-md transition-all duration-75 hover:scale-[1.02]">

                        <form onSumbit={submitHandler} className="w-full">
                            <h3 htmlFor="username" className="block mb-2 font-semibold text-xl drop-shadow-xl text-black">Enter Captain Email</h3>
                            <input
                                required
                                type="email"
                                id="username"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="bg-white/70 text-black mb-5 px-4 py-2 w-full text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="email@example.com"
                            />

                            <h3 htmlFor="password" className="block mb-2 font-semibold text-xl drop-shadow-xl text-black">Enter Captain Password</h3>
                            <input
                                required
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="bg-white/70 text-black mb-5 px-4 py-2 w-full text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter your password"
                            />

                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 transition-all duration-200 text-white font-semibold px-4 py-2 w-full text-lg rounded-xl">
                                Login
                            </button>
                        </form>
                        <p className="text-center text-black font-semibold text-base drop-shadow-lg mt-4 mb-2">
                            Don't have an account? <Link
                                to="/cap-signup"
                                className="hover:bg-blue-800 transition-all duration-200 text-blue-500 font-semibold text-base text-center">
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-center text-red-500 font-semibold text-base drop-shadow-lg mb-2">Forgot Password?</p>
                    </div>

                    {/* Additional Options */}
                    <div className="flex flex-col items-center justify-center mt-60 backdrop-blur-md bg-white/30 shadow-xl rounded-xl p-6 w-full max-w-md">
                        

                        <p className="text-center text-black font-semibold text-balance drop-shadow-lg mb-2">Are you a User?</p>
                        <Link
                            to="/login"
                            className="bg-sky-500 hover:bg-sky-600 transition-all duration-200 text-white font-semibold px-4 py-2 w-full text-lg text-center rounded-xl">
                            Login here
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CaptainLogin

