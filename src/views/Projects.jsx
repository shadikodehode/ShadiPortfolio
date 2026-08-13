import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS } from '../data/projects.js'

export function Projects() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {PROJECTS.map(({ id, title, description }) => (
        <ProjectCard key={id} title={title} description={description}/>
      ))}
    </div>
  )
}