import { Button } from "@/components/Button";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { CONTACT } from "@/data/constants";

export const Contact = () => {
  return (
    <div>
      <div className="hidden tablet:block">
        <Button leftIcon={<PhoneIcon />}>{CONTACT.phone}</Button>
      </div>

      <div className="h-12 tablet:hidden" />

      <p className="heading-h3-regular mt-5">
        Zapraszam po wcześniejszej rejestracji telefonicznej <br />
        <span className="heading-h3-bold">{CONTACT.workingHours}</span>
      </p>

      <div className="tablet:hidden mt-5">
        <a href={CONTACT.phoneLink}>
          <Button leftIcon={<PhoneIcon />}>{CONTACT.phone}</Button>
        </a>
      </div>
    </div>
  );
};
