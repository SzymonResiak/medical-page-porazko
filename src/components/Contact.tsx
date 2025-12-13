import { Button } from "@/components/Button";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { CONTACT } from "@/data/constants";

export const Contact = () => {
  return (
    <div>
      <Button leftIcon={<PhoneIcon />}>{CONTACT.phone}</Button>
      <p className="text-2xl desktop-lg:text-5xl mt-5">
        Zapraszam po wcześniejszej rejestracji telefonicznej <br />
        <span className="font-bold">{CONTACT.workingHours}</span>
      </p>
    </div>
  );
};
