import { NextResponse } from 'next/server'
import pool from '@/lib/db'


export async function POST(request: Request) {
    try {
        const { username, password } = await request.json()
        
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        )

        if (result.rows.length > 0) {
            return NextResponse.json({ success: true })
        } else {
            return NextResponse.json({ success: false }, { status: 401 })
        }
    } catch (error) {
        console.error('Auth error:', error)
        return NextResponse.json(
            { error: 'Authentication failed' }, 
            { status: 500 }
        )
    }
}
