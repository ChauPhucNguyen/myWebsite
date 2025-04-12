'use client'
import { FileText, Linkedin, Github } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          hi, i'm chau :^)
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          You can reach me by <a href="mailto:chauvnguyen2003@gmail.com" className="font-bold underline">email</a>.
        </p>
      </div>

      <div className="flex space-x-6">
        <a
          href="/Chau_s_Resume.pdf"
          className="relative group"
          download="current_resume.pdf"
        >
          <FileText className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded 
            whitespace-nowrap">
            here's my resume
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/chau-phuc-nguyen-08b284245"
          className="relative group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded 
            whitespace-nowrap">
            connect with me on linkedin
          </span>
        </a>

        <a
          href="https://github.com/ChauPhucNguyen"
          className="relative group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded 
            whitespace-nowrap">
            check out my github
          </span>
        </a>
      </div>
    </main>
  )
}