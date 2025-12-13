import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Contact } from "@/components/Contact";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Opinions } from "./components/Opinions";
import { Location } from "@/components/Location";
import { FAQ } from "./components/FAQ";

export default function InternistPage() {
  return (
    <>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
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
    </>
  );
}
