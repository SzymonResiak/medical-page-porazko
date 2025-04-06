import { Button } from "@/components/Button";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export const Contact = () => {
  return (
    <div>
      <Button leftIcon={<PhoneIcon />}>+48 735 239 795</Button>
      <p className="text-2xl desktop-2:text-5xl mt-5">
        Zapraszam po wcześniejszej rejestracji telefonicznej <br />
        <span className="font-bold">Pon–Pt: 9:00–18:00</span>
      </p>
    </div>
  );
};
