'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const pathname = usePathname()
    
    const getTitle = () => {
        switch (pathname) {
            case '/about':
                return 'Chau Nguyen — About'
            case '/projects':
                return 'Chau Nguyen — Projects'
            case '/blog':
                return 'Chau Nguyen — Writing'
            default:
                return 'Chau Nguyen'
        }
    }

    return (
        <nav className="w-full">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-xl text-gray-900 dark:text-gray-100">
                            {getTitle()}
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                            about
                        </Link>
                        <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                            projects
                        </Link>
                        <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                            writing
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav