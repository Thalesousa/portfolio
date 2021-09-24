import styles from './styles.module.scss';

interface PreviewProjectProps {
  repository : {
    id: number;
    name: string;
    title: string;
    thumbnail: string;
    created_at: string;
  }
}

export function PreviewProject({repository}: PreviewProjectProps) {
  return (
    <div className={styles.Box}>
      <div className={styles.ImgBx}>
        <img src={repository.thumbnail} width="520" />
      </div>
      <div className={styles.ContentBox}>
        <h3>{repository.title}</h3>
        <span>{repository.created_at}</span>
      </div>
    </div>
  )
}