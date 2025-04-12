'use client'
import { useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation'
import Login from '../login/page'

export default function SecretSlug() {
    const params = useParams()
    const router = useRouter()
    const { slug } = params
    const [isClient, setIsClient] = useState(false)

    // Get the secret slug from environment variable
    const secretSlug = process.env.NEXT_PUBLIC_SECRET_SLUG

    useEffect(() => {
        setIsClient(true)
        
        if (slug !== secretSlug) {
            router.push('/')
            return
        }
        
        // Set the access token in sessionStorage
        sessionStorage.setItem('secretRouteAccess', 'true')
    }, [slug, router, secretSlug])

    // Only render the component after client-side hydration is complete
    if (!isClient) return null;

    if (slug === secretSlug) {
        return <Login />
    }
    return null
}