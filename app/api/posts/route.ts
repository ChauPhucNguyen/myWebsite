import {NextResponse} from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const dbPath = path.join(process.cwd(), 'data', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbpath, 'utf-8'))
    return NextResponse.json(db.posts)
}

export async function POST(request: Request) {
    const {title, description, content} = await request.json()
    const dbPath = path.join(process.cwd(), 'data', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))

    const newPost = {
        id: Date.now(),
        title,
        description,
        content,
        date: new Date().toISOString().split('T')[0]
    }

    db.posts.push(newPost)
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))

    return NextResponse.json(newPost)
}