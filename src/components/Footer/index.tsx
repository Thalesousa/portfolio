import Image from "next/image";
import LogoSvg from "@/components/Icons/Logo";

interface FooterProps {
  year: string;
}

export function Footer({ year }: FooterProps) {
  return (
    <footer className="bg-base-200 py-10 relative overflow-hidden">
      <Image
        src="/meteorite.png"
        alt="Meteorite"
        width={40}
        height={40}
        className="absolute top-0 left-0 animate-meteorite pointer-events-none"
      />
      <div className="container-main flex items-center justify-between text-sm text-gray-400 relative z-10">
        <span>&#169; {year} Thales Sousa. Todos os direitos reservados.</span>
        <LogoSvg
          width={120}
          height={90}
          pathFill="currentColor"
          className="text-gray-400 opacity-15 pointer-events-none"
        />
      </div>
    </footer>
  );
}
