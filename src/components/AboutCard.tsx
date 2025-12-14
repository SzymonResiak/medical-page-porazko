interface AboutCardProps {
  variant: "dentist" | "internist";
}

const dentistContent = {
  title: "O mnie",
  subtitle: "Doświadczenie i pasja",
  description:
    "Jestem absolwentką Wydziału Stomatologii Uniwersytetu Medycznego im. Piastów Śląskich we Wrocławiu. Doświadczenie zdobywałam w placówkach w Polsce i Wielkiej Brytanii. Regularnie poszerzam swoje kwalifikacje, biorąc udział w kursach i konferencjach.",
};

const internistContent = {
  title: "O mnie",
  subtitle: "Doświadczenie i troska",
  description:
    "Jestem absolwentem Wydziału Lekarskiego Uniwersytetu Medycznego im. Piastów Śląskich we Wrocławiu. Specjalizuję się w chorobach wewnętrznych i nefrologii. Wieloletnie doświadczenie nabyłem pracując w Klinice Nefrologii Uniwersytetu Medycznego we Wrocławiu oraz w Manchester Royal Infirmary w Wielkiej Brytanii.",
};

export const AboutCard = ({ variant }: AboutCardProps) => {
  const content = variant === "dentist" ? dentistContent : internistContent;

  return (
    <div className="group relative w-full h-full">
      <div className="about-card-wrapper rounded-[20px] p-4 tablet:p-6 tablet-landscape:p-[clamp(0.75rem,1.5vh,1.25rem)] desktop:p-[clamp(1rem,2vh,2rem)] relative overflow-hidden h-full flex flex-col bg-light-gray">
        <div className="about-card-content relative flex flex-col h-full min-h-0">
          {/* Header */}
          <div className="flex items-center gap-[clamp(0.5rem,1vw,1.5rem)] mb-[clamp(0.25rem,1vh,1.5rem)] flex-shrink-0">
            <h2 className="text-[clamp(1rem,0.25rem+4vw,8rem)] font-bold text-dark-gray truncate leading-normal">
              {content.title}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-[clamp(0.875rem,0.2rem+3.5vw,6rem)] text-dark-gray mb-[clamp(0.25rem,1vh,1.5rem)] truncate leading-normal">
            {content.subtitle}
          </p>

          {/* Description */}
          <div className="about-card-description flex-grow min-h-0 overflow-hidden pb-1">
            <p className="text-dark-gray text-[clamp(0.75rem,0.4rem+1.4vw,3rem)] leading-relaxed line-clamp-6">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
