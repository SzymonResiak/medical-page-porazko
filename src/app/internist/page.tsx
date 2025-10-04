import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Cards } from "./components/Cards";
import { Contact } from "@/components/Contact";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Opinions } from "./components/Opinions";
import { Location } from "@/components/Location";
import { FAQ } from "./components/FAQ";
import { Animation } from "@/components/Animation";

export default function InternistPage() {
  return (
    <div className="mx-auto flex flex-col gap-8 desktop-2:gap-37">
      <div>
        <Cards />
        <Animation src="/images/animation.gif" alt="scroll animation" />
      </div>
      <Contact />
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Opinions />
      </ScrollAnimation>
      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
    </div>
  );
}
