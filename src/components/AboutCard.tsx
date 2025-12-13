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
          <div className="flex items-center gap-2 tablet:gap-3 desktop:gap-3 desktop-2:gap-[1vh] mb-1 tablet:mb-2 desktop:mb-3 desktop-2:mb-[2vh] flex-shrink-0">
            <h2 className="text-base tablet:text-3xl desktop:text-4xl desktop-lg:text-5xl desktop-2:text-6xl desktop-3:text-9xl font-bold text-dark-gray">
              {content.title}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-sm tablet:text-2xl desktop:text-3xl desktop-lg:text-4xl desktop-2:text-5xl desktop-3:text-8xl text-dark-gray mb-1 tablet:mb-2 desktop:mb-3 desktop-2:mb-[2vh]">
            {content.subtitle}
          </p>

          {/* Description */}
          <div className="about-card-description flex-grow min-h-0 overflow-hidden">
            <p className="text-dark-gray text-xs tablet:text-base desktop:text-lg desktop-lg:text-xl desktop-2:text-2xl desktop-3:text-5xl leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
