import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4 justify-center items-center">
        <li><Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Chau Nguyen</Link></li>
        <li><Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">about</Link></li>
        <li><Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300">projects</Link></li>
        <li><Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">writing</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

