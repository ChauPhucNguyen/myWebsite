import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sort = searchParams.get('sort') || 'desc'
    
    const result = await pool.query(
      `SELECT * FROM posts ORDER BY created_at ${sort === 'desc' ? 'DESC' : 'ASC'}`
    )
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, content } = await request.json()
    
    const result = await pool.query(
      'INSERT INTO posts (title, description, content, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
      [title, description, content]  // Matches your table column order
    )

    return NextResponse.json(result.rows[0])
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}