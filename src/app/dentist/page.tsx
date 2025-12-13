import { Contact } from "../../components/Contact";
import { XRay } from "./components/XRay";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Opinions } from "./components/Opinions";
import { Location } from "../../components/Location";
import { FAQ } from "./components/FAQ";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export default function DentistPage() {
  return (
    <>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation>
        <XRay />
      </ScrollAnimation>
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Certificates />
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
