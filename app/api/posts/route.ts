import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try{
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC')
    return NextResponse.json(result.rows)
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch posts'})
  }
}

export async function POST(request: Request) {
  try{
    const {title, description, content} = await request.json()
    const result = await pool.query('INSERT INTO posts (title, description, content, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *', [title, description,])

    return NextResponse.json(result.rows[0])
  } catch (error) {
    return NextResponse.json({error: 'Failed to create post'}, {status: 500})
  }

}