'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 500) // Animation duration
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <style jsx>{`
        @keyframes fullRotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin {
          animation: fullRotation 0.5s linear;
        }
      `}</style>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        <div className={isSpinning ? 'spin' : ''}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>
      </button>
    </>
  )
}

export default DarkModeToggle


