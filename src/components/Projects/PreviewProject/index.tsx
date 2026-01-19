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
    <Link href={`/projetos/${repository.name}`} className="block group">
      <div className="glass-card overflow-hidden transition-all duration-300 group-hover:border-secondary/30 group-hover:shadow-lg group-hover:shadow-secondary/10">
        <figure className="relative w-full aspect-video overflow-hidden">
          <Image
            src={repository.thumbnail}
            width={400}
            height={225}
            alt={repository.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </figure>
        <div className="p-4 relative">
          <h3
            className="text-lg md:text-xl font-semibold text-base-content group-hover:text-secondary transition-colors duration-300"
            translate="no"
          >
            {repository.title}
          </h3>
          <span className="text-sm text-base-content/50 mt-1 block">
            Ver projeto →
          </span>
        </div>
      </div>
    </Link>
  );
}
