'use client';

export default function HowItWorks() {
  const pasos = [
    {
      step: '1',
      title: 'Contactanos por WhatsApp',
      description: 'Nos escribís y nos contás qué producto necesitás importar.',
    },
    {
      step: '2',
      title: 'Cotizamos y gestionamos la compra',
      description: 'Te pasamos precio final y realizamos todo el proceso de importación.',
    },
    {
      step: '3',
      title: 'Recibís tu producto en Argentina',
      description: 'Te avisamos apenas llega. Lo recibís en tu domicilio o punto de entrega.',
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        ¿Cómo funciona?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pasos.map((paso, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <div className="text-4xl font-bold text-cyan-400 mb-4">
              Paso {paso.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{paso.title}</h3>
            <p className="text-gray-300">{paso.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
