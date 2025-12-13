import { Opinions as SharedOpinions } from "@/components/Opinions";
import { INTERNIST_OPINIONS } from "@/data/opinions";

export const Opinions = () => {
  return (
    <SharedOpinions
      title={
        <>
          Opinie pacjentów to <br /> moja{" "}
          <span className="font-bold">najlepsza rekomendacja</span>
        </>
      }
      opinions={INTERNIST_OPINIONS}
      keyPrefix="internist"
    />
  );
};
