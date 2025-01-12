import {NextResponse} from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
    const {username, password} = await request.json()
    const dbPath = path.join(process.cwd(), 'data', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))

    const user = db.users.find((u:any) => u.username === username && u.password === password)
    if (user) {
        return NextResponse.json({success: true})
    } else {
        return NextResponse.json({success:false}, {status: 401})
    }
}