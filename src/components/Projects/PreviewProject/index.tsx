import Link from 'next/link'
import styles from './styles.module.scss';
import Image from 'next/image';

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
    <Link href={`/projetos/${repository.name}`}>
        <div className={styles.Box}>
          <div className={styles.ImgBx}>
            <Image src={repository.thumbnail} width={520} height={300} alt='' />
          </div>
          <div className={styles.ContentBox}>
            <h3 translate="no">{repository.title}</h3>
          </div>
        </div>
    </Link>
  )
}
