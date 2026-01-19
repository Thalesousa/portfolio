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
      <h1 className="text-primary text-4xl md:text-5xl font-semibold text-center py-8">
        Projetos
      </h1>
      {repositories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {repositories.map((repository) => {
            return <PreviewProject repository={repository} key={repository.id} />;
          })}
        </div>
      ) : (
        <div className="glass-card p-8 text-center">
          <p className="text-base-content/70">
            Não foi possível carregar os projetos no momento. Tente novamente mais tarde.
          </p>
        </div>
      )}
    </>
  );
}
