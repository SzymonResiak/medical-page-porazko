import Link from "next/link";

export default function InternistPage() {
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
        <h1 className="text-4xl font-bold mb-6">Internal Medicine</h1>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Internal Medicine Services
          </h2>
          <p className="text-gray-700 mb-4">
            Our internal medicine specialists provide comprehensive care for
            adults, focusing on prevention, diagnosis, and treatment of adult
            diseases. We take a holistic approach to your health and well-being.
          </p>

          <h3 className="text-xl font-semibold mb-3">Services We Offer:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Preventive Care and Check-ups</li>
            <li>Chronic Disease Management</li>
            <li>Cardiovascular Health</li>
            <li>Diabetes Care</li>
            <li>Respiratory Health</li>
            <li>Diagnostic Services</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
