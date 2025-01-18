import Link from 'next/link'

const projects = [
  { id: 1, name: 'IGVC', description: 'Autonomous vehicle project for the Intelligent Ground Vehicle Competition (IGVC).', github: 'https://github.com/ChauPhucNguyen/IGVC_2024' },
  { id: 2, name: 'Project 2', description: 'A brief description of Project 2', github: 'https://github.com/yourusername/project2' },
  { id: 3, name: 'Project 3', description: 'A brief description of Project 3', github: 'https://github.com/yourusername/project3' },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.name}</h2>
            <p className="mb-2 text-gray-800 dark:text-gray-200">{project.description}</p>
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400">
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

