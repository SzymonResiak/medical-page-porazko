import { FAQ as SharedFAQ } from "@/components/FAQ";
import { DENTIST_FAQ_ITEMS } from "../data/faqItems";

export const FAQ = () => {
  return <SharedFAQ items={DENTIST_FAQ_ITEMS} />;
};
