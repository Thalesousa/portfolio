import { PreviewProject } from "./PreviewProject";
import styles from './styles.module.scss';

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
}

interface ProjectsProps  {
  repositories: Repository[];
}

export function Projects({repositories}: ProjectsProps) {
  return (
    <>
      <h1>Projetos</h1>
      <div className={styles.ContainerPortfolio}>
        {repositories.map(repository => {
          return  <PreviewProject repository={repository} key={repository.id} />
        })}
      </div>
    </>
  )
}