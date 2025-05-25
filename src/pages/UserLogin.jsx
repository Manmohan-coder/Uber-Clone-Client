import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUserData({
            email: email,
            password: password
        });
        // console.log("User Data:", userData);
    }
    return (
        <>
            <section className=" p-7 h-screen w-full bg-[url(./taxi-booking.jpg)] bg-cover bg-center">
                <img className="w-20 mb-4 drop-shadow-md" src="./uber-logo.png" alt="logo issue" />

                <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-8">User Login</h1>

                <div className="flex flex-col items-center gap-8">
                    {/* Login Card */}
                    <div className="mt-5 backdrop-blur-xl bg-white/20 shadow-2xl rounded-3xl px-5 py-5 w-[90%] max-w-md transition-all duration-75 hover:scale-[1.02]">

                        <form onSubmit={submitHandler} className="w-full">
                            <h3 htmlFor="username" className="mb-2 font-semibold text-xl drop-shadow-lg text-black">Enter User Email</h3>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="username"
                                className="bg-white/70 text-black mb-5 px-4 py-2 w-full text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="email@example.com" />

                            <h3 htmlFor="password" className="mb-2 font-semibold text-xl drop-shadow-lg text-black">Enter User Password</h3>
                            <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                className="bg-white/70 text-black mb-6 px-4 py-2 w-full text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                                to="/signup"
                                className="hover:bg-blue-800 transition-all duration-200 text-blue-500 font-semibold text-base text-center">
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-center text-red-500 font-semibold text-base drop-shadow-lg mb-2">Forgot Password?</p>
                    </div>

                    {/* Additional Options */}
                    <div className="flex flex-col items-center justify-center mt-60 backdrop-blur-md bg-white/30 shadow-xl rounded-xl p-6 w-full max-w-md">

                        <p className="text-center text-black font-semibold text-balance drop-shadow-lg mb-2">
                            Are you a Captain?
                        </p>
                        <Link
                            to="/cap-login"
                            className="bg-amber-500 hover:bg-amber-600 transition-all duration-200 text-white font-semibold px-4 py-2 w-full text-lg text-center rounded-xl">
                            Login here
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserLogin