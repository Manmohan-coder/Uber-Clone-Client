import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token, navigate])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            setUser(res.data.captain)
            setIsLoading(false)
        }
    }).catch((err) => {
        console.log(err);
        localStorage.removeItem('token')
        navigate('/cap-login')

    })
    if (isLoading) {
        return (<div>Loading....</div>)
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper
