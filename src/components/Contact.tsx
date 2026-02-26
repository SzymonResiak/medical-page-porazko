import { Button } from "@/components/Button";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { CONTACT } from "@/data/constants";

export const Contact = () => {
  return (
    <div>
      {/* Desktop: telefon na górze */}
      <div className="hidden tablet:block">
        <a href={CONTACT.phoneLink}>
          <Button leftIcon={<PhoneIcon />}>{CONTACT.phone}</Button>
        </a>
      </div>

      {/* Mobile: miejsce na FloatingIsland */}
      <div className="h-12 tablet:hidden" />

      <p className="text-2xl desktop-lg:text-5xl mt-5">
        Zapraszam po wcześniejszej rejestracji telefonicznej <br />
        <span className="font-bold">{CONTACT.workingHours}</span>
      </p>

      {/* Mobile: telefon pod tekstem */}
      <div className="tablet:hidden mt-5">
        <a href={CONTACT.phoneLink}>
          <Button leftIcon={<PhoneIcon />}>{CONTACT.phone}</Button>
        </a>
      </div>
    </div>
  );
};
