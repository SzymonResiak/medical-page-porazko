import { FAQ as SharedFAQ } from "@/components/FAQ";
import { INTERNIST_FAQ_ITEMS } from "../data/faqItems";

export const FAQ = () => {
  return <SharedFAQ items={INTERNIST_FAQ_ITEMS} />;
};
