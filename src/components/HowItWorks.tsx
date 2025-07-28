export default function HowItWorks() {
    const pasos = [
      { title: "1. Pedí cotización", desc: "Nos decís qué producto querés importar y te cotizamos rápido." },
      { title: "2. Confirmá tu pedido", desc: "Acordamos el pago y comenzamos el proceso de importación." },
      { title: "3. Recibí tu producto", desc: "Te avisamos cuando llega y lo recibís sin complicaciones." }
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">¿Cómo funciona?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {pasos.map((p, i) => (
            <div key={i} className="p-6 bg-white border rounded shadow-md w-72">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  