export function ProjectCard({ title, description }) {
  return (
    <div className="flex flex-col w-32 h-32 items-center justify-center bg-gray-300">
      <h3 className="font-mono text-sm uppercase">{title}</h3>
      <p className="text-xs">{description}</p>
    </div>
  )
}