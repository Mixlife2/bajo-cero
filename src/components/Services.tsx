export default function Services() {
    const servicios = [
      { title: "Importación a Pedido", desc: "Traemos el producto que necesitás, sin complicaciones." },
      { title: "Asesoramiento", desc: "Te ayudamos a elegir qué conviene importar." },
      { title: "Stock Próximo", desc: "Productos populares listos para entrega." }
    ];
  
    return (
      <section className="py-16 bg-white text-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-8">Nuestros Servicios</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {servicios.map((s, i) => (
            <div key={i} className="p-6 border rounded shadow-md w-72">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  