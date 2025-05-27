import LogoSection from '@/public/img/imagePatronSection4.jpg';
import GoToContact from '@/pages/buttons/GoToContact';

export default function QuatriemeSection() {
   return (
      <section className="flex items-center justify-between py-16 px-6 max-w-7xl mx-auto">
         {/* Image à gauche */}
         <div className="w-1/2">
            <img
               src={LogoSection.src}
               alt="Entretien et maintenance"
               className="w-full h-auto rounded-lg shadow-lg"
            />
         </div>

         {/* Texte à droite */}
         <div className="w-1/2 pl-8 hover:shadow-lg rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">À propos</h3>
            <h2 className="text-2xl font-semibold mb-4">L’expérience à votre service.</h2>
            <p className="text-lg">
               Notre priorité : est de bâtir une relation de confiance avec chaque client, en
               proposant un service sur mesure qui respecte à la fois les délais et le budget
               établis. Que ce soit dans le cadre d’un projet de rénovation ou d’une nouvelle
               construction, nous sommes votre partenaire de confiance pour tout ce qui touche au
               chauffage, à la climatisation, à la ventilation et à la qualité de l’air intérieur.
            </p>
            <GoToContact />
         </div>
      </section>
   );
}
