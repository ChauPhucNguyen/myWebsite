'use client'
import { useEffect } from "react";
import {useParams, useRouter} from 'next/navigation'
import Login from '../login/page'

export default function SecretSlug(){
    const params = useParams()
    const router = useRouter()
    const {slug} = params

    const secretSlug = 'letmein123'

    useEffect(() => {
        if (slug != secretSlug){
            router.push('/')
            return
        }
        sessionStorage.setItem('secretRouteAccess', 'true')
    }, [slug,router])

        if (slug == secretSlug){
            return <Login/>
        }
    return null
}