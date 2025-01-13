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
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Blog</h1>
        <div className="space-y-4">
          {posts.map((post: any) => (
            <div key={post.id} className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
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
