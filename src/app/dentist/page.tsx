import Link from "next/link";

export default function DentistPage() {
  return (
    <main className="min-h-screen p-8">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Main Page
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Dental Services</h1>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Dental Expertise</h2>
          <p className="text-gray-700 mb-4">
            We provide comprehensive dental care with the latest technology and
            techniques. Our experienced dentists are committed to ensuring your
            oral health and giving you the perfect smile you deserve.
          </p>

          <h3 className="text-xl font-semibold mb-3">Services We Offer:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>General Check-ups and Cleaning</li>
            <li>Cavity Fillings</li>
            <li>Root Canal Treatment</li>
            <li>Dental Implants</li>
            <li>Orthodontics</li>
            <li>Cosmetic Dentistry</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
