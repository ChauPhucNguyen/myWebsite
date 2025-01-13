import { FileCode, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <div className="text-center">      
        <p className="text-xl text-gray-800 dark:text-gray-200">
          hi, i'm chau :^)
        </p>
        <br></br>
        <p>
          You can reach me by <a href="mailto:chaunguyenvvvvv@gmail.com">email</a>.
        </p>
      </div>
      <div className="text-center">
        <a href="https://github.com/ChauPhucNguyen" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  )
}

