import { Opinions as SharedOpinions } from "@/components/Opinions";
import { INTERNIST_OPINIONS } from "@/data/opinions";

export const Opinions = () => {
  return (
    <SharedOpinions
      title={
        <span className="heading-h1-regular">
          Opinie pacjentów to moja{" "}
          <span className="heading-h1-bold">najlepsza rekomendacja</span>
        </span>
      }
      opinions={INTERNIST_OPINIONS}
      keyPrefix="internist"
    />
  );
};
