import { Cards } from "./components/Cards";
import { Contact } from "./components/Contact";
import { XRay } from "./components/XRay";
import { Services } from "./components/Services";
import { About } from "./components/About";

export default function DentistPage() {
  return (
    <div className="mx-auto flex flex-col gap-8">
      <Cards />
      <Contact />
      <XRay />
      <Services />
      <About />
    </div>
  );
}
