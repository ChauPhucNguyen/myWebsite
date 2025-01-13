async function getPost(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
    if (!response.ok) {
        throw new Error('Failed to fetch post')
    }
    const posts = await response.json()
    return posts.find((post: any) => post.id.toString() === id)
}

export default async function BlogPost({params}: {params: {id: string}}) {
    const post = await getPost(params.id)

    if(!post) {
        return <div>Post not found</div>
    }

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <p className="mb-2 text-gray-800 dark:text-gray-200">{post.description}</p>
            <div className="prose dark:prose-invert">
                {post.content.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </div>
    )
}