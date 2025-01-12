import Link from 'next/link'

async function getPosts() {
    const response = await fetch('/api/posts')
    if (!response.ok) {
        throw new Error('Failed to fetch posts')
    }
    return response.json()
}

export default async function Blog() {
    const posts = await getPosts()

    return (
    <div>
        <h1 className="text-3xl font-bold mb-4 text-gray dark:text-gray-100">Blog</h1>
        <div className="space-y-4">
            
        </div>
    </div>
    )
}