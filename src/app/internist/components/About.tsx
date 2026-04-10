const FirstAidIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="6" height="18" rx="1" fill="currentColor" />
    <rect x="2" y="8" width="18" height="6" rx="1" fill="currentColor" />
  </svg>
);

const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex flex-row items-stretch h-[44px]">
    <div className="w-[44px] h-[44px] rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-off-white [&_svg]:w-[22px] [&_svg]:h-[22px]">
      {icon}
    </div>
    <div className="flex items-center px-[10px] py-[5px] bg-accent rounded-[30px]">
      <span className="text-off-white text-[length:var(--fs-h3)] leading-none whitespace-nowrap">
        {text}
      </span>
    </div>
  </div>
);

export const About = () => {
  return (
    <div className="box-border flex flex-col p-5 desktop:p-[40px] gap-[40px] desktop:gap-[100px] bg-[#E2E9F6] border border-[rgba(128,128,128,0.55)] rounded-[30px]">
      {/* Badges */}
      <div className="flex flex-row flex-wrap gap-[10px]">
        <Badge icon={<FirstAidIcon />} text="Od 1998r." />
        <Badge icon={<FolderIcon />} text="Nr PWZ: 171 07 71" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[length:var(--fs-h2)] leading-[150%] font-bold">O mnie</p>
        <p className="text-[length:var(--fs-h3)] leading-[34px]">
          Absolwent Wydziału Lekarskiego Uniwersytetu Medycznego we Wrocławiu.
          Specjalista chorób wewnętrznych i nefrologii.
        </p>
        <p className="text-[length:var(--fs-h3)] leading-[34px] mt-[length:var(--fs-h3)]">
          Doświadczenie zdobywał m.in. w Klinice Nefrologii i Medycyny
          Transplantacyjnej UM we Wrocławiu, Manchester Royal Infirmary w
          Wielkiej Brytanii oraz obecnie w Uniwersyteckim Szpitalu Klinicznym
          w Opolu.
        </p>
      </div>
    </div>
  );
};
