"use client";

import { Accordion, AccordionItem } from "./Accordion";

export default function AccordionExample() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

      <Accordion>
        <AccordionItem
          title="What services do you offer?"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          }
        >
          <p className="text-base">
            We offer a comprehensive range of medical services including
            preventive care, diagnostic testing, treatment for acute and chronic
            conditions, and specialized consultations across various medical
            fields.
          </p>
        </AccordionItem>

        <AccordionItem
          title="What are your opening hours?"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          }
        >
          <p className="text-base">
            Our clinic is open Monday to Friday from 8:00 AM to 7:00 PM and on
            Saturdays from 9:00 AM to 1:00 PM. We are closed on Sundays and
            public holidays.
          </p>
        </AccordionItem>

        <AccordionItem
          title="Do you accept insurance?"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          }
        >
          <p className="text-base">
            Yes, we accept most major insurance plans. Please contact our
            reception desk with your insurance details to verify coverage before
            your appointment.
          </p>
        </AccordionItem>

        <AccordionItem
          title="How can I schedule an appointment?"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          }
        >
          <p className="text-base mb-4">You can schedule an appointment by:</p>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Calling our reception desk at (123) 456-7890</li>
            <li>Using our online booking system on our website</li>
            <li>Visiting our clinic in person</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
