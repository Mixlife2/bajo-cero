'use client';

import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        Contactanos
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Estamos disponibles para ayudarte y responder tus dudas.
      </p>
      <div className="flex justify-center gap-8 text-3xl text-cyan-600">
        <Link href="https://instagram.com/bajo_cero_importaciones" target="_blank" aria-label="Instagram">
          <FaInstagram className="hover:text-cyan-800 transition" />
        </Link>
        <Link href="https://wa.me/543764708793" target="_blank" aria-label="WhatsApp">
          <FaWhatsapp className="hover:text-cyan-800 transition" />
        </Link>
        <Link href="mailto:baj0cero@hotmail.com" aria-label="Email">
          <FaEnvelope className="hover:text-cyan-800 transition" />
        </Link>
      </div>
    </section>
  );
}
