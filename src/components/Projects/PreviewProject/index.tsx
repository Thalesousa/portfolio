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
    <Link href={`/projetos/${repository.name}`} className="block">
      <div className="card w-full aspect-video bg-base-100 overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <figure className="relative w-full h-full">
          <Image
            src={repository.thumbnail}
            width={400}
            height={225}
            alt={repository.title}
            className="object-cover w-full h-full brightness-[0.7] group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3
              className="text-xl md:text-2xl font-semibold text-base-content text-center px-4"
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
