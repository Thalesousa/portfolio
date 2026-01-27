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
      {repositories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {repositories.map((repository, index) => {
            return (
              <PreviewProject
                repository={repository}
                key={repository.id}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <div className="glass-card p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cosmic-blue/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-cosmic-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-stardust/60 font-space">
            Nao foi possivel carregar os projetos no momento.
          </p>
          <p className="text-stardust/40 text-sm mt-2">
            Tente novamente mais tarde.
          </p>
        </div>
      )}
    </>
  );
}
