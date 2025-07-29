'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Traemos tecnología del mundo a tus manos
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
        Importación a pedido, asesoramiento experto y acceso a productos que no llegan al país.
      </p>
      <Link
        href="https://wa.me/543764708793"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Importá ahora por WhatsApp
      </Link>
    </section>
  );
}
