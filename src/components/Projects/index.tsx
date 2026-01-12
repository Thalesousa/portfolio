import { PreviewProject } from "./PreviewProject";

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
}

interface ProjectsProps {
  repositories: Repository[];
}

export function Projects({ repositories }: ProjectsProps) {
  return (
    <>
      <h1 className="gradient-text text-4xl md:text-5xl font-semibold text-center py-8">
        Projetos
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {repositories.map((repository) => {
          return <PreviewProject repository={repository} key={repository.id} />;
        })}
      </div>
    </>
  );
}
