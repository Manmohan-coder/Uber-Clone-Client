import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { setCaption } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/cap-login')
        }
    }, [token, navigate])
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            setCaption(res.data.captain)
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

export default CaptainProtectedWrapper


