import LogoRealisation from '@/public/img/realisation1.jpg';

export default function Presentation() {
   return (
      <section
         className="relative bg-cover bg-center"
         style={{ backgroundImage: `url(${LogoRealisation.src})` }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center text-white">
            <h1 className="text-3xl font-semibold mb-4">NOS REALISATIONS</h1>
            <p className="text-lg text-yellow-400">
               ClimaPro Combustion est fière de ses projets
               <br /> réalisés en mécanique du bâtiment.
            </p>
         </div>
      </section>
   );
}
