'use client'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

const authButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
        }
        checkLoginStatus()
        window.addEventListener('storage', checkLoginStatus)
        
        return () => {
            window.removeEventListener('storage', checkLoginStatus)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
        router.push('/')
    }

    return (
        <div className="flex space-x-2">
            {
                isLoggedIn ? (
                    <>
                    <Link href="/admin" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                        New Blog
                    </Link>
                    <button onClick={handleLogout} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                        Logout
                    </button> 
                    </>
                ) : (
                    <Link href="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                        Login
                    </Link>
                )
            }
        </div>
    )
}

export default authButton