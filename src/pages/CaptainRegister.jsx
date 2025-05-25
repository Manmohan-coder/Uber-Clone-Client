// import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vColor, setVehicleColor] = useState('');
    const [vPlate, setVehiclePlate] = useState('');
    const [vCapacity, setVehicleCapacity] = useState('');
    const [vType, setVehicleType] = useState('');
    const [captainData, setCaptainData] = useState({});
    const submitHandler = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
        setCaptainData({
            fullName: {
                firstName: firstname,
                lastName: lastname
            },
            email: email,
            password: password,
            // vehicle: {
            //     color: vColor,
            //     plate: vPlate,
            //     capacity: vCapacity,
            //     type: vType
            // }
        });
        // console.log("User Data:", captainData);
        e.target.reset();  // Reset the form fields after submission
    }
    return (
        <>
            <section className=" p-7 h-screen w-full bg-[url(./taxi-booking.jpg)] bg-cover bg-center">
                <img className="w-20 mb-4 drop-shadow-md" src="./uber-logo.png" alt="logo issue" />

                <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-8">Captain Sign-Up</h1>

                <div className="flex flex-col items-center gap-8">
                    {/* Login Card */}
                    <div className="mt-5 backdrop-blur-xl bg-white/20 shadow-2xl rounded-3xl px-5 py-5 w-[90%] max-w-md transition-all duration-75 hover:scale-[1.02]">

                        <form onSubmit={submitHandler} className="w-full">
                            <h3 htmlFor="username" className="mb-2 font-semibold text-base drop-shadow-lg text-black">Enter Your Name </h3>
                            <div className='flex gap-3'>
                                <input required type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="First Name" />
                                <input required type="text"
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="Last Name" />
                            </div>

                            <h3 htmlFor="username" className="mb-2 font-semibold text-base drop-shadow-lg text-black">Enter User Email</h3>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="username"
                                className="bg-white/70 text-black mb-2 px-4 py-2 w-full text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="email@example.com" />

                            <h3 htmlFor="password" className="mb-2 font-semibold text-base drop-shadow-lg text-black">Enter User Password</h3>
                            <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                className="bg-white/70 text-black mb-2 px-4 py-2 w-full text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter your password"
                            />

                            <h3 htmlFor="username" className="mb-2 font-semibold text-base drop-shadow-lg text-black">Enter Your Vehicle Details </h3>
                            <div className='flex gap-3'>
                                <input required type="text"
                                    value={vColor}
                                    onChange={(e) => setVehicleColor(e.target.value)}
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="Vehicle Color" />
                                <input required type="number"
                                    value={vCapacity}
                                    onChange={(e) => setVehicleCapacity(e.target.value)}
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="Vehicle Capacity" />
                            </div>
                            <div className='flex gap-3'>
                                <input required type="text"
                                    value={vPlate}
                                    onChange={(e) => setVehiclePlate(e.target.value)}
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="Vehicle Plate No." />
                                <select
                                    id="vehicleType"
                                    value={vType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                    required
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    <option value="" disabled>Select one</option>
                                    <option value="car">Car</option>
                                    <option value="bike">Bike</option>
                                    <option value="auto">Auto Rickshaw</option>
                                </select>
                                {/* <input required type="text"
                                    className="bg-white/70 text-black w-1/2 mb-3 px-2 py-2 text-base placeholder:text-gray-600 border-none rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="Last Name" /> */}
                            </div>
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 transition-all duration-200 text-white font-semibold px-4 py-2 w-full text-lg rounded-xl">
                                Login
                            </button>
                        </form>
                        <p className="text-center text-black font-semibold text-base drop-shadow-lg mt-4 mb-2">Do you have an account? <Link
                            to="/cap-login"
                            className="hover:bg-blue-800 transition-all duration-200 text-blue-500 font-semibold text-base text-center">Login Here
                        </Link>
                        </p>
                    </div>

                    {/* Additional Options */}
                    <div className="flex flex-col items-center justify-center mt-22 backdrop-blur-md bg-white/30 shadow-xl rounded-xl p-6 w-full max-w-md">

                        <p className="text-center text-black font-semibold text-base drop-shadow-lg mb-2">
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

export default UserRegister