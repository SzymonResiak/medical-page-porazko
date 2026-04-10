import { Button } from "@/components/Button";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { CONTACT } from "@/data/constants";

export const Contact = () => {
  return (
    <div>
      <div>
        <a href={CONTACT.phoneLink} className="group/phone inline-block">
          <Button leftIcon={<PhoneIcon />} mobileIconSize="md" textClassName="!text-[length:var(--fs-h2)] desktop:!text-[length:var(--fs-h3)] desktop:!leading-[34px] desktop:!p-5 desktop:!rounded-[30px] !font-bold">
            <span className="group-hover/phone:bg-yellow-200/60 group-hover/phone:px-1 transition-all duration-200 rounded">
              {CONTACT.phone}
            </span>
          </Button>
        </a>
      </div>

      <p className="text-[length:var(--fs-h1)] leading-[150%] mt-5">
        Zapraszam po wcześniejszej rejestracji telefonicznej <br />
        <span className="font-bold">{CONTACT.workingHours}</span>
      </p>
    </div>
  );
};
