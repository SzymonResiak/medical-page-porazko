import { Cards } from "./components/Cards";
import { Contact } from "./components/Contact";
import { XRay } from "./components/XRay";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Certificates } from "./components/Cerificates";
import { Opinions } from "./components/Opinions";
import { Location } from "./components/Location";
import { FAQ } from "./components/FAQ";

export default function DentistPage() {
  return (
    <div className="mx-auto flex flex-col gap-8 desktop-2:gap-37">
      <Cards />
      <Contact />
      <XRay />
      <Services />
      <About />
      <Certificates />
      <Opinions />
      <Location />
      <FAQ />
    </div>
  );
}
