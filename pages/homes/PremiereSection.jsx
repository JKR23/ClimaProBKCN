import LogoFamille from '@/public/img/familleSection1.jpg';

export default function PremiereSection() {
   return (
      <section
         className="relative bg-cover bg-center"
         style={{ backgroundImage: `url(${LogoFamille.src})` }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center text-white">
            <h3 className="text-3xl font-semibold mb-4">Pour vous aider à mieux respirer</h3>
            <p className="text-lg">
               Découvrez nos solutions en climatisation, chauffage et ventilation adaptées à vos
               besoins.
            </p>
         </div>
      </section>
   );
}
