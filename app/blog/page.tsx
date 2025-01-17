'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

async function getPosts(sortOrder: 'asc' | 'desc') {
    const response = await fetch(`http://localhost:3000/api/posts?sort=${sortOrder}`, {
        cache: 'no-store'
    })
    if (!response.ok) {
        throw new Error('Failed to fetch posts')
    }
    return response.json()
}

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([])
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

    useEffect(() => {
        getPosts(sortOrder).then(setPosts)
    }, [])

    const handleSort = async (order: 'asc' | 'desc') => {
        setSortOrder(order)
        const newPosts = await getPosts(order)
        setPosts(newPosts)
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray dark:text-gray-100">Things On My Mind</h1>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700 dark:text-gray-300">Sort by:</span>
                    <select 
                        value={sortOrder}
                        onChange={(e) => handleSort(e.target.value as 'asc' | 'desc')}
                        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1"
                    >
                        <option value="desc">Newest</option>
                        <option value="asc">Oldest</option>
                    </select>
                </div>
            </div>
            <div className="space-y-4">
                {posts.map((post: any) => (
                    <div key={post.id} className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">{new Date(post.created_at).toLocaleDateString()}</p>
                        <p className="mb-2 text-gray-800 dark:text-gray-200">{post.description}</p>
                        <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline dark:text-blue-400">
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}