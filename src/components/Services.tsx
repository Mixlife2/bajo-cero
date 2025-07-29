'use client';

export default function Services() {
  const servicios = [
    {
      title: 'Importación a pedido',
      description: 'Te conseguimos el producto que necesitás, al mejor precio.',
      icon: '📦',
    },
    {
      title: 'Asesoramiento personalizado',
      description: 'Te guiamos en cada paso, desde la compra hasta la entrega.',
      icon: '🧑‍💼',
    },
    {
      title: 'Próximamente: Stock propio',
      description: 'Tendremos productos en Argentina listos para entrega inmediata.',
      icon: '🏬',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicios.map((servicio, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{servicio.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {servicio.title}
            </h3>
            <p className="text-gray-600">{servicio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
