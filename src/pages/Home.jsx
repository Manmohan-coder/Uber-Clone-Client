// import 'remixicon/fonts/remixicon.css';

import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="h-screen pt-8 w-full flex flex-col justify-between bg-[url('./traffic.jpg')] bg-cover bg-center">
                <img className="w-20 ml-8 drop-shadow-md" src="./uber-logo.png" alt="logo issue" />
                <div className="flex flex-col items-center gap-4 py-7 pb-5 px-4 bg-white">
                    <h2 className="text-3xl font-bold">Get Started with Uber</h2>
                    <Link to='/login' className="w-full flex items-center justify-center  rounded-lg bg-black text-white flex-row py-3 mt-5">Continue</Link>

                </div>
            </div>
        </>
    )
}

export default Home
