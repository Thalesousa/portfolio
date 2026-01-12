interface FooterProps {
  year: string;
}

export function Footer({ year }: FooterProps) {
  return (
    
    <footer className="bg-base-200 py-6">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>&#169; {year} Thales Sousa. Todos os direitos reservados.</span>
      </div>
    </footer>
    
  );
}
