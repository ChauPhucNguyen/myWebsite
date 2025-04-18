import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('./components/nav'))
const DarkModeToggle = dynamic(() => import('./components/dark-mode-toggle'))
const AuthButton = dynamic(() => import('./components/auth-button'))

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Portfolio',
  description: 'Why are you reading this?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.getItem('darkMode') === 'true' || 
                (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            }
          `
        }} />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <div className="flex justify-between items-center p-4">
          <DarkModeToggle />
          <AuthButton />
        </div>
        <Nav />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}

