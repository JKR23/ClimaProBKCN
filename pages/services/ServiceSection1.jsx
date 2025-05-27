import LogoClim from '@/public/img/service2.jpeg';

export default function ServiceSection1() {
   return (
      <section
         className="relative bg-cover bg-center"
         style={{ backgroundImage: `url(${LogoClim.src})` }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center text-white">
            <h1 className="text-3xl font-semibold mb-4">NOS SERVICES</h1>
            <p className="text-lg">
               Découvrez nos solutions en climatisation, chauffage et ventilation adaptées à vos
               besoins.
            </p>
         </div>
      </section>
   );
}
