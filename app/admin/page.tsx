'use client'
import {useState, useEffect} from 'react'
import {unauthorized, useRouter} from 'next/navigation'

export default function Admin() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [authorized, setAuthorized] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
        const fromSecretRoute = sessionStorage.getItem('secretRouteAccess') === 'true'
        
        setIsLoggedin(loggedIn)
        
        if (!loggedIn || !fromSecretRoute) {
            router.push('/')
            return
        }
        
        setAuthorized(true)
    }, [router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                description,
                content
            }),          
        })
        if (response.ok) {
            setTitle('')
            setDescription('')
            setContent('')
            alert("Blog post created successfully")
        } else {
            const error = await response.json()
            alert(error.message || "Failed to create blog post")
        }
    }

    if (!isLoggedin || !unauthorized) return null

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-300">New Blog</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font medium text-gray-700 dark:text-gray-300">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font medium text-gray-700 dark:text-gray-300">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                    ></textarea>
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:hover:bg-indigo-600">
                    Create Post
                </button>
            </form>
        </div>
    )
}