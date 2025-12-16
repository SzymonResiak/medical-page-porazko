import { Opinions as SharedOpinions } from "@/components/Opinions";
import { DENTIST_OPINIONS } from "@/data/opinions";

export const Opinions = () => {
  return (
    <SharedOpinions
      title={
        <span className="heading-h1-regular">
          Wasze uśmiechy to moja{" "}
          <span className="heading-h1-bold">najlepsza rekomendacja</span>
        </span>
      }
      opinions={DENTIST_OPINIONS}
      keyPrefix="dentist"
    />
  );
};
