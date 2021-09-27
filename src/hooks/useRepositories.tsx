import { api } from '../services/api';
import { useFormatDate } from './useFormatDate';

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

export async function useRepositories() {
  const { data } = await api.get('/users/Thalesousa/repos');

  const repositoryWithDefaultBranchNamePort = data.filter(
    (repostiry: Repository) => {
      return repostiry.default_branch === 'port'
    }
  )
  repositoryWithDefaultBranchNamePort.sort((a: Repository,b: Repository) => {
    return new Date(a.created_at) > new Date(b.created_at) ? -1 : new Date(a.created_at) < new Date(b.created_at) ? 1 : 0;
  });

  const repositories = repositoryWithDefaultBranchNamePort.map((repository: Repository) => {
    return {
      id: repository.id,
      name: repository.name,
      title: repository.name.replace("-", " "),
      thumbnail: `https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
      created_at: useFormatDate(repository.created_at)
    }
  })


  

  return repositories;
}