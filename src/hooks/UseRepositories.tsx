import { api } from '../services/api';
import { UseFormatDate } from './UseFormatDate';

interface Repository {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  created_at: string;
  default_branch: string;
}

export async function UseRepositories() {
  try {
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
        thumbnail: `https://raw.githubusercontent.com/Thalesousa/${repository.name}/port/.github/thumbnail.png`,
        created_at: UseFormatDate(repository.created_at)
      }
    })

    return repositories;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    return [];
  }
}