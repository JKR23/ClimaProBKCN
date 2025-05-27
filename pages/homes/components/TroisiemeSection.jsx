import { FaCheckCircle, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function TroisiemeSection() {
   return (
      <section className="py-16 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
            <p className="text-lg text-gray-600">
               Découvrez les raisons pour lesquelles nos clients nous font confiance pour leurs
               besoins en climatisation, chauffage et ventilation.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Cartes avec icônes */}
            {[
               {
                  icon: <FaCheckCircle size={40} className="text-blue-600" />,
                  title: 'Installation professionnelle',
                  text: 'Nos techniciens certifiés assurent une installation rapide et conforme aux normes.'
               },
               {
                  icon: <FaTools size={40} className="text-green-600" />,
                  title: 'Réparation rapide',
                  text: 'Nous intervenons rapidement pour réparer vos équipements et minimiser les désagréments.'
               },
               {
                  icon: <FaShieldAlt size={40} className="text-yellow-600" />,
                  title: 'Entretien préventif',
                  text: 'Un entretien régulier prolonge la durée de vie et optimise l’efficacité.'
               },
               {
                  icon: <FaUsers size={40} className="text-red-600" />,
                  title: 'Service client dédié',
                  text: 'Notre équipe vous accompagne dans tous vos projets.'
               }
            ].map((item, i) => (
               <div key={i} className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <div className="mr-4">{item.icon}</div>
                  <div>
                     <h4 className="text-xl font-semibold">{item.title}</h4>
                     <p className="text-gray-600">{item.text}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
