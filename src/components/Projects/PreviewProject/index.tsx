import Link from "next/link";
import Image from "next/image";

interface PreviewProjectProps {
  repository: {
    id: number;
    name: string;
    title: string;
    thumbnail: string;
    created_at: string;
  };
}

export function PreviewProject({ repository }: PreviewProjectProps) {
  return (
    <Link href={`/projetos/${repository.name}`}>
      <div className="card w-[320px] h-[200px] sm:w-[420px] sm:h-[200px] lg:w-[520px] lg:h-[300px] bg-base-100 shadow-[0_30px_30px_rgba(0,0,0,0.5)] overflow-hidden group">
        <figure className="relative w-full h-full">
          <Image
            src={repository.thumbnail}
            width={520}
            height={300}
            alt={repository.title}
            className="object-cover w-full h-full brightness-[0.7] group-hover:brightness-100 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3
              className="text-2xl font-semibold text-base-200"
              translate="no"
            >
              {repository.title}
            </h3>
          </div>
        </figure>
      </div>
    </Link>
  );
}
