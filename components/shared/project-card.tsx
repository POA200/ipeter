export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
