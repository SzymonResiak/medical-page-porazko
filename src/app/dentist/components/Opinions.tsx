import { Opinions as SharedOpinions } from "@/components/Opinions";
import { DENTIST_OPINIONS } from "@/data/opinions";

export const Opinions = () => {
  return (
    <SharedOpinions
      title={
        <>
          Wasze uśmiechy to <br /> moja{" "}
          <span className="font-bold">najlepsza rekomendacja</span>
        </>
      }
      opinions={DENTIST_OPINIONS}
      keyPrefix="dentist"
    />
  );
};
