async function getPost(id: string) {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: 'no-store'
    })
    if (!response.ok) {
        return null
    }
    return response.json()
}

export default async function BlogPost({ params }: { params: { id: string } }) {
    const post = await getPost(params.id)

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <article className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {post.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
                {new Date(post.created_at).toLocaleDateString()}
            </p>
            <div className="prose dark:prose-invert">
                {post.content}
            </div>
        </article>
    )
}