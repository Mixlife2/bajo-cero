export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white py-6 text-center">
        <div className="mb-2">
          <a href="https://www.instagram.com/bajo_cero_importaciones" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">
            Instagram
          </a>
          <a href="https://wa.me/5493764708793" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">
            WhatsApp
          </a>
          <a href="mailto:baj0cero@hotmail.com" className="mx-2 hover:underline">
            Email
          </a>
        </div>
        <p className="text-sm">&copy; {year} Bajo Cero Importaciones. Todos los derechos reservados.</p>
      </footer>
    );
  }
  