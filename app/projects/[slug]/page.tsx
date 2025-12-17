// Dynamic project page for portfolio
export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Project: {params.slug}</h1>
      {/* Project details will go here */}
    </main>
  );
}
